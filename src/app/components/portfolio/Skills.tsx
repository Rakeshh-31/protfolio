import { motion } from 'motion/react';
import { BookOpen, Boxes, Code2, Database, Globe, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      skills: [
        { name: 'Java', proficiency: 90, level: 'Advanced' },
        { name: 'C', proficiency: 82, level: 'Proficient' },
        { name: 'C++', proficiency: 82, level: 'Proficient' },
        { name: 'Python', proficiency: 80, level: 'Proficient' },
      ],
    },
    {
      icon: Globe,
      title: 'Frontend',
      skills: [
        { name: 'HTML', proficiency: 92, level: 'Advanced' },
        { name: 'CSS', proficiency: 90, level: 'Advanced' },
        { name: 'JavaScript', proficiency: 88, level: 'Advanced' },
        { name: 'React', proficiency: 90, level: 'Advanced' },
        { name: 'Next.js', proficiency: 82, level: 'Proficient' },
        { name: 'Tailwind CSS', proficiency: 88, level: 'Advanced' },
      ],
    },
    {
      icon: Boxes,
      title: 'Backend',
      skills: [
        { name: 'Node.js', proficiency: 84, level: 'Proficient' },
        { name: 'Express.js', proficiency: 84, level: 'Proficient' },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'MongoDB', proficiency: 86, level: 'Proficient' },
        { name: 'MySQL', proficiency: 82, level: 'Proficient' },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: [
        { name: 'Git', proficiency: 90, level: 'Advanced' },
        { name: 'GitHub', proficiency: 90, level: 'Advanced' },
        { name: 'VS Code', proficiency: 96, level: 'Daily use' },
        { name: 'Vercel', proficiency: 80, level: 'Proficient' },
        { name: 'Render', proficiency: 76, level: 'Proficient' },
      ],
    },
    {
      icon: BookOpen,
      title: 'Core CS',
      skills: [
        { name: 'OOP', proficiency: 88, level: 'Advanced' },
        { name: 'DBMS', proficiency: 84, level: 'Proficient' },
        { name: 'Operating Systems', proficiency: 80, level: 'Proficient' },
        { name: 'Computer Networks', proficiency: 78, level: 'Proficient' },
        { name: 'DSA', proficiency: 92, level: 'Advanced' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-white to-blue-100 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-slate-300 text-lg">A recruiter-friendly snapshot of my technical strengths with visual proficiency signals</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-700 bg-slate-900/85 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:border-blue-400/40 hover:shadow-blue-500/10"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-slate-700">
                  <category.icon className="text-white" size={22} />
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Proficiency</p>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
              <p className="text-sm text-slate-400 mb-4">Hands-on use and interview-ready familiarity across the stack.</p>

              <div className="space-y-3">
                {category.skills.map((skill: { name: string; proficiency: number; level: string }) => (
                  <div key={skill.name} className="rounded-2xl border border-slate-700 bg-slate-950/70 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-slate-100">{skill.name}</span>
                      <span className="text-xs text-slate-400">{skill.level}</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-400 to-slate-200"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}