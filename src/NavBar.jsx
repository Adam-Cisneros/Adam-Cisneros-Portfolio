
function NavBar() {
  return (
    <header className='bg-black/90 text-white p-4 top-0 sticky'>
      <nav className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <h1 className='text-xl font-bold'>Adam Cisneros</h1>
        <ul className='flex space-x-5'>
          <li><a href='#' className='hover:underline'>About</a></li>
          <li><a href='#' className='hover:underline'>Projects</a></li>
          <li><a href='#' className='hover:underline'>Professional Work</a></li>
          <li><a href='#' className='hover:underline'>Experience</a></li>
          <li><a href='#' className='hover:underline'>Education</a></li>
          <li><a href='#' className='hover:underline'>Contact</a></li>
          <li><a href='#' className='hover:underline'>More</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
