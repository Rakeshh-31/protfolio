import { motion } from 'motion/react';
import { Briefcase, CalendarDays, CheckCircle2, Code2, GitBranch, MessageSquare, Target } from 'lucide-react';

export function Experience() {
  const stories = [
    {
      title: 'Challenge',
      icon: Target,
      text: 'Need to analyze large ecosystem datasets and make product insights easier to understand for the team.',
    },
    {
      title: 'Action',
      icon: Code2,
      text: 'Built React analytics dashboards for Product Hunt, Chrome Extensions, and VS Code Extensions datasets inside Harness Kit.',
    },
    {
      title: 'Result',
      icon: CheckCircle2,
      text: 'Improved accessibility and data visibility for product analysis and created a clearer workflow for internal review.',
    },
    {
      title: 'Challenge',
      icon: MessageSquare,
      text: 'Add product value beyond dashboards while keeping the UI engaging and practical.',
    },
    {
      title: 'Action',
      icon: Briefcase,
      text: 'Built Pictionary Game and Word Search Game, fixed bugs, and enhanced UI components with reusable React patterns.',
    },
    {
      title: 'Result',
      icon: GitBranch,
      text: 'Delivered two interactive experiences and contributed to a cleaner, more maintainable Harness Kit codebase.',
    },
  ];

  const technologies = ['React', 'JavaScript', 'Git', 'GitHub', 'Agile', 'Slack','Hugging Face', ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-white to-blue-100 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-slate-300 text-lg">Software Developer Intern experience with measurable product contribution</p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-slate-500 to-blue-300" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-16 md:pl-0"
          >
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-slate-100 ring-8 ring-slate-950" />

            <div className="mx-auto max-w-5xl rounded-3xl border border-slate-700 bg-slate-900/70 p-6 md:p-8 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-blue-500/10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-100 mb-3">
                    <Briefcase size={14} />
                    Software Developer Intern
                  </div>
                  <h3 className="text-2xl font-bold text-white">Deepklarity</h3>
                  <p className="text-blue-300 mt-1">Project: Harness Kit</p>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-2 flex-shrink-0">
                  <CalendarDays className="text-blue-300" size={18} />
                  <span className="text-white font-medium">March 2026 - April 2026</span>
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-7">
                Contributed to a product team focused on analytics, interactive learning experiences, and UI quality across Harness Kit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {stories.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4"
                  >
                    <div className="flex items-center gap-2 mb-3 text-white font-semibold">
                      <item.icon className="text-blue-300" size={18} />
                      {item.title}
                    </div>
                    <p className="text-slate-300 text-sm leading-6">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl bg-slate-950/70 border border-slate-700 p-4">
                  <div className="flex items-center gap-2 text-white font-semibold mb-2">
                    <Code2 size={18} className="text-blue-300" />
                    Impact
                  </div>
                  <p className="text-slate-300 text-sm leading-6">
                    Delivered analytics experiences and two interactive applications that supported data exploration across three product ecosystems.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950/70 border border-slate-700 p-4">
                  <div className="flex items-center gap-2 text-white font-semibold mb-2">
                    <MessageSquare size={18} className="text-blue-300" />
                    Collaboration
                  </div>
                  <p className="text-slate-300 text-sm leading-6">
                    Worked in Agile ceremonies, shared progress in Slack, and used Git and GitHub for team collaboration.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-white font-semibold mb-3">
                  <GitBranch size={18} className="text-blue-300" />
                  Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}