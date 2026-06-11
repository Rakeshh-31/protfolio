import { motion } from 'motion/react';
import { Briefcase, Brain, Code2, Target, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Users,
      title: 'Who I am',
      description: 'A B.Tech Information Technology student at B V Raju Institute of Technology with a clear focus on software engineering roles.',
    },
    {
      icon: Code2,
      title: 'What I build',
      description: 'React, Java, Node.js, Express.js, MongoDB, and MySQL applications with clean interfaces and practical workflows.',
    },
    {
      icon: Briefcase,
      title: 'Internship experience',
      description: 'Worked as a Software Developer Intern at Deepklarity on Harness Kit analytics and interactive product experiences.',
    },
    {
      icon: Brain,
      title: 'Problem solving',
      description: 'Solved 500+ DSA problems and maintain a 1600+ LeetCode rating, which helps with interviews and timed coding rounds.',
    },
    {
      icon: Target,
      title: 'Career goal',
      description: 'Secure a software engineering internship or SDE-1 role where I can ship production software and keep learning fast.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-white to-blue-100 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-slate-300 text-lg max-w-4xl mx-auto leading-8">
            I am a software developer who likes building useful web products, learning from shipping real work, and approaching engineering with strong fundamentals. My internship at Deepklarity gave me practical exposure to product dashboards, UI improvements, bug fixing, and team communication in an Agile environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-700 bg-slate-900/85 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:border-blue-400/40 hover:shadow-blue-500/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-slate-700">
                <item.icon className="text-white" size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}