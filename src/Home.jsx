import { Link, NavLink } from 'react-router-dom'
import acisne from './assets/acisne32.jpg'
import dataImg from './assets/data.png'
import appImg from './assets/app.png'
import aiImg from './assets/ai.jpeg'
import webImg from './assets/webdev.jpg'
import gameImg from './assets/vg.png'

function Home() {
  return (
    <header className="h-screen bg-black">
      <div className="grid grid-cols-4 grid-rows-3 gap-1.5 h-full p-3">

        {/* About Me — tall left column */}
        <Link to="/about" className="row-span-2 relative overflow-hidden rounded-lg group cursor-pointer">
          <img src={acisne} alt="About Me" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[40ms]">About Me</span>
          </div>
        </Link>

        {/* AI/ML */}
        <Link to="/aiml" className="col-span-2 relative overflow-hidden rounded-lg group cursor-pointer">
          <img src={aiImg} alt="AI / ML" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[40ms]">AI / ML</span>
          </div>
        </Link>

        {/* Apps — tall right column */}
        <Link to="/mobileappdev" className="row-span-3 relative overflow-hidden rounded-lg group cursor-pointer">
          <img src={appImg} alt="Mobile Apps" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[40ms]">Mobile Apps</span>
          </div>
        </Link>

        {/* Data */}
        <Link to="/data" className="relative overflow-hidden rounded-lg group cursor-pointer">
          <img src={dataImg} alt="Data" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[40ms]">Data</span>
          </div>
        </Link>

        {/* Web Dev */}
        <Link to="/webdev" className="row-span-2 relative overflow-hidden rounded-lg group cursor-pointer">
          <img src={webImg} alt="Web Dev" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[40ms]">Web Dev</span>
          </div>
        </Link>

        {/* Video Games — wide bottom-left */}
        <Link to="/gamedev" className="col-span-2 relative overflow-hidden rounded-lg group cursor-pointer">
          <img src={gameImg} alt="Video Games" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[40ms]">Video Games</span>
          </div>
        </Link>

      </div>
    </header>
  )
}

export default Home