import { motion } from 'motion/react';
import { Trophy, Target, Medal, type LucideIcon } from 'lucide-react';

type Achievement = {
  icon: LucideIcon;
  value: string;
  title: string;
  description: string;
  color: string;
};

const achievements: Achievement[] = [
  {
    icon: Target,
    value: '500+',
    title: 'DSA Problems Solved',
    description: 'Consistent practice across LeetCode and problem sets.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Trophy,
    value: '1600+',
    title: 'LeetCode Rating',
    description: 'Competitive programming signal that reflects speed and accuracy under pressure.',
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Medal,
    value: 'Webathon',
    title: 'Hackathon Participation',
    description: 'Built and presented ideas in a time-bound collaboration setting.',
    color: 'from-amber-500 to-orange-500',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-white to-blue-100 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-slate-300 text-lg">Milestones and recognitions that reinforce interview readiness</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/85 shadow-lg shadow-black/10 transition-all duration-300 hover:border-blue-400/40 hover:shadow-blue-500/10"
            >
              <div className={`h-2 bg-gradient-to-r ${achievement.color}`} />
              <div className="p-8">
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${achievement.color}`}>
                  <achievement.icon className="text-white" size={30} />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{achievement.value}</p>
                <h3 className="text-2xl font-semibold text-white mb-3">{achievement.title}</h3>
                <p className="text-slate-300 leading-7">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}