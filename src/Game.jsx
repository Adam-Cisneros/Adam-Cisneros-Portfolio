import { useEffect, useRef } from 'react'
import ghLogo from './assets/gh_logo.png'
import itchLogo from './assets/itchio_logo.png'
import ggjLogo from './assets/ggj_logo.png'

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

function Game() {
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
        <h1 className="text-4xl font-bold mb-4" data-reveal>Game Development Projects</h1>
        <p className="text-lg pb-8" data-reveal>This page is dedicated to showcasing my Game Development projects.</p>
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="md:w-1/2 bg-accent text-textsec p-4 rounded-lg shadow-2xl shadow-textsec" data-reveal>
            <h2 className="text-2xl font-bold mb-2">Foiled! (Alpha)</h2>
            <p className="text-lg py-8">
              Welcome to Foiled, a PvP game where fencers can test their skills against 
              trained AI opponents! Whether you are a novice fencer or a skilled Olympian, 
              this game will challenge you and improve your fencing skills. Foiled centers 
              around a tournament style game play where fencers can play against a wide variety 
              of opponents. In between matches you can improve your skills by taking lessons with 
              our well-renowned fencing coach, Ward. Are you ready to play? En Garde!
              This is a video game made in Godot Engine that is currently in development 
              for my senior project to graduate from Cal Poly. You can follow the development 
              below on itch.io, where I will be posting updates and demos as I make progress on 
              the game leading up to the full release coming soon.
            </p>
            <h3 className="text-xl font-bold mb-2">View Here</h3>
            <a className="hover:scale-110 transition-transform" href="https://atomictwig.itch.io/foiled" target="_blank" rel="noopener noreferrer">
              <img src={itchLogo} alt="Itch.io Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
          </div>
          <div className="md:w-1/2 bg-accent text-textsec p-4 rounded-lg shadow-2xl shadow-textsec" data-reveal>
            <h2 className="text-2xl font-bold mb-2">Build By Bubble (GGJ 2025)</h2>
            <p className="text-lg py-8">
              Help Bubble Blowin Barry escape the Bubble Cave using his handy bubble-bridging device!
              Build by Bubble is a game made in 48 hours for the 2025 Global Game Jam. The theme for 
              that year was "Bubble" and me and a friend decided to make a game about a 
              bubble blower that uses bubbles to build a series of platforms to get to the 
              end of each level. The game is a 2D platformer where you play as a bubble blower 
              who can blow bubbles to create platforms to jump on. The game is made in Unity 
              Engine.
            </p>
            <h3 className="text-xl font-bold mb-2">View Here</h3>
            <a className="hover:scale-110 transition-transform" href="https://github.com/Adam-Cisneros/BuildByBubble" target="_blank" rel="noopener noreferrer">
              <img src={ghLogo} alt="GitHub Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
            <a className="hover:scale-110 transition-transform" href="https://brodando.itch.io/build-by-bubble" target="_blank" rel="noopener noreferrer">
              <img src={itchLogo} alt="Itch.io Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
            <a className="hover:scale-110 transition-transform" href="https://globalgamejam.org/games/2025/build-bubble-0" target="_blank" rel="noopener noreferrer">
              <img src={ggjLogo} alt="GGJ Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
          </div>
          <div className="md:w-1/2 bg-accent text-textsec p-4 rounded-lg shadow-2xl shadow-textsec" data-reveal>
            <h2 className="text-2xl font-bold mb-2">There Can Only Be One (Alpha - Early Development)</h2>
            <p className="text-lg py-8">
              There Can Only Be One is a game made in Unity Engine that is currently in very
              early development. This is a time-travel game in which the player must navigate
              through a bank heist gone wrong, using their time-manipulation abilities to
              outsmart guards and solve puzzles. Beware, as you time travel more of your past
              selves exist and will be trying to stop you from changing the past and altering
              the future. This is a stealth-action game that requires players to think critically
              about their actions and the consequences of their time manipulation.
            </p>
            <h3 className="text-xl font-bold mb-2">View Here</h3>
            <a className="hover:scale-110 transition-transform" href="https://github.com/tcob1/there-can-only-be-one" target="_blank" rel="noopener noreferrer">
              <img src={ghLogo} alt="GitHub Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
          </div>
          <div className="md:w-1/2 bg-accent text-textsec p-4 rounded-lg shadow-2xl shadow-textsec" data-reveal>
            <h2 className="text-2xl font-bold mb-2">Aelar: The Celestial Curse (GGJ 2026)</h2>
            <p className="text-lg py-8">
              The Celestial Tree, the source of ALL magic in the realm of Lurial, has been 
              corrupted. As the tree withers and the protection of light magic dies away, 
              corruption and cursed, dark magic has begun to spread throughout the land. It 
              has been centuries since magic has been a commonplace in Lurial. After the 
              corruption began to spread, magic became more chaotic and dangerous, leading 
              people to push it out of their lives in fear for their safety. Now, in an age 
              where magic is no more, Lurial needs it more than ever. Play as Aelar, last 
              remaining sorcerer of the Celestial Tree, as you purge the corruption that 
              spreads throughout Lurial, and purify the cursed masks that have found their 
              way into the hands of Lurial's tribe leaders. You are Lurial's last hope. It 
              is up to you to restore peace to Lurial, to heal the Celestial Tree, and to 
              save magic itself. This is a game made in Godot Engine in 48 hours for the 
              2026 Global Game Jam where the theme was "Mask".
            </p>
            <h3 className="text-xl font-bold mb-2">View Here</h3>
            <a className="hover:scale-110 transition-transform" href="https://github.com/EmuMan/project-wizard" target="_blank" rel="noopener noreferrer">
              <img src={ghLogo} alt="GitHub Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
            <a className="hover:scale-110 transition-transform" href="https://emumangames.itch.io/aelar-the-celestial-curse" target="_blank" rel="noopener noreferrer">
              <img src={itchLogo} alt="Itch.io Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
            <a className="hover:scale-110 transition-transform" href="https://globalgamejam.org/games/2026/aelar-celestial-curse-2" target="_blank" rel="noopener noreferrer">
              <img src={ggjLogo} alt="GGJ Logo" className="h-20 inline-block mr-2 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Game;
