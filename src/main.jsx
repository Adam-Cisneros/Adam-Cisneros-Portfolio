import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import NavBar from './NavBar.jsx'
import About from './About.jsx'
import AIML from './AIML.jsx'
import Data from './Data.jsx'
import WebDev from './WebDev.jsx'
import Mobile from './Mobile.jsx'
import Game from './Game.jsx'
import Contact from './Contact.jsx'
import Graphics from './Graphics.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/aiml" element={<AIML />} />
      <Route path="/data" element={<Data />} />
      <Route path="/webdev" element={<WebDev />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/gamedev" element={<Game />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/graphics" element={<Graphics />} />
    </Routes>
  </HashRouter>,
)
