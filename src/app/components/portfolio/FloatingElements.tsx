import { useMemo, useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function FloatingElements() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const elementCount = isMobile ? 5 : 18;

  const elements = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 40,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * -10, // negative delay means start immediately
      targetX: Math.random() * 80 - 40,
      targetY: Math.random() * 80 - 40,
    }));
  }, []);

  // Only render elements up to elementCount
  const visibleElements = elements.slice(0, elementCount);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {visibleElements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full will-change-transform"
          style={{
            width: el.size,
            height: el.size,
            left: `${el.x}%`,
            top: `${el.y}%`,
            // radial-gradient simulates the soft blur look without expensive filter: blur CSS
            background: `radial-gradient(circle, ${
              el.id % 3 === 0
                ? 'rgba(59, 130, 246, 0.08)'
                : el.id % 3 === 1
                ? 'rgba(139, 92, 246, 0.08)'
                : 'rgba(236, 72, 153, 0.06)'
            } 0%, rgba(15, 23, 42, 0) 70%)`,
          }}
          animate={{
            x: [0, el.targetX, 0],
            y: [0, el.targetY, 0],
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
