import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export function Hero() {
 const resumeDownloadUrl = "/resume/Duppelli-Rakesh-Resume.pdf";

  const metrics = [
    { value: '500+', label: 'DSA Problems Solved' },
    { value: '1600+', label: 'LeetCode Rating' },
    { value: 'Intern', label: 'Software Developer Intern' },
    { value: '2', label: 'Full Stack Projects' },
    { value: 'MERN', label: 'React & MERN Stack' },
    { value: '8.45', label: 'B.Tech IT CGPA' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Rakeshh-31', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rakesh-duppelli-b9873a301/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rakeshduppelli11@gmail.com', label: 'Email' },
  ];

  const quickFacts = [
    { label: 'Target Roles', value: 'Software Developer, Frontend Developer, Full Stack Developer, SDE-1' },
    { label: 'Focus', value: 'Production-grade React interfaces, backend APIs, and interview-ready problem solving' },
    { label: 'Collaboration', value: 'Comfortable working with Agile teams, GitHub workflows, and Slack communication' },
  ];

  return (
    <section id="home" className="min-h-[100vh] min-h-[100dvh] flex items-center pt-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="mb-8 lg:hidden"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/90 p-4 shadow-2xl shadow-black/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/10" />
                <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-700 bg-slate-950">
                  <img
                    src="/profile.jpg"
                    alt="Duppelli Rakesh"
                    className="aspect-[4/5] w-full object-cover object-top"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <div className="relative mt-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-white">Rakesh Duppelli</div>
                    <div className="text-sm text-slate-400">Software Developer</div>
                  </div>
                  <div className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
                    Open to opportunities
                  </div>
                </div>

                <div className="relative mt-4 grid grid-cols-3 gap-3">
                  {[
                    { value: '500+', label: 'DSA' },
                    { value: '1600+', label: 'Rating' },
                    { value: 'MERN', label: 'Stack' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-slate-700 bg-slate-950/70 px-3 py-3 text-center">
                      <div className="text-base font-bold text-white">{item.value}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-500">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-100 mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Open to Software Engineering Internships and Full-Time Opportunities
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white"
            >
              <span className="bg-gradient-to-r from-blue-300 via-white to-slate-200 bg-clip-text text-transparent">
                Software Developer specializing in React, Java, and Full Stack Web Development
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl leading-8"
            >
              Built scalable web applications, solved 500+ DSA problems, and contributed to real-world products as a Software Developer Intern at Deepklarity.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-slate-400 max-w-2xl leading-7"
            >
              I build recruiter-ready products that combine clean UI systems, reliable backend logic, and clear engineering judgment.
            </motion.p>

           <motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.55 }}
  className="mt-8 flex flex-wrap gap-4"
>
  {/* View Resume */}
  <MagneticButton>
    <motion.a
      href={resumeDownloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-blue-400/50 hover:bg-slate-800"
    >
      View Resume
    </motion.a>
  </MagneticButton>

  {/* Download Resume */}
  <MagneticButton>
    <motion.a
      href={resumeDownloadUrl}
      download="Duppelli-Rakesh-Resume.pdf"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
    >
      <Download size={18} />
      Download Resume
    </motion.a>
  </MagneticButton>

  {/* Hire Me */}
  <MagneticButton>
    <motion.a
      href="mailto:rakeshduppelli11@gmail.com"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-blue-400/50 hover:bg-slate-800"
    >
      Hire Me
      <ArrowRight size={18} />
    </motion.a>
  </MagneticButton>

  {/* Contact */}
  <MagneticButton>
    <motion.a
      href="#contact"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-transparent px-6 py-3 font-semibold text-slate-100 transition-all duration-300 hover:border-blue-400/50 hover:bg-slate-800/70"
    >
      Contact
    </motion.a>
  </MagneticButton>
</motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
            >
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 shadow-lg shadow-black/10"
                >
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{metric.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-blue-400/40 hover:text-white"
                >
                  <link.icon size={16} />
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/10 via-transparent to-slate-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/85 p-6 shadow-2xl shadow-black/20">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-700 bg-slate-950">
                <img
                  src="/profile.jpg"
                  alt="Duppelli Rakesh"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {['React', 'Java', 'Node.js', 'MERN', 'DSA'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {quickFacts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{fact.label}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}