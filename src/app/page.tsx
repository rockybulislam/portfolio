import { Terminal, FileUser } from "lucide-react";

export default function Home() {
  return (
    <main className="font-body selection:bg-primary-container selection:text-white">
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 md:px-12 bg-[#0A0A0A] border-b border-[#1E1E1E]">
        <div className="text-2xl font-bold text-[#F0EDE6] font-['Space_Grotesk'] uppercase tracking-tight after:content-['.'] after:text-[#C8441A] -ml-3.75">
          ROCKY.
        </div>
        <div className="hidden md:flex gap-8 items-center h-full">
          <a
            className="font-['Space_Grotesk'] uppercase tracking-tight text-[#5A5A5A] hover:text-[#F0EDE6] transition-colors duration-200"
            href="#"
          >
            PROJECTS
          </a>
          <a
            className="font-['Space_Grotesk'] uppercase tracking-tight text-[#F0EDE6] border-b-2 border-[#C8441A] pb-1 transition-colors duration-200"
            href="#"
          >
            EXPERIENCE
          </a>
          <a
            className="font-['Space_Grotesk'] uppercase tracking-tight text-[#5A5A5A] hover:text-[#F0EDE6] transition-colors duration-200"
            href="#"
          >
            STACK
          </a>
          <a
            className="font-['Space_Grotesk'] uppercase tracking-tight text-[#5A5A5A] hover:text-[#F0EDE6] transition-colors duration-200"
            href="#"
          >
            CONTACT
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span
            className="material-symbols-outlined text-[#F0EDE6] cursor-pointer hover:bg-[#141414] p-2 transition-transform scale-98"
            data-icon="terminal"
          >
            <Terminal></Terminal>
          </span>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-16 w-20 h-[calc(100vh-64px)] z-40 items-center py-8 bg-[#0A0A0A] border-r border-[#1E1E1E]">
        <div className="flex flex-col gap-12 items-center flex-grow">
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <a href="#" aria-label="GitHub" className="p-1 rounded">
              <svg
                className="w-6 h-6 text-[#5A5A5A] group-hover:text-[#F0EDE6] transition-all duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.4.97.11-.76.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.12-3.07 0 0 .98-.31 3.2 1.19.93-.26 1.93-.4 2.93-.4s2 .14 2.93.4c2.22-1.5 3.2-1.19 3.2-1.19.64 1.6.24 2.78.12 3.07.75.81 1.2 1.84 1.2 3.1 0 4.44-2.69 5.42-5.25 5.7.42.36.79 1.07.79 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12 24 5.73 18.27.5 12 .5z" />
              </svg>
            </a>
            <span className="font-['Fira_Code'] text-[10px] text-[#5A5A5A] group-hover:text-[#F0EDE6]">
              GITHUB
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <a href="#" aria-label="LinkedIn" className="p-1 rounded">
              <svg
                className="w-6 h-6 text-[#5A5A5A] group-hover:text-[#F0EDE6] transition-all duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-11h4v1.5A3.5 3.5 0 0 1 16 8zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
              </svg>
            </a>
            <span className="font-['Fira_Code'] text-[10px] text-[#5A5A5A] group-hover:text-[#F0EDE6]">
              LINKEDIN
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <span
              className="material-symbols-outlined text-[#5A5A5A] group-hover:text-[#F0EDE6] transition-all duration-300"
              data-icon="description"
            >
              <FileUser />
            </span>
            <span className="font-['Fira_Code'] text-[10px] text-[#5A5A5A] group-hover:text-[#F0EDE6]">
              description
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <span
              className="material-symbols-outlined text-[#C8441A] font-bold transition-all duration-300"
              data-icon="terminal"
            >
              <Terminal />
            </span>
            <span className="font-['Fira_Code'] text-[10px] text-[#C8441A] font-bold">
              SOURCE
            </span>
          </div>
        </div>
        <div className="rotate-[-90deg] whitespace-nowrap mb-8">
          <span className="font-['Fira_Code'] text-sm text-white tracking-widest uppercase bg-[#C8441A] px-5 py-2">
            HIRE ME
          </span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 md:px-8 w-full lg:pl-20">
        <div className="mx-auto w-full max-w-[80vw]">
          {/* Hero / Philosophy Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#1E1E1E]">
            <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center border-r border-[#1E1E1E]">
              <h1 className="font-headline text-5xl md:text-7xl leading-none mb-8 tracking-tighter">
                THE ENGINE<span className="text-primary-container">.</span>
              </h1>
              <p className="font-label text-primary-container text-sm mb-4">
                FULLSTACK DEV &amp; ROBIOTICS ENTHUSIAST
              </p>
              <h2 className="upercase text-3xl md:text-4xl font-light italic text-[#F0EDE6] border-l-4 border-primary-container pl-6 py-2 mb-8">
                "AN ORGANISM THAT TUENS COFFEE INTO CODE.."
              </h2>
              <div className="space-y-6 text-[#5A5A5A] leading-relaxed max-w-xl">
                <p>
                  I operate at the intersection of structural integrity and
                  aesthetic aggression. My approach to development isn't just
                  about shipping code; it's about engineering solutions that
                  withstand the chaos of scale.
                </p>
              </div>
            </div>
            {/* img section */}
            <div className="lg:col-span-5 relative lg:p-4.5 px-2.5 aspect-square lg:aspect-auto">
              <img
                className="w-full h-full object-cover grayscale brightness-90 contrast-125"
                alt="Monochrome portrait of a systems engineer, high-contrast brutalist aesthetic"
                src="rocky_img.webp"
              />
              <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay"></div>
              <div className="absolute bottom-6 left-6 p-4 bg-[#0A0A0A] border border-[#1E1E1E]">
                <span className="font-label text-[10px] text-[#5A5A5A]">
                  LATENCY: 12ms
                </span>
              </div>
            </div>
          </section>

          {/* Technical Stack Grid (Bento Style) */}
          <section className="mt-24">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h3 className="font-label text-primary-container text-xs mb-2">
                  SYSTEM ARCHITECTURE
                </h3>
                <h2 className="font-headline text-4xl uppercase">
                  TECH STACK<span className="text-primary-container">.</span>
                </h2>
              </div>
              <div className="hidden md:block h-px grow mx-8 bg-[#1E1E1E]"></div>
              <span className="font-label text-xs text-[#5A5A5A]">V.2.4.0</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Frontend */}
              <div className="md:col-span-2 lg:col-span-3 border border-[#1E1E1E] bg-[#141414] p-8 hover:border-primary-container transition-colors">
                <span
                  className="material-symbols-outlined text-primary-container mb-4"
                  data-icon="layers"
                >
                  layers
                </span>
                <h4 className="font-headline text-xl mb-6">FRONTEND ENGINE</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 font-label text-[11px] border border-[#5A5A5A] text-[#5A5A5A]">
                    REACT.JS
                  </span>
                  <span className="px-3 py-1 font-label text-[11px] border border-[#5A5A5A] text-[#5A5A5A]">
                    NEXT.JS
                  </span>
                  <span className="px-3 py-1 font-label text-[11px] border border-[#5A5A5A] text-[#5A5A5A]">
                    TYPESCRIPT
                  </span>
                  <span className="px-3 py-1 font-label text-[11px] border border-[#5A5A5A] text-[#5A5A5A]">
                    TAILWIND CSS
                  </span>
                  <span className="px-3 py-1 font-label text-[11px] border border-[#5A5A5A] text-[#5A5A5A]">
                    FRAMER MOTION
                  </span>
                </div>
              </div>
              {/* Backend */}
              <div className="md:col-span-2 lg:col-span-3 border border-[#1E1E1E] bg-[#141414] p-8 hover:border-primary-container transition-colors">
                <span
                  className="material-symbols-outlined text-primary-container mb-4"
                  data-icon="terminal"
                >
                  terminal
                </span>
                <h4 className="font-headline text-xl mb-6">
                  BACKEND &amp; DATA
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 font-label text-[11px] border border-[#5A5A5A] text-[#5A5A5A]">
                    NODE.JS
                  </span>
                  <span className="px-3 py-1 font-label text-[11px] border border-[#5A5A5A] text-[#5A5A5A]">
                    EXPRESS
                  </span>
                  <span className="px-3 py-1 font-label text-[11px] border border-[#5A5A5A] text-[#5A5A5A]">
                    MONGODB
                  </span>
                  <span className="px-3 py-1 font-label text-[11px] border border-[#5A5A5A] text-[#5A5A5A]">
                    POSTGRESQL
                  </span>
                  <span className="px-3 py-1 font-label text-[11px] border border-[#5A5A5A] text-[#5A5A5A]">
                    REDIS
                  </span>
                </div>
              </div>
              {/* Infrastructure */}
              <div className="md:col-span-4 border border-[#1E1E1E] bg-[#141414] p-8 hover:border-primary-container transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span
                      className="material-symbols-outlined text-primary-container mb-4"
                      data-icon="settings_ethernet"
                    >
                      settings_ethernet
                    </span>
                    <h4 className="font-headline text-xl mb-2">
                      INFRASTRUCTURE
                    </h4>
                    <p className="font-body text-sm text-[#5A5A5A] max-w-md">
                      Scalable deployment pipelines and cloud-native
                      architecture for high-availability systems.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    <span className="px-3 py-1 font-label text-[11px] border border-[#C8441A] text-[#C8441A]">
                      AWS
                    </span>
                    <span className="px-3 py-1 font-label text-[11px] border border-[#C8441A] text-[#C8441A]">
                      DOCKER
                    </span>
                    <span className="px-3 py-1 font-label text-[11px] border border-[#C8441A] text-[#C8441A]">
                      KUBERNETES
                    </span>
                    <span className="px-3 py-1 font-label text-[11px] border border-[#C8441A] text-[#C8441A]">
                      CI/CD
                    </span>
                  </div>
                </div>
              </div>
              {/* EEE */}
              <div className="md:col-span-2 border border-[#1E1E1E] bg-[#141414] p-8 hover:border-primary-container transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 font-label text-[40px] text-primary-container/10 select-none group-hover:text-primary-container/20 transition-colors">
                  EEE
                </div>
                <span
                  className="material-symbols-outlined text-primary-container mb-4"
                  data-icon="electric_bolt"
                >
                  electric_bolt
                </span>
                <h4 className="font-headline text-xl mb-4">HARDWARE CORE</h4>
                <ul className="font-label text-[11px] text-[#5A5A5A] space-y-1">
                  <li>&gt; EMBEDDED SYSTEMS</li>
                  <li>&gt; CIRCUIT DESIGN</li>
                  <li>&gt; FIRMWARE (C/C++)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="mt-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="font-headline text-4xl uppercase whitespace-nowrap">
                TIMELINE<span className="text-primary-container">.</span>
              </h2>
              <div className="h-[1px] w-full bg-[#1E1E1E]"></div>
            </div>
            <div className="space-y-0 border-l border-[#1E1E1E]">
              {/* Item 1 */}
              <div className="relative pl-8 pb-16">
                <div className="absolute top-0 left-[-4.5px] w-2 h-2 bg-primary-container"></div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <span className="font-label text-xs text-primary-container">
                    2025 — PRESENT
                  </span>
                  <h3 className="font-headline text-2xl uppercase">
                    Electrical and Electronic Engineering
                  </h3>
                </div>
                <p className="font-label text-xs text-[#5A5A5A] mb-4 uppercase">
                  Daffodil International University
                </p>
                <p className="font-body text-[#5A5A5A] max-w-3xl">
                  Architected and deployed a distributed MERN-based monitoring
                  system for industrial IoT grids. Reduced data latency by 45%
                  through custom Redis caching layers and optimized WebSocket
                  protocols.
                </p>
              </div>
              {/* Item 2 */}
              <div className="relative pl-8 pb-16">
                <div className="absolute top-0 left-[-4.5px] w-2 h-2 bg-[#1E1E1E]"></div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <span className="font-label text-xs text-[#5A5A5A]">
                    2021-2023
                  </span>
                  <h3 className="font-headline text-2xl uppercase">
                    Higher school certificate
                  </h3>
                </div>
                <p className="font-label text-xs text-[#5A5A5A] mb-4 uppercase">
                  Jashore Goverment college
                </p>
                <p className="font-body text-[#5A5A5A] max-w-3xl">
                  Developed real-time data visualization dashboards using React
                  and D3.js. Integrated hardware telemetry from EEE sensors into
                  cloud infrastructure via custom C++ gateways.
                </p>
              </div>
              {/* Item 3 */}
              <div className="relative pl-8">
                <div className="absolute top-0 left-[-4.5px] w-2 h-2 bg-[#1E1E1E]"></div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <span className="font-label text-xs text-[#5A5A5A]">
                    2015-2021
                  </span>
                  <h3 className="font-headline text-2xl uppercase">
                    Secondary School Certificate
                  </h3>
                </div>
                <p className="font-label text-xs text-[#5A5A5A] mb-4 uppercase">
                  Carew's High School
                </p>
                <p className="font-body text-[#5A5A5A] max-w-3xl">
                  Prototyped PCB layouts and optimized power management firmware
                  for autonomous delivery drones. Transitioned to full-stack
                  development to build internal testing tools.
                </p>
              </div>
            </div>
          </section>

          {/* Inner Compass / Narrative */}
          <section className="mt-32 grid grid-cols-1 lg:grid-cols-2 border border-[#1E1E1E]">
            <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-[#1E1E1E] bg-[#141414]">
              <h3 className="font-headline text-3xl mb-8 uppercase">
                INNER COMPASS<span className="text-primary-container">.</span>
              </h3>
              <div className="space-y-6 font-body text-[#F0EDE6] leading-relaxed">
                <p>
                  Logic is the only immutable law. In a world of fleeting design
                  trends and bloated frameworks, my compass points toward
                  efficiency and performance.
                </p>
                <p>
                  I view every project as a machine. If a single part isn't
                  serving a purpose, it’s a liability. My philosophy is rooted
                  in the brutal honesty of the machine: either it works, or it
                  doesn't. There is no middle ground.
                </p>
                <p className="font-label text-primary-container uppercase text-xs tracking-[0.2em] mt-12">
                  SYSTEMS_INTEGRITY_CHECK: PASSED
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="border-r border-[#1E1E1E] flex flex-col items-center justify-center p-8 gap-4 group cursor-crosshair">
                <span
                  className="material-symbols-outlined text-4xl text-[#5A5A5A] group-hover:text-primary-container transition-colors"
                  data-icon="architecture"
                >
                  UI/UX
                </span>
                <span className="font-label text-[10px] text-[#5A5A5A]">
                  PRECISION
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-8 gap-4 group cursor-crosshair">
                <span
                  className="material-symbols-outlined text-4xl text-[#5A5A5A] group-hover:text-primary-container transition-colors"
                  data-icon="speed"
                >
                  speed
                </span>
                <span className="font-label text-[10px] text-[#5A5A5A]">
                  VELOCITY
                </span>
              </div>
              <div className="border-t border-r border-[#1E1E1E] flex flex-col items-center justify-center p-8 gap-4 group cursor-crosshair">
                <span
                  className="material-symbols-outlined text-4xl text-[#5A5A5A] group-hover:text-primary-container transition-colors"
                  data-icon="security"
                >
                  security
                </span>
                <span className="font-label text-[10px] text-[#5A5A5A]">
                  STABILITY
                </span>
              </div>
              <div className="border-t border-[#1E1E1E] flex flex-col items-center justify-center p-8 gap-4 group cursor-crosshair">
                <span
                  className="material-symbols-outlined text-4xl text-[#5A5A5A] group-hover:text-primary-container transition-colors"
                  data-icon="rebase"
                >
                  rebase
                </span>
                <span className="font-label text-[10px] text-[#5A5A5A]">
                  SCALABILITY
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 md:px-12 border-t border-[#1E1E1E] flex flex-col md:flex-row justify-between items-center bg-[#0A0A0A] lg:pl-32">
        <div className="text-[#F0EDE6] font-['Fira_Code'] text-[10px] tracking-widest uppercase mb-4 md:mb-0">
          ©2026 ROCKY. Made with ☕ and Love.
        </div>
        <div className="flex gap-8">
          <a
            className="font-['Fira_Code'] text-[10px] tracking-widest uppercase text-[#5A5A5A] hover:text-[#C8441A] transition-opacity opacity-80 hover:opacity-100"
            href="#"
          >
            GITHUB
          </a>
          <a
            className="font-['Fira_Code'] text-[10px] tracking-widest uppercase text-[#5A5A5A] hover:text-[#C8441A] transition-opacity opacity-80 hover:opacity-100"
            href="#"
          >
            LINKEDIN
          </a>
          <a
            className="font-['Fira_Code'] text-[10px] tracking-widest uppercase text-[#5A5A5A] hover:text-[#C8441A] transition-opacity opacity-80 hover:opacity-100"
            href="#"
          >
            TWITTER
          </a>
        </div>
      </footer>
    </main>
  );
}
