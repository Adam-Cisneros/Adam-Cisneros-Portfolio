
function NavBar() {
  return (
    <header className='bg-black text-red-500 p-4 top-0 sticky'>
      <h1 className='text-lg font-bold'>My Website</h1>
      <nav>
        <ul className='flex space-x-4'>
          <li><a href='#' className='hover:underline'>Home</a></li>
          <li><a href='#' className='hover:underline'>About</a></li>
          <li><a href='#' className='hover:underline'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
