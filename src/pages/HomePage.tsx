import me from '../assets/me.webp'
import '../index.css'
import { type JSX } from 'react';
// import { Drawer } from 'vaul';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function HomePage() {
  return (
    <div className="bg-gradient-to-b from-[#2B2036] to-[#5c4a80] min-h-screen overflow-y-auto">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

function Header(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-between w-full relative p-5 sm:px-17">
      <h1 className="fancy text-6xl ml-2 break-words">
        <span className="sr-only">Portfolio of Jacob Ativo</span>
        Jacob Ativo
      </h1>
      <a
        href="https://drive.google.com/file/d/1Vx01k7iL8cglLl7mb8zViYiVfKSZ1tSS/view?usp=sharing"
        target="_blank"
        className="
          border-2 border-white rounded-lg 
          hover:bg-white active:bg-white transition-colors 
          font-[inter] text-white 
          hover:text-[#211B33] active:text-[#211B33] 
          flex items-center justify-center px-6 py-2
        "
        aria-label="Download Jacob Ativo Resume"
      >
        Resume
      </a>
    </div>
  );
}

function About(): JSX.Element {
  return (
    <section
      className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center sm:justify-stretch mt-6 lg:mt-9 mb-9 px-10 h-auto"
      aria-label="About Jacob Ativo – Computer Science Student, Software Developer, Embedded Systems Enthusiast"
    >
      <div className="w-full min-w-[320px] max-w-[35vw] max-h-[62vh] aspect-[2/3] bg-black overflow-hidden rounded-2xl">
        <img
          src={me}
          alt="Jacob Ativo at de Young Museum in San Francisco"
          className="w-full h-full object-cover object-[75%_0%]"
          loading="lazy"
        />
      </div>
      <div className="w-[320px] sm:w-full min-h-[480px] bg-[#211B33] rounded-2xl">
        <p className="font-[inter] text-2xl font-thin p-3.5 text-white">
          I build at the intersection of silicon and software. As a Computer Science senior at Cal State East Bay and a Research Assistant at the East Bay Deep Learning Lab, my work focuses on co-designing high-performance hardware-software systems and deploying ML architectures for humanitarian and disaster-response applications.<br /><br />
          This summer, I am joining Professor Priyanka Raina’s Stanford Accelerate Group as a Stanford SURF Fellow. I'll be diving into silicon bring-up, compiler optimization, and automated testing for Kirin—a fabricated ML accelerator SoC.<br /><br />
          Beyond the terminal, I serve as a peer mentor in the PIAA program supporting AAPI students. When I’m not optimizing assembly routines or training neural nets, you can find me weightlifting and watching live theatre.
        </p>
      </div>
    </section>
  );
}

function Projects(): JSX.Element {
  type Project = {
    title: string;
    description: string;
    demo?: string;
    source: string;
  };

  const projects: Project[] = [
    {
      title: "DreamPath",
      description: "AI video storytelling platform that lets users generate and publish branching 'choose-your-own-adventure' stories through a React Flow canvas. Built with Google Cloud Workflows, Firestore, and GCS.",
      demo: "https://youtu.be/HTXrhM-f8-0",
      source: "https://github.com/EugeneVuong/Dream-Path",
    },
    {
      title: "VexRiscv FPGA Research",
      description: "Built a reproducible VexRiscv FPGA bring-up pipeline with verification checkpoints and smoke tests. Validated custom RISC-V instruction workflows in Verilator simulation and on FPGA hardware.",
      demo: "https://youtube.com/playlist?list=PLMxPtMuESPDUCYTlmvYxATj9xP8s5TQhk&si=Rgd7Pnj4Am-lF2sq",
      source: "https://github.com/BigBoySanchez/VexRiscv",
    },
    {
      title: "EasyADs",
      description: "Won 'Best Use of Freepik' at the Self-Evolving Agents Hack. Built an agentic video-ad generation platform converting product inputs and trend data into ads using Freepik and Linkup.",
      demo: "https://devpost.com/software/easyads",
      source: "https://github.com/nicholasmanha/ag-frontend",
    },
    {
      title: "Libhal-exceptions",
      description: "Built a GitHub Actions workflow using QEMU and GDB to verify embedded C++ exception behavior across STM32F103 and LPC4078 targets. Hardened CI reliability with a watchdog and debugger diagnosis.",
      source: "https://github.com/libhal/libhal-exceptions",
    },
    {
      title: "Deep Learning Lab Research",
      description: "Built reproducible semi-supervised ML pipelines for disaster-response social media classification. Containerized GPU workflows and automated Bayesian sweep agents with Docker and Bash.",
      demo: "https://arxiv.org/pdf/2605.08448",
      source: "https://github.com/deeplearning-lab-csueb/LLM-guided-SSL-Crisis-Tweets-Classification",
    },
    {
      title: "Realyn Demo",
      description: "Developed and deployed a solo full-stack AI retail voice-sales assistant using Expo/React Native, FastAPI, Vapi voice agents, Docker, and AWS. Implemented product context capture.",
      source: "https://github.com/BigBoySanchez/realyn-demo",
    },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center mt-6 lg:mt-9 mb-9 px-10 h-auto"
      aria-label="Portfolio Projects – Hardware-Software Co-Design, Embedded Systems, Cloud & AI"
    >
      <h1 className="text-3xl font-bold text-white mb-8 font-[inter]">
        <span className="sr-only">
          Engineering Projects in FPGA, RISC-V, Embedded C++, Cloud Systems, and Machine Learning
        </span>
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.demo || project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#211B33] rounded-2xl shadow-md p-6 hover:shadow-xl active:shadow-xl transition-all duration-300 
        hover:-translate-y-2 active:-translate-y-2 hover:bg-[#2B2036] active:bg-[#2B2036] transform text-white flex flex-col justify-between"
            aria-label={`View details for ${project.title} project`}
          >
            <div>
              <h2 className="text-xl font-semibold font-[inter]">{project.title}</h2>
              <p className="text-gray-300 mt-2 font-[inter]">{project.description}</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                  aria-label={`Open ${project.title} demo`}
                  title="View Demo"
                  onClick={e => e.stopPropagation()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label={`View ${project.title} on GitHub`}
                title="View Source Code"
                onClick={e => e.stopPropagation()}
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Skills(): JSX.Element {
  const skills = {
    "Programming Languages": ["C/C++", "Python", "Verilog", "Bash", "Java", "JavaScript/TypeScript"],
    "Systems & Embedded": ["Linux", "Git/GitHub", "Docker", "GitHub Actions", "GDB", "QEMU", "Verilator", "FPGA", "RISC-V", "CI/CD"],
    "Cloud & AI Engineering": ["PyTorch", "Hugging Face", "Weights & Biases", "AWS", "Google Cloud Workflows", "Firestore", "GCS", "FastAPI", "Flask", "React/Next.js"]
  };

  return (
    <section
      className="flex flex-col items-center justify-center mt-6 lg:mt-9 mb-9 px-10 h-auto"
      aria-label="Skills – Programming Languages, Systems & Embedded, Cloud & AI Engineering"
    >
      <div className="w-full max-w-5xl bg-[#211B33] rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-white mb-8 font-[inter]">
          <span className="sr-only">
            Skills in Programming Languages, Systems & Embedded, and Cloud & AI Engineering
          </span>
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-white mb-4 font-[inter]">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-700 text-white text-sm px-3 py-1 rounded-full font-[inter] whitespace-nowrap"
                    aria-label={`Skill: ${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact(): JSX.Element {
  return (
    <footer
      className="flex flex-col items-center justify-end mt-6 lg:mt-9 mb-0 h-auto"
      aria-label="Contact Jacob Ativo – Email, LinkedIn, GitHub"
    >
      <div className="w-full bg-[#211B33] p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300 font-[inter]">
            <span className="sr-only">Copyright Jacob Ativo</span>
            &copy; {new Date().getFullYear()} Jacob Ativo
          </p>
          <div className="flex gap-6 text-lg text-gray-300">
            <a
              href="mailto:jacobmath3@gmail.com"
              className="hover:text-white active:text-white transition-colors"
              aria-label="Email Jacob Ativo"
              title="Email Jacob Ativo"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-ativo-awesome-programmer/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white active:text-white transition-colors"
              aria-label="Jacob Ativo LinkedIn Profile"
              title="Jacob Ativo LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/BigBoySanchez/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white active:text-white transition-colors"
              aria-label="Jacob Ativo GitHub Portfolio"
              title="Jacob Ativo GitHub Portfolio"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default HomePage;

