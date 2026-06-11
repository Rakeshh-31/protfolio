import { motion } from 'motion/react';
import { ExternalLink, Github, Calendar, Code2, Stethoscope, Rocket, type LucideIcon } from 'lucide-react';
import { useState, useRef, useEffect, type MouseEvent as ReactMouseEvent } from 'react';

type Project = {
  id: string;
  title: string;
  summary: string;
  liveDemo: string;
  github: string;
  problem: string;
  solution: string;
  impact: string;
  keyFeatures: string[];
  technicalChallenges: string[];
  architecture: string[];
  techStack: string[];
  slides: { title: string; caption: string; metric: string }[];
  icon: LucideIcon;
};

const projects: Project[] = [
  {
    id: 'doctor-patient-management',
    title: 'Doctor Patient Appointment and Payment Management System',
    summary: 'A healthcare platform that streamlines appointment booking, secure payments, and schedule management for patients and doctors.',
    liveDemo: 'https://savelife-frontend.onrender.com/',
    github: 'https://github.com/Rakeshh-31/prescripto',
    problem: 'Patients needed a cleaner way to find doctors, book appointments, and manage payments without relying on manual coordination.',
    solution: 'Built a MERN stack appointment workflow with role-based flows for patients, doctors, and administrators.',
    impact: 'Consolidated booking, payment, and scheduling into one product flow, improving clarity for users and admins.',
    keyFeatures: [
      'Patient registration, appointment booking, and cancellation',
      'Secure payment flow and booking confirmation states',
      'Doctor availability management and admin oversight',
      'Responsive React UI with reusable dashboard components',
    ],
    technicalChallenges: [
      'Designing role-aware flows without cluttering the user experience',
      'Keeping booking and payment states consistent across screens',
      'Structuring components to support future feature expansion',
    ],
    architecture: [
      'React frontend for role-specific dashboards and booking screens',
      'Node.js and Express.js API layer for appointment and payment logic',
      'MongoDB collections for users, schedules, bookings, and transactions',
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    slides: [
      { title: 'Booking workflow', caption: 'Patient-facing schedule discovery and appointment flow', metric: 'Role-based navigation' },
      { title: 'Payment step', caption: 'Secure checkout and confirmation state for booked appointments', metric: 'Trust-first UX' },
      { title: 'Admin console', caption: 'Operational view for managing doctors, schedules, and bookings', metric: 'Control + visibility' },
    ],
    icon: Stethoscope,
  },
  {
    id: 'algonest',
    title: 'AlgoNest - Interactive DSA & Aptitude Learning Platform',
    summary: 'An interactive learning platform for DSA and aptitude practice with real-time coding and progress tracking.',
    liveDemo: 'https://bvrit-code-project.vercel.app/home',
    github: 'https://github.com/Rakeshh-31/bvrit-code-project',
    problem: 'Students needed a structured way to practice problem solving, receive feedback, and stay consistent with interview prep.',
    solution: 'Built a learning platform with curated practice sets, coding workflow support, and ranking-driven progress visibility.',
    impact: 'Helped turn interview preparation into a more guided and measurable experience.',
    keyFeatures: [
      'Curated DSA and aptitude problem sets',
      'Real-time coding with automated evaluation',
      'Ranking and progress tracking for consistent practice',
      'Clean React interface focused on study flow',
    ],
    technicalChallenges: [
      'Balancing learning guidance with an uncluttered interface',
      'Keeping the evaluation flow clear for users under test conditions',
      'Making progress state visible without adding visual noise',
    ],
    architecture: [
      'React frontend for practice, rankings, and learning journeys',
      'Node.js and Express.js backend for data access and progression logic',
      'MongoDB for structured problem, user, and leaderboard storage',
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    slides: [
      { title: 'Problem explorer', caption: 'Curated sets for DSA and aptitude practice', metric: '250+ problems' },
      { title: 'Live coding', caption: 'Interactive editor and evaluation experience for practice sessions', metric: 'Instant feedback' },
      { title: 'Progress view', caption: 'Ranking and completion tracking for interview prep consistency', metric: 'Motivation loop' },
    ],
    icon: Rocket,
  },
  {
    id: 'face-recognition-attendance',
    title: 'Face Recognition-Based Attendance System',
    summary: 'A computer vision attendance workflow using CNN and Haar Cascade algorithms for multi-face recognition.',
    liveDemo: '#',
    github: 'https://github.com/Rakeshh-31',
    problem: 'Manual attendance collection is slow and error-prone in classrooms and labs.',
    solution: 'Built a face-recognition pipeline that captures faces, identifies students, and records attendance automatically.',
    impact: 'Improved attendance speed and reduced manual effort for repeated classroom sessions.',
    keyFeatures: [
      'Real-time multi-face detection and recognition',
      'Automated attendance tracking',
      'Deep learning on unstructured image data',
      'Operational flow designed for repeated classroom use',
    ],
    technicalChallenges: [
      'Managing recognition consistency across varying lighting conditions',
      'Reducing false positives in multi-face environments',
      'Aligning the model output with attendance storage logic',
    ],
    architecture: [
      'Python vision pipeline for detection and recognition',
      'CNN and Haar Cascade processing for classroom identity matching',
      'Attendance logging flow built around repeatable capture sessions',
    ],
    techStack: ['Python', 'OpenCV', 'CNN', 'Haar Cascade'],
    slides: [
      { title: 'Capture flow', caption: 'Camera input and face detection pipeline', metric: 'Live recognition' },
      { title: 'Identity match', caption: 'Model-assisted student recognition step', metric: 'Reduced manual work' },
      { title: 'Attendance log', caption: 'Persisted session output for classroom tracking', metric: 'Automation' },
    ],
    icon: Calendar,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-white to-blue-100 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-300 text-lg">Case studies that show full-stack execution, product thinking, and problem solving</p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const rectRef = useRef<DOMRect | null>(null);
  const [hasHoverSupport, setHasHoverSupport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setHasHoverSupport(mediaQuery.matches);
  }, []);

  const handleMouseEnter = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!hasHoverSupport) return;
    rectRef.current = e.currentTarget.getBoundingClientRect();
    setIsHovered(true);
  };

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!hasHoverSupport || !rectRef.current || !cardRef.current) return;
    const x = e.clientX - rectRef.current.left;
    const y = e.clientY - rectRef.current.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rectRef.current = null;
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/90 shadow-xl shadow-black/10 transition-all duration-300 hover:border-blue-400/40"
    >
      {isHovered && hasHoverSupport && (
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(59,130,246,0.22), transparent 240px)`,
          }}
        />
      )}

      <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-slate-700 text-white">
              <project.icon size={22} />
            </div>
            <div>
              <p className="text-sm text-slate-400 uppercase tracking-[0.25em]">{project.id.replace(/-/g, ' ')}</p>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            </div>
          </div>

          <p className="text-slate-300 leading-7 mb-6">{project.summary}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300 mb-2">Problem</p>
              <p className="text-sm text-slate-300 leading-6">{project.problem}</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300 mb-2">Solution</p>
              <p className="text-sm text-slate-300 leading-6">{project.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300 mb-2">Impact</p>
              <p className="text-sm text-slate-300 leading-6">{project.impact}</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300 mb-2">Architecture</p>
              <ul className="space-y-2 text-sm text-slate-300 leading-6">
                {project.architecture.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.keyFeatures.map((feature) => (
                <li key={feature} className="rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-sm text-slate-300">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.liveDemo}
              target={project.liveDemo.startsWith('http') ? '_blank' : undefined}
              rel={project.liveDemo.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-400"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-950/70 px-5 py-3 font-semibold text-white transition-colors hover:border-blue-400/50 hover:bg-slate-800"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-700 bg-slate-950/60 p-5">
            <h4 className="text-lg font-semibold text-white mb-4">Technical Challenges</h4>
            <div className="space-y-3">
              {project.technicalChallenges.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-300 leading-6">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-950/60 p-5">
            <h4 className="text-lg font-semibold text-white mb-4">Delivery Highlights</h4>
            <div className="grid gap-3">
              {project.slides.map((slide) => (
                <div key={slide.title} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-white font-medium">{slide.title}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-blue-300">{slide.metric}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-6">{slide.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}