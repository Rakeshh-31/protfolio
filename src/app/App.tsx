import { Hero } from './components/portfolio/Hero';
import { About } from './components/portfolio/About';
import { Education } from './components/portfolio/Education';
import { Projects } from './components/portfolio/Projects';
import { Experience } from './components/portfolio/Experience';
import { WhyHireMe } from './components/portfolio/WhyHireMe';
import { Skills } from './components/portfolio/Skills';
import { Achievements } from './components/portfolio/Achievements';
import { Certifications } from './components/portfolio/Certifications';
import { Contact } from './components/portfolio/Contact';
import { Navigation } from './components/portfolio/Navigation';
import { ParticleTrail } from './components/portfolio/ParticleTrail';
import { MouseGradient } from './components/portfolio/MouseGradient';
import { FloatingElements } from './components/portfolio/FloatingElements';

export default function App() {
  return (
    <div className="min-h-[100vh] min-h-[100dvh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <ParticleTrail />
      <MouseGradient />
      <FloatingElements />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <WhyHireMe />
        <Skills />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}