import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function NavBar() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY-1 || currentScrollY < 10) {
        setVisible(true)   // scrolling up → show
      } else {
        setVisible(false)  // scrolling down → hide
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header className={`bg-textsec text-background font-primary p-4 top-0 sticky z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <nav className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <h1 className='text-xl font-bold'>
          <Link to="/">Adam Cisneros</Link>
        </h1>
        <ul className='flex space-x-5'>
          <li><Link to="/about" className='hover:underline'>About</Link></li>
          <li><Link to="/aiml" className='hover:underline'>AI / ML</Link></li>
          <li><Link to="/data" className='hover:underline'>Data</Link></li>
          <li><Link to="/webdev" className='hover:underline'>Web Dev</Link></li>
          <li><Link to="/mobile" className='hover:underline'>Mobile App Dev</Link></li>
          <li><Link to="/gamedev" className='hover:underline'>Game Dev</Link></li>
          <li><Link to="/contact" className='hover:underline'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar