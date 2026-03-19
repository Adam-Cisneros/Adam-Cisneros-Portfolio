import acisne from './assets/acisne32.jpg'

function About() {
  return (
    <section className="py-20 bg-black text-white text-center items-center">
      <div className="container mx-auto">
        <div className="bg-[url('./assets/acisne32.jpg')] bg-cover bg-center h-64 w-64 rounded-full mx-auto mb-8" />
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg">
          I am a driven computer science student with a curiosity for solving problems and a passion for 
          technology. Whether it’s developing efficient algorithms, making video games, learning new languages, 
          or exploring the frontiers of artificial intelligence and machine learning, I thrive on turning ideas 
          into impactful products. With proven experience in many areas of the computer science field, I have 
          successfully led projects and teams that not only met goals but also exceeded expectations throughout 
          my academic career. I take pride in my ability to adapt, innovate, and deliver results in fast-paced 
          environments. I strive to be ambitious and I am eager to continue honing my skills, collaborating with 
          talented professionals, and working on impactful projects that make a difference.
        </p>
      </div>
      <div className="container mx-auto mt-12">
        <h3 className="text-2xl font-bold mb-4">My Skills</h3>
        <ul className="list-disc list-inside">
          <li>Proficient in Python, Java, and JavaScript</li>
          <li>Experience with React, Node.js, and Express</li>
          <li>Familiarity with SQL and NoSQL databases</li>
          <li>Strong understanding of data structures and algorithms</li>
          <li>Passionate about AI and machine learning</li>
        </ul>
      </div>
    </section>
  )
}

export default About