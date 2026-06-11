import { motion } from 'motion/react';

export function FloatingElements() {
  const elements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: el.size,
            height: el.size,
            left: `${el.x}%`,
            top: `${el.y}%`,
            background: `radial-gradient(circle, ${
              el.id % 3 === 0
                ? 'rgba(59, 130, 246, 0.1)'
                : el.id % 3 === 1
                ? 'rgba(139, 92, 246, 0.1)'
                : 'rgba(236, 72, 153, 0.1)'
            } 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
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
