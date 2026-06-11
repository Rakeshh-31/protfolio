import { useEffect, useRef, useState } from 'react';

export function MouseGradient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasHoverSupport, setHasHoverSupport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setHasHoverSupport(mediaQuery.matches);
    if (!mediaQuery.matches) return;

    const container = containerRef.current;
    if (!container) return;

    let rafId: number;

    const updateMousePosition = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        container.style.setProperty('--mouse-x', `${x}%`);
        container.style.setProperty('--mouse-y', `${y}%`);
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
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.08) 25%, transparent 50%)`,
      }}
    />
  );
}
