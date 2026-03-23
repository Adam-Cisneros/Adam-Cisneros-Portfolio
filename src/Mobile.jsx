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

function Mobile() {
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
        <h1 className="text-4xl font-bold mb-4" data-reveal>Mobile Development Projects</h1>
        <p className="text-lg pb-8" data-reveal>This page is dedicated to showcasing my Mobile App Development projects.</p>
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="md:w-1/2 bg-accent text-textsec p-4 rounded-lg shadow-2xl shadow-textsec" data-reveal>
            <h2 className="text-2xl font-bold mb-2">GamePlan</h2>
            <p className="text-lg py-8">
              This is a mobile app made in Android Studio with Kotlin. This is a companion app 
              to help developers with large-scale projects and teams keep track of their projects. 
              To become a user, you can sign-in using Firebase Authentication using Email + Password, 
              Google, or GitHub to sign-in. Once signed-in, the app will be able to associate your 
              groups, projects, and tasks with only you and will persist through the app's Firestore 
              Database. You can create multiple groups to do projects with, make projects to connect 
              or re-connect to any group, and create as many tasks in each project until they are 
              complete. You can set milestone releases and assign certain tasks under those milestones 
              so you can even keep track of where your project is in terms of releases. There are progress 
              bars on each milestone to track their progress in the project cards and progress bars on 
              each project to track their progress in the group cards. You may also import your existing 
              GitHub repositories to make projects out of them and keep track of their progress in the app and 
              also import your issues as tasks and organizations as groups as well using the GitHub REST API.
            </p>
            <h3 className="text-xl font-bold mb-2">View Here</h3>
            <a className="hover:scale-110 transition-transform" href="https://github.com/Adam-Cisneros/GamePlan" target="_blank" rel="noopener noreferrer">
              <img src={ghLogo} alt="GitHub Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mobile;
