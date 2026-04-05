import { useEffect, useRef } from 'react'
import ghLogo from './assets/gh_logo.png'

function useScrollReveal(containerRef) {
  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('[data-reveal]')
    if (!elements?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [containerRef])
}

function Graphics() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <div>
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
      `}</style>

      <section ref={sectionRef} className="py-20 bg-background text-textprime text-center items-center font-primary h-screen">
        <h1 className="text-4xl font-bold mb-4" data-reveal>Graphics Projects</h1>
        <p className="text-lg pb-8" data-reveal>This page is dedicated to showcasing my Graphics projects.</p>
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="md:w-1/2 bg-accent text-textsec p-4 rounded-lg shadow-2xl shadow-textsec" data-reveal>
            <h2 className="text-2xl font-bold mb-2">Graphics Final Webpage</h2>
            <p className="text-lg py-8">
              This scene depicts a golden merchant freighter hovering above a fleet of space fighters 
              made of various materials. These object are in space and surrounded by stars and a nebula 
              and have a sun situated in the system they are in that is providing the light. The program 
              allows the user to move the ship around from a "game camera" perspective. There can be 
              fighters seen orbiting the freighter threatening to take it over with its only protector 
              being a golden fighter engaging in a dogfight with the red and blue pirates. There can be 
              thrust seen in the form of particles coming out the back of the ship. This was the final 
              project made for my Computer Graphics class in C++ using OpenGL and GLSL. The GitHub and 
              live webpage (on GitHub Pages found on the GitHub repository) can be found below.
            </p>
            <h3 className="text-xl font-bold mb-2">View Here</h3>
            <a className="hover:scale-110 transition-transform" href="https://github.com/Adam-Cisneros/Graphics-Final-Webpage" target="_blank" rel="noopener noreferrer">
              <img src={ghLogo} alt="GitHub Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Graphics;