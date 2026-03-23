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

function AIML() {
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
        <h1 className="text-4xl font-bold mb-4" data-reveal>AI / ML</h1>
        <p className="text-lg pb-8" data-reveal>This page is dedicated to showcasing my AI and ML projects.</p>
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="md:w-1/2 bg-accent text-textsec p-4 rounded-lg shadow-2xl shadow-textsec" data-reveal>
            <h2 className="text-2xl font-bold mb-2">Game Success Classifier</h2>
            <p className="text-lg py-8">
              This project aims to address challenges faced by multiple groups within the video 
              game industry. The first group includes developers preparing to ship a game but 
              uncertain about its potential reception among users. This work also examines a 
              common question for developers, Do pre-release critic scores reliably indicate 
              real-world user feedback upon release? The second group includes users and consumers 
              seeking to understand whether critic scores accurately reflect their personal enjoyment 
              or whether a game meets their expectations for quality. This model is intended to support 
              both groups by providing an analytically grounded framework for predicting game performance 
              across user and critic spaces.
            </p>
            <h3 className="text-xl font-bold mb-2">View Here</h3>
            <a className="hover:scale-110 transition-transform" href="https://github.com/Adam-Cisneros/GameSuccessClassifier" target="_blank" rel="noopener noreferrer">
              <img src={ghLogo} alt="GitHub Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
          </div>
          <div className="md:w-1/2 bg-accent text-textsec p-4 rounded-lg shadow-2xl shadow-textsec" data-reveal>
            <h2 className="text-2xl font-bold mb-2">Fantasy Content Recommender</h2>
            <p className="text-lg py-8">
              This is an iterative class project that focuses on recommending fantasy content to users based on their preferences 
              and behavior. By leveraging machine learning algorithms, it aims to provide personalized 
              suggestions that enhance user engagement and satisfaction.
            </p>
            <h3 className="text-xl font-bold mb-2">View Here</h3>
            <a className="hover:scale-110 transition-transform" href="https://github.com/Adam-Cisneros/CSC-466" target="_blank" rel="noopener noreferrer">
              <img src={ghLogo} alt="GitHub Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
          </div>
          <div className="md:w-1/2 bg-accent text-textsec p-4 rounded-lg shadow-2xl shadow-textsec" data-reveal>
            <h2 className="text-2xl font-bold mb-2">ML Dueling Game</h2>
            <p className="text-lg py-8">
              This project explores the use of machine learning techniques in developing a dueling game
              environment. It aims to create intelligent agents that can learn and adapt their strategies
              through reinforcement learning. The machine learning (ML) bot is trained using a deep Q network 
              (DQN) using the StableBaselines3 library to train it in a playground over a set amount of iterations. 
              After training, you can fight the bot to test its abilities.
            </p>
            <h3 className="text-xl font-bold mb-2">View Here</h3>
            <a className="hover:scale-110 transition-transform" href="https://github.com/Adam-Cisneros/ML-Duel-Game" target="_blank" rel="noopener noreferrer">
              <img src={ghLogo} alt="GitHub Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIML