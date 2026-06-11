import { motion } from 'motion/react';
import { Code2, Download, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export function Contact() {
  const resumeDownloadUrl = "/resume/Duppelli-Rakesh-Resume.pdf";

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'rakeshduppelli11@gmail.com', href: 'mailto:rakeshduppelli11@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91-6305588542', href: 'tel:+916305588542' },
    { icon: Github, label: 'GitHub', value: 'Rakeshh-31', href: 'https://github.com/Rakeshh-31' },
    { icon: Linkedin, label: 'LinkedIn', value: 'rakesh-duppelli', href: 'https://www.linkedin.com/in/rakesh-duppelli-b9873a301/' },
    { icon: Code2, label: 'LeetCode', value: 'rakeshduppelli', href: 'https://leetcode.com/u/Rakesh_Duppelli31/' },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-white to-blue-100 bg-clip-text text-transparent">
            Open to Software Engineering Internships and Full-Time Opportunities
          </h2>
          
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-slate-700 transition-transform duration-300 group-hover:scale-105">
                    <info.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-12 shadow-lg shadow-black/10 backdrop-blur-sm">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-slate-700 text-white">
                <Send size={34} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to discuss internships, interviews, or a build opportunity?</h3>
              <p className="text-slate-300 mb-6 leading-7">
                If you need a candidate who can communicate clearly, ship frontend features, work across the stack, and solve problems with discipline, I am ready to talk.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton>
                  <a
                    href={resumeDownloadUrl}
                    download="Duppelli-Rakesh-Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="mailto:rakeshduppelli11@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-950/60 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-blue-400/40 hover:bg-slate-800"
                  >
                    Send Email
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-slate-700"
        >
          <p className="text-slate-400">© 2026 Duppelli Rakesh — All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}