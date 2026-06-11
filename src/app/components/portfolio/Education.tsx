import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'B.Tech',
      major: 'Information Technology',
      institute: 'B V Raju Institute of Technology',
      year: 'Pursuing',
      cgpa: '8.45',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-white to-blue-100 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-slate-300 text-lg">B.Tech Information Technology | Academic foundation for software engineering roles</p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01, x: 6 }}
              className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-blue-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-slate-700 flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {edu.degree}
                        {edu.major && <span className="text-slate-400"> - {edu.major}</span>}
                      </h3>
                      <p className="text-blue-300 mb-2">{edu.institute}</p>
                      <p className="text-slate-400">{edu.year}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/15 to-slate-700/15 px-4 py-2 rounded-lg border border-blue-400/20">
                      <Award className="text-blue-300" size={20} />
                      <span className="text-xl font-bold text-white">{edu.cgpa}</span>
                      <span className="text-slate-400">CGPA</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}