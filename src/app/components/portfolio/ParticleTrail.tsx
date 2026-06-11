import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export function ParticleTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;

    const createParticle = (e: MouseEvent) => {
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 1000);
    };

    let lastTime = 0;
    const throttledCreateParticle = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 50) {
        createParticle(e);
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', throttledCreateParticle);
    return () => window.removeEventListener('mousemove', throttledCreateParticle);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997]">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"
            style={{
              left: particle.x,
              top: particle.y,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
