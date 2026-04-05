import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function NavBar() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY - 1 || currentScrollY < 10) {
        setVisible(true)
      } else {
        setVisible(false)
        setMenuOpen(false) // close menu when navbar hides
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/aiml", label: "AI / ML" },
    { to: "/data", label: "Data" },
    { to: "/webdev", label: "Web Dev" },
    { to: "/mobile", label: "Mobile App Dev" },
    { to: "/gamedev", label: "Game Dev" },
    { to: "/graphics", label: "Graphics" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <header className={`bg-textsec text-background font-primary p-4 top-0 sticky z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <nav className='flex items-center justify-between'>
        <h1 className='text-xl font-bold'>
          <Link to="/">Adam Cisneros</Link>
          <a
            href="./AdamCisneros.pdf"
            download="Adam_Cisneros_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='ml-8 text-sm font-normal bg-textprime text-textsec p-3 rounded-full hover:bg-background hover:text-textprime transition-transform duration-200'
          >
            ↓ Resume
          </a>
        </h1>

        {/* Desktop nav links */}
        <ul className='hidden lg:flex space-x-5'>
          {navLinks.map(({ to, label }) => (
            <li key={to}><Link to={to} className='hover:underline'>{label}</Link></li>
          ))}
        </ul>

        {/* Hamburger button on small screens */}
        <button
          className='lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5'
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-background transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-background transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-background transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <ul className='lg:hidden mt-3 flex flex-col space-y-3 pb-2'>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className='hover:underline block'
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default NavBar