import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [hasHoverSupport, setHasHoverSupport] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setHasHoverSupport(mediaQuery.matches);
    if (!mediaQuery.matches) return;

    let rafId: number;

    const updateMousePosition = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;
        
        setMousePosition({ x, y });

        // Optimize pointer detection by using tag names and attributes
        // instead of calling getComputedStyle (which triggers layout recalculation)
        const target = e.target as HTMLElement | null;
        if (target) {
          const isInteractive = 
            target.closest('a') || 
            target.closest('button') || 
            target.closest('[role="button"]') ||
            target.closest('input') ||
            target.closest('select') ||
            target.closest('textarea') ||
            target.classList.contains('cursor-pointer');
          setIsPointer(!!isInteractive);
        }
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  if (!hasHoverSupport) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-purple-500 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x - 12}px, ${mousePosition.y - 12}px, 0) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      
      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-500 pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0)`,
        }}
      />

      {/* Trailing glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-32 h-32 rounded-full bg-purple-500/10 blur-2xl pointer-events-none z-[9998] will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x - 64}px, ${mousePosition.y - 64}px, 0)`,
        }}
      />
    </>
  );
}
