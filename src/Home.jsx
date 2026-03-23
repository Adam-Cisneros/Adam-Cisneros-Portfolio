import { Link } from 'react-router-dom'
import { useRef } from 'react'
import acisne from './assets/acisne32.jpg'
import dataImg from './assets/data.png'
import appImg from './assets/app.png'
import aiImg from './assets/ai.png'
import webImg from './assets/webdev.png'
import gameImg from './assets/vg.png'

function Home() {
  const gridRef = useRef(null)

  const handleMouseMove = (e) => {
    const grid = gridRef.current
    if (!grid) return
    const tiles = grid.querySelectorAll('.tile-wave')
    tiles.forEach((tile) => {
      const rect = tile.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      tile.style.setProperty('--mouse-x', `${x}px`)
      tile.style.setProperty('--mouse-y', `${y}px`)
    })
    grid.style.setProperty('--cursor-x', `${e.clientX}px`)
    grid.style.setProperty('--cursor-y', `${e.clientY}px`)
  }

  const tiles = [
    { to: "/about",   img: acisne,  label: "About Me",   cls: "md:row-span-2", dur: 3.8, delay: 0    },
    { to: "/aiml",    img: aiImg,   label: "AI / ML",    cls: "md:col-span-2", dur: 4.2, delay: 0.5  },
    { to: "/mobile",  img: appImg,  label: "Mobile Dev", cls: "md:row-span-3", dur: 3.5, delay: 1.1  },
    { to: "/data",    img: dataImg, label: "Data",       cls: "",              dur: 4.6, delay: 0.3  },
    { to: "/webdev",  img: webImg,  label: "Web Dev",    cls: "md:row-span-2", dur: 3.2, delay: 0.8  },
    { to: "/gamedev", img: gameImg, label: "Game Dev",   cls: "md:col-span-2", dur: 4.0, delay: 0.15 },
  ]

  return (
    <header className="min-h-screen bg-textsec font-bubbly">
      <div
        ref={gridRef}
        onMouseMove={handleMouseMove}
        className="
          flex flex-col gap-1.5 p-4
          md:grid md:grid-cols-4 md:grid-rows-3 md:h-screen md:p-8
        "
      >
        {tiles.map(({ to, img, label, cls, dur, delay }) => (
          <Link
            key={to}
            to={to}
            className={`tile-wave ${cls} relative rounded-lg cursor-pointer h-40 md:h-auto`}
            style={{
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-500" />
              <div className="overlay absolute inset-0 flex items-center justify-center">
                <span className="text-background text-2xl font-bubbly">{label}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Home