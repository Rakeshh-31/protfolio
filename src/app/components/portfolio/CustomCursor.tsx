import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-purple-500 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-500 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 35,
        }}
      />

      {/* Trailing glow */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full bg-purple-500/20 blur-2xl pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
        }}
      />
    </>
  );
}
