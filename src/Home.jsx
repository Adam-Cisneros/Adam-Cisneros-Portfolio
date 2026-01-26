function Home() {
  return (
    <div>
      { /* Header that fits screen with bg image */ }
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Hi, I'm Adam Cisneros</h1>
          <p className="mt-4 text-lg text-white">Let's Imagine and Create Together</p>
        </div>
      </header>
      { /* Self image with general description of myself */ }
      <section className="flex flex-col items-center justify-center py-16">
        <img src="/path/to/your/self-image.jpg" alt="Self" className="rounded-full w-32 h-32 mb-4" />
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4 text-lg text-center max-w-2xl">
          Hey! I am Adam Cisneros, a full-stack web developer, game programmer/designer, and mobile app developer based in the California Bay Area.
          
        </p>
      </section>
      { /* Latest projects and project highlights */ }
      <section className="py-16">
        <h2 className="text-2xl font-bold text-center">Latest Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { /* Project cards go here */ }
        </div>
      </section>
      {/* Education section */ }
      <section className="py-16">
        <h2 className="text-2xl font-bold text-center">Education</h2>
        <div className="mt-8 flex flex-col items-center">
          <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
          <p className="mt-2">University Name, Year</p>
        </div>
      </section>
      {/* Skills section */ }
      <section className="py-16">
        <h2 className="text-2xl font-bold text-center">Skills</h2>
        <div className="mt-8 flex flex-col items-center">
          <h3 className="text-xl font-semibold">Programming Languages</h3>
          <p className="mt-2">JavaScript, Python, Java</p>
        </div>
      </section>
      { /* Contact form */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-center">Contact Me</h2>
        <form className="mt-8 max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold">Name</label>
            <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">Email</label>
            <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold">Message</label>
            <textarea id="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md p-2"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Home
