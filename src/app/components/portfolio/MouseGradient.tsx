import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function MouseGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      animate={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 25%, transparent 50%)`,
      }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    />
  );
}
