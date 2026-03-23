import { useEffect, useRef } from 'react'
import cpLogo from './assets/cp_logo.png'
import lpcLogo from './assets/lpc_logo.png'
import amoebaLogo from './assets/amoebaLogoTransparent.jpg'
import cpgdLogo from './assets/cpgd_logo.png'
import lnLogo from './assets/ln_logo.png'
import ghLogo from './assets/gh_logo.png'
import itchLogo from './assets/itchio_logo.png'

// Attaches IntersectionObserver to all [data-reveal] elements inside the ref'd container
function useScrollReveal(containerRef) {
  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('[data-reveal]')
    if (!elements?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target) // animate once
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [containerRef])
}

function About() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <div>
      {/* Inject reveal styles once, scoped to this component */}
      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        [data-reveal].reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        /* Stagger children inside a reveal-group */
        [data-reveal-group] > * {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        [data-reveal-group].reveal-visible > *:nth-child(1) { transition-delay: 0.05s; }
        [data-reveal-group].reveal-visible > *:nth-child(2) { transition-delay: 0.15s; }
        [data-reveal-group].reveal-visible > *:nth-child(3) { transition-delay: 0.25s; }
        [data-reveal-group].reveal-visible > *:nth-child(4) { transition-delay: 0.35s; }
        [data-reveal-group].reveal-visible > *:nth-child(5) { transition-delay: 0.45s; }
        [data-reveal-group].reveal-visible > *:nth-child(6) { transition-delay: 0.55s; }
        [data-reveal-group].reveal-visible > * {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section ref={sectionRef} className="py-20 bg-background text-textprime text-center items-center font-primary">

        {/* Hero / Intro */}
        <div className="container mx-auto" data-reveal>
          <div className="bg-[url('./assets/acisne32.jpg')] bg-cover bg-center h-64 w-64 rounded-full mx-auto mb-8 shadow-2xl shadow-textsec" />
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <p className="text-lg">
            I am a driven computer science student with a curiosity for solving problems and a passion for 
            technology. Whether it's developing efficient algorithms, making video games, learning new languages, 
            or exploring the frontiers of artificial intelligence and machine learning, I thrive on turning ideas 
            into impactful products. With proven experience in many areas of the computer science field, I have 
            successfully led projects and teams that have not only met goals, but also exceeded expectations throughout 
            my academic career. I take pride in my ability to adapt, innovate, and deliver results in fast-paced 
            environments. I strive to be ambitious and I am eager to continue sharpening my skills, collaborating with 
            talented professionals, and working on impactful projects that make a difference.
          </p>
        </div>

        {/* Skills */}
        <div className="container mx-auto mt-12">
          <h2 className="text-4xl font-bold mb-4" data-reveal>My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4" data-reveal data-reveal-group>
            <div className="bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec">
              <h3 className="font-bold mb-2">Programming Languages</h3>
              <p>Python, C, C++, C#, HTML, CSS, JavaScript, Kotlin</p>
            </div>
            <div className="bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec">
              <h3 className="font-bold mb-2">Systems & Tools</h3>
              <p>
                REST APIs, DBMS, Cloud Platforms (Azure, Vercel), Database Systems (SQL & NoSQL), CI/CD,
                Git, GitHub, React, MongoDB, Firebase/Firestore, Supabase, scikit-learn, StableBaselines3
              </p>
            </div>
            <div className="bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec">
              <h3 className="font-bold mb-2">Concepts & Experience</h3>
              <p>
                Full-Stack Development (Backend & Frontend Design), Scalable Systems, Distributed Systems, Cloud
                Deployment, UI/UX, Artificial Intelligence & Machine Learning, Data Structures & Algorithms, Agile Collaboration &
                Development, Data Analysis, Data Visualization, Statistical Modeling, Authentication, Data Flow, Unit Testing,
                Software Development Life Cycle (SDLC)
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="container mx-auto mt-16">
          <h2 className="text-4xl font-bold mb-8" data-reveal>Education</h2>
          <div className="flex flex-col gap-16 px-4">
            <div className="flex flex-col gap-8 bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec items-center justify-center" data-reveal>
              <div className="flex justify-center bg-background w-fit p-6 rounded-full shadow-2xl shadow-textsec">
                <img src={cpLogo} alt="California Polytechnic State University Logo" className="h-28" />
              </div>
              <p>
                Bachelor of Science
                <br />
                Computer Science
                <br />
                California Polytechnic State University - San Luis Obispo
                <br />
                Graduating in Spring 2026
              </p>
              <div>
                <h3 className="font-bold mb-2 text-2xl">Relevant Coursework</h3>
                <p>
                  Data Structures, Algorithms, Operating Systems, Computational Theory, Web
                  Development, Databases, SQL/Data Querying, Artificial Intelligence, Machine Learning, Programming Languages
                  (Compiling, Parsing, etc.), Mobile Development
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec items-center justify-center" data-reveal>
              <div className="flex justify-center bg-background w-fit p-2 rounded-full shadow-2xl shadow-textsec">
                <img src={lpcLogo} alt="Las Positas College Logo" className="h-40" />
              </div>
              <p>
                Computer Science
                <br />
                Las Positas College
                <br />
                Graduated/Transferred in Spring 2024
              </p>
              <div>
                <h3 className="font-bold text-2xl mb-2">Relevant Coursework</h3>
                <p>
                  Computer Science & Programming Fundamentals, Object Oriented Programming/Design, Artificial Intelligence, Machine Learning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="container mx-auto mt-12">
          <h2 className="text-4xl font-bold mb-4" data-reveal>Experience</h2>
          <div className="flex flex-col gap-6 px-4">
            <div className="bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec" data-reveal>
              <div className="flex justify-center mb-8">
                <img src={amoebaLogo} alt="Amoeba Laboratory Logo" className="h-40 bg-textsec rounded-full shadow-2xl shadow-textsec" />
              </div>
              <h4 className="font-bold mb-2">Software Engineer Intern</h4>
              <p>Amoeba Laboratory - Tracy, CA</p>
              <p className="text-sm">June 2025 - August 2025</p>
              <ul className="list-disc list-inside pb-16">
                <li>Designed and shipped a full-stack, cloud-based platform end-to-end for real-time food safety operations.</li>
                <li>Implemented user authentication and authorization using Firebase Auth.</li>
                <li>Built scalable backend services using optimized data structures, improving response time and system reliability.</li>
                <li>Collaborated with cross-functional teams to define and implement new features based on user feedback.</li>
                <li>Conducted code reviews and provided constructive feedback to peers, fostering a culture of continuous improvement.</li>
                <li>Developed responsive, user-centric UIs and implemented CI/CD pipelines for production-grade deployment.</li>
              </ul>
              <a className="hover:underline text-textprime hover:text-background" href="https://amoebalaboratory.com" target="_blank" rel="noopener noreferrer">Visit Amoeba Laboratory</a>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="container mx-auto mt-12">
          <h2 className="text-4xl font-bold mb-4" data-reveal>Leadership Experience</h2>
          <div className="flex flex-col gap-6 px-4">
            <div className="bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec" data-reveal>
              <div className="flex justify-center mb-8">
                <img src={cpgdLogo} alt="Cal Poly Game Development Club Logo" className="h-40 bg-background rounded-full p-2 shadow-2xl shadow-textsec" />
              </div>
              <h4 className="font-bold mb-2">Vice President</h4>
              <p>Cal Poly Game Development Club</p>
              <p className="text-sm">March 2025 - June 2026</p>
              <ul className="list-disc list-inside pb-16">
                <li>Organized and led weekly game development workshops for club members.</li>
                <li>Coordinated team projects and facilitated communication between members.</li>
                <li>Represented the club at university events and engaged with potential new members.</li>
                <li>Collaborated with local game studios for guest speaker events and networking opportunities.</li>
                <li>Developed and maintained the club's website and online presence.</li>
                <li>Mentored peers in Git, version control, and design patterns related to game development.</li>
              </ul>
              <a className="hover:underline text-textprime hover:text-background" href="https://cpgd.org" target="_blank" rel="noopener noreferrer">Visit Cal Poly Game Development Club</a>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="container mx-auto mt-12">
          <h2 className="text-4xl font-bold mb-4" data-reveal>My Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4" data-reveal data-reveal-group>
            <div className="bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec">
              <h3 className="font-bold mb-2">Guitar</h3>
              <p>Playing guitar and composing music.</p>
            </div>
            <div className="bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec">
              <h3 className="font-bold mb-2">Fencing</h3>
              <p>Practicing fencing techniques and participating in competitions.</p>
            </div>
            <div className="bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec">
              <h3 className="font-bold mb-2">Running</h3>
              <p>Participating in marathons and enjoying outdoor runs.</p>
            </div>
            <div className="bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec">
              <h3 className="font-bold mb-2">Soccer</h3>
              <p>Participating in soccer matches and enjoying team play.</p>
            </div>
            <div className="bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec">
              <h3 className="font-bold mb-2">Video Games</h3>
              <p>Playing video games and engaging in online multiplayer experiences.</p>
            </div>
            <div className="bg-accent p-4 rounded-lg text-textsec shadow-2xl shadow-textsec">
              <h3 className="font-bold mb-2">Reading</h3>
              <p>Exploring various genres and authors, with a focus on science fiction and fantasy.</p>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="container mx-auto mt-12 items-center">
          <h2 className="text-4xl font-bold mb-4" data-reveal>Socials</h2>
          <div className="flex flex-row gap-6 px-4 items-center justify-center" data-reveal data-reveal-group>
            <a className="hover:scale-110 transition-transform" href="https://atomictwig.itch.io/" target="_blank" rel="noopener noreferrer">
              <img src={itchLogo} alt="Itch.io Logo" className="h-18 inline-block" />
            </a>
            <a className="hover:scale-110 transition-transform cursor-pointer" href="https://www.linkedin.com/in/adam-cisneros-ab5b24220/" target="_blank" rel="noopener noreferrer">
              <img src={lnLogo} alt="LinkedIn Logo" className="h-16 inline-block mr-2" />
            </a>
            <a className="hover:scale-110 transition-transform" href="https://github.com/Adam-Cisneros" target="_blank" rel="noopener noreferrer">
              <img src={ghLogo} alt="GitHub Logo" className="h-18 inline-block mr-2" />
            </a>
          </div>
        </div>

      </section>
    </div>
  )
}

export default About