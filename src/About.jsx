import cpLogo from './assets/cp_logo.png'
import lpcLogo from './assets/lpc_logo.png'
import amoebaLogo from './assets/amoebaLogoTransparent.jpg'
import cpgdLogo from './assets/cpgd_logo.png'

function About() {
  return (
    <section className="py-20 bg-black text-white text-center items-center">
      <div className="container mx-auto">
        <div className="bg-[url('./assets/acisne32.jpg')] bg-cover bg-center h-64 w-64 rounded-full mx-auto mb-8" />
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-lg">
          I am a driven computer science student with a curiosity for solving problems and a passion for 
          technology. Whether it’s developing efficient algorithms, making video games, learning new languages, 
          or exploring the frontiers of artificial intelligence and machine learning, I thrive on turning ideas 
          into impactful products. With proven experience in many areas of the computer science field, I have 
          successfully led projects and teams that have not only met goals, but also exceeded expectations throughout 
          my academic career. I take pride in my ability to adapt, innovate, and deliver results in fast-paced 
          environments. I strive to be ambitious and I am eager to continue sharpening my skills, collaborating with 
          talented professionals, and working on impactful projects that make a difference.
        </p>
      </div>
      <div className="container mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-4">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Programming Languages</h3>
            <p>Python, C, C++, C#, HTML, CSS, JavaScript, Kotlin</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Systems & Tools</h3>
            <p>
              REST APIs, DBMS, Cloud Platforms (Azure, Vercel), Database Systems (SQL & NoSQL), CI/CD,
              Git, GitHub, React, MongoDB, Firebase/Firestore, Supabase, scikit-learn, StableBaselines3
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Concepts & Experience</h3>
            <p>
              Full-Stack Development (Backend & Frontend Design), Scalable Systems, Distributed Systems, Cloud
              Deployment, UI/UX, Artificial Intelligence & Machine Learning, Data Structures & Algorithms, Agile Collaboration &
              Development, Data Analysis, Data Visualization, Statistical Modeling, Authentication, Data Flow, Unit Testing,
              Software Development Life Cycle (SDLC)
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-4">Education</h2>
        <div className="flex justify-center mb-4">
          <img src={cpLogo} alt="California Polytechnic State University Logo" className="h-32" />
        </div>
        <p className="mb-2">
          Bachelor of Science in Computer Science
          <br />
          California Polytechnic State University - San Luis Obispo
          <br />
          Graduating in Spring 2026
        </p>
        <h3 className="font-bold mb-2 text-2xl">Relevant Coursework</h3>
        <p className="mb-8">
          Data Structures, Algorithms, Operating Systems, Computational Theory, Web
          Development, Databases, SQL/Data Querying, Artificial Intelligence, Machine Learning, Programming Languages
          (Compiling, Parsing, etc.), Mobile Development
        </p>
        <div className="flex justify-center mb-4">
          <img src={lpcLogo} alt="Las Positas College Logo" className="h-40" />
        </div>
        <p>
          Associate of Science in Computer Science
          <br />
          Las Positas College
          <br />
          Graduated/Transferred in Spring 2024
        </p>
        <h3 className="font-bold mb-2 text-2xl">Relevant Coursework</h3>
        <p className="mb-8">
          Computer Science & Programming Fundamentals, Object Oriented Programming/Design, Artificial Intelligence, Machine Learning
        </p>
      </div>
      <div className="container mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <div className="flex flex-col gap-6 px-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-center mb-4">
              <img src={amoebaLogo} alt="Amoeba Laboratory Logo" className="h-40" />
            </div>
            <h4 className="font-bold mb-2">Software Engineer Intern</h4>
            <p>Amoeba Laboratory - Tracy, CA</p>
            <p className="text-sm text-gray-400">June 2025 - August 2025</p>
            <ul className="list-disc list-inside">
              <li>Designed and shipped a full-stack, cloud-based platform end-to-end for real-time food safety operations.</li>
              <li>Implemented user authentication and authorization using Firebase Auth.</li>
              <li>Built scalable backend services using optimized data structures, improving response time and system reliability.</li>
              <li>Collaborated with cross-functional teams to define and implement new features based on user feedback.</li>
              <li>Conducted code reviews and provided constructive feedback to peers, fostering a culture of continuous improvement.</li>
              <li>Developed responsive, user-centric UIs and implemented CI/CD pipelines for production-grade deployment.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-4">Leadership Experience</h2>
        <div className="flex flex-col gap-6 px-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-center mb-4">
              <img src={cpgdLogo} alt="Cal Poly Game Development Club Logo" className="h-40" />
            </div>
            <h4 className="font-bold mb-2">Vice President</h4>
            <p>Cal Poly Game Development Club</p>
            <p className="text-sm text-gray-400">March 2025 - June 2026</p>
            <ul className="list-disc list-inside">
              <li>Organized and led weekly game development workshops for club members.</li>
              <li>Coordinated team projects and facilitated communication between members.</li>
              <li>Represented the club at university events and engaged with potential new members.</li>
              <li>Collaborated with local game studios for guest speaker events and networking opportunities.</li>
              <li>Developed and maintained the club's website and online presence.</li>
              <li>Mentored peers in Git, version control, and design patterns related to game development.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-4">My Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Guitar</h3>
            <p>Playing guitar and composing music.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Fencing</h3>
            <p>Practicing fencing techniques and participating in competitions.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Running</h3>
            <p>Participating in marathons and enjoying outdoor runs.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Soccer</h3>
            <p>Participating in soccer matches and enjoying team play.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Video Games</h3>
            <p>Playing video games and engaging in online multiplayer experiences.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Reading</h3>
            <p>Exploring various genres and authors, with a focus on science fiction and fantasy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About