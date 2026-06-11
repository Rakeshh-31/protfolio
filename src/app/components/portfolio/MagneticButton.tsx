import { useRef, useState, useEffect, MouseEvent as ReactMouseEvent } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rectRef = useRef<DOMRect | null>(null);
  const [hasHoverSupport, setHasHoverSupport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setHasHoverSupport(mediaQuery.matches);
  }, []);

  const handleMouseEnter = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!hasHoverSupport) return;
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!hasHoverSupport || !rectRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = rectRef.current;
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    rectRef.current = null;
  };

  if (!hasHoverSupport) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
