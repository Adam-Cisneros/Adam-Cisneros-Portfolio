import { useEffect, useRef } from 'react'
import ghLogo from './assets/gh_logo.png'
import amoebaLogo from './assets/amoebaLogoTransparent.jpg'
import cpgdLogo from './assets/cpgd_logo.png'

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

function WebDev() {
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

      <section ref={sectionRef} className="py-20 bg-background text-textprime text-center items-center font-primary">
        <h1 className="text-4xl font-bold mb-4" data-reveal>Web Development Projects</h1>
        <p className="text-lg pb-8" data-reveal>This page is dedicated to showcasing my Web Development projects.</p>
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="md:w-1/2 bg-accent text-textsec p-4 rounded-lg shadow-2xl shadow-textsec" data-reveal>
            <h2 className="text-2xl font-bold mb-2">Amoeba Laboratory</h2>
            <p className="text-lg py-8">
              A website built to facilitate Amoeba Laboratories LLC during my internship there. 
              The website is built using React and Tailwind CSS and is deployed on Firebase. 
              It serves as a platform to showcase the company's services, projects, and contact 
              information, providing an engaging user experience for visitors.
            </p>
            <h3 className="text-xl font-bold mb-2">View Here</h3>
            <a className="hover:scale-110 transition-transform cursor-pointer" href="https://amoebalaboratory.com" target="_blank" rel="noopener noreferrer">
              <img src={amoebaLogo} alt="Amoeba Laboratory Logo" className="h-24 inline-block mr-2 bg-textsec rounded-full hover:scale-110 transition-transform" />
            </a>
          </div>
          <div className="md:w-1/2 bg-accent text-textsec p-4 rounded-lg shadow-2xl shadow-textsec" data-reveal>
            <h2 className="text-2xl font-bold mb-2">Cal Poly Game Development</h2>
            <p className="text-lg py-8">
              A website built to facilitate the Cal Poly Game Development Club during my time as Vice President.
              The website is built using React and Tailwind CSS and is deployed on GitHub Pages.
              It serves as a platform to showcase the club's events, projects, and member information, 
              while also providing a fun UI and user experience for visitors.
            </p>
            <h3 className="text-xl font-bold mb-2">View Here</h3>
            <a className="hover:scale-110 transition-transform" href="https://github.com/gbug007/cpgd-website" target="_blank" rel="noopener noreferrer">
              <img src={ghLogo} alt="GitHub Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
            <a className="hover:scale-110 transition-transform" href="https://cpgd.org/" target="_blank" rel="noopener noreferrer">
              <img src={cpgdLogo} alt="Cal Poly Game Development Logo" className="h-24 inline-block mr-2 bg-background rounded-full hover:scale-110 transition-transform" />
            </a>
          </div>
          <div className="md:w-1/2 bg-accent text-textsec p-4 rounded-lg shadow-2xl shadow-textsec" data-reveal>
            <h2 className="text-2xl font-bold mb-2">myCloset</h2>
            <p className="text-lg py-8">
              This is a class project application me and few other developers built whilst learning
              web development fundamentals called myCloset. The project is built using React and 
              Tailwind CSS and was deployed using Azure (no longer deployed/active, must run locally).
              myCloset is an inventory style web app to help users organize their closets. 
              The main features of the app are the closet, where you can see all your clothes 
              in one place, and the outfit creator / page. Instead of going through drawers 
              in a dresser to see your t-shirt options, you can just scroll through myCloset 
              and know what you have. The outfit generator allows you to randomly generate, 
              create, and save outfits so you know what you can wear! In the future we hope to 
              add more advanced sorting features like sorting by color, image processing so that 
              all clothing images uploaded to the site have no background, and social features like 
              posting your daily outfit, and seeing what friends are wearing.
            </p>
            <h3 className="text-xl font-bold mb-2">View Here</h3>
            <a className="hover:scale-110 transition-transform" href="https://github.com/michaelalbertslo/BranchBeasts" target="_blank" rel="noopener noreferrer">
              <img src={ghLogo} alt="GitHub Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebDev;
