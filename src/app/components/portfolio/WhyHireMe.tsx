import { motion } from 'motion/react';
import { Clock3, Code2, Rocket, ShieldCheck, Users } from 'lucide-react';

export function WhyHireMe() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Real Internship Experience',
      description: 'Contributed to production-facing work at Deepklarity with dashboards, interactive product experiences, UI improvements, and bug fixes.',
    },
    {
      icon: Code2,
      title: 'Strong Problem Solving',
      description: 'Solved 500+ DSA problems and maintain a 1600+ LeetCode rating, which signals interview discipline and technical depth.',
    },
    {
      icon: Rocket,
      title: 'Full Stack Development',
      description: 'Comfortable across React, JavaScript, Node.js, Express.js, MongoDB, and MySQL for end-to-end delivery.',
    },
    {
      icon: Clock3,
      title: 'Fast Learner',
      description: 'Moves quickly from requirements to implementation and adapts well to new tools, APIs, and team conventions.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Uses Git, GitHub, Slack, and Agile workflows to keep communication clear and execution aligned.',
    },
  ];

  return (
    <section id="why-hire-me" className="py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-white to-blue-100 bg-clip-text text-transparent">
            Why Hire Me
          </h2>
          <p className="text-slate-300 text-lg">Key strengths that showcase my readiness for software engineering internships and full-time opportunities.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-blue-500/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-slate-700">
                <reason.icon className="text-white" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
              <p className="text-sm leading-6 text-slate-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}