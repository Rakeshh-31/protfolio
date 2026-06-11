import { motion } from 'motion/react';
import { ExternalLink, Cloud, Code2, Brain, Network, type LucideIcon } from 'lucide-react';

type Certification = {
  icon: LucideIcon;
  title: string;
  issuer: string;
  description: string;
  link: string;
  color: string;
};

const certifications: Certification[] = [
  {
    icon: Cloud,
    title: 'Salesforce Agentforce Specialist',
    issuer: 'Salesforce',
    description: 'Practical understanding of agent workflows, support automation, and Salesforce service productivity patterns.',
    link: 'https://trailheadacademy.salesforce.com/certificate/exam-agentforce-specialist---AI-201',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cloud,
    title: 'AWS Solutions Architecture Job Simulation',
    issuer: 'AWS (Forage)',
    description: 'Simulation experience in cloud architecture design, deployment trade-offs, and scalable system thinking.',
    link: 'https://www.theforage.com/simulations/aws-apac/solutions-architecture-ts4o/completed',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Code2,
    title: 'Smart Interviews - Silver Certificate',
    issuer: 'Smart Interviews',
    description: 'Recognized performance in timed coding challenges focused on DSA problem solving.',
    link: 'https://smartinterviews.in/certificate/20d9d9a0',
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Network,
    title: 'JavaScript Essentials',
    issuer: 'Cisco Networking Academy',
    description: 'Strong JavaScript fundamentals including functions, control flow, events, and DOM interactions.',
    link: '#contact',
    color: 'from-emerald-500 to-green-400',
  },
  {
    icon: Brain,
    title: 'Machine Learning for Beginners',
    issuer: 'SoloLearn',
    description: 'Foundation-level understanding of machine learning concepts and practical terminology.',
    link: '#contact',
    color: 'from-rose-500 to-pink-500',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-white to-blue-100 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-slate-300 text-lg">Professional credentials that reinforce technical breadth and curiosity</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/70 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-blue-500/10"
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
              <div className="p-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4`}>
                  <cert.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-300 mb-3">{cert.issuer}</p>
                <p className="text-slate-300 text-sm leading-6 mb-4">{cert.description}</p>
                {cert.link.startsWith('http') && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors group"
                  >
                    <span>View Cerification</span>
                    <ExternalLink className="group-hover:translate-x-1 transition-transform" size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}