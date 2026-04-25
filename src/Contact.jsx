import { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import itchLogo from './assets/itchio_logo.png'
import lnLogo from './assets/ln_logo.png'
import ghLogo from './assets/gh_logo.png'

function useScrollReveal(containerRef) {
  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('[data-reveal]')
    if (!elements?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [containerRef])
}

function Contact() {
  const form = useRef();
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Message sent successfully!');
    }, (error) => {
      console.error('Failed to send:', error.text);
    });
  };

  return (
    <div>
      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        [data-reveal].reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section ref={sectionRef} className="py-20 bg-background text-textprime text-center items-center font-primary min-h-screen">
        <h1 className="text-4xl font-bold mb-4" data-reveal>Contact Me</h1>
        <p className="text-lg pb-8" data-reveal>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
        <p className="text-lg pb-8" data-reveal>Follow me on my socials:</p>
        <div className="flex flex-row justify-center gap-4 pb-8" data-reveal>
          <a className="hover:scale-110 transition-transform" href="https://atomictwig.itch.io/" target="_blank" rel="noopener noreferrer">
            <img src={itchLogo} alt="Itch.io Logo" className="h-20 inline-block" />
          </a>
          <a className="hover:scale-110 transition-transform" href="https://www.linkedin.com/in/adam-cisneros-ab5b24220/" target="_blank" rel="noopener noreferrer">
            <img src={lnLogo} alt="LinkedIn Logo" className="h-20 inline-block" />
          </a>
          <a className="hover:scale-110 transition-transform" href="https://github.com/Adam-Cisneros" target="_blank" rel="noopener noreferrer">
            <img src={ghLogo} alt="GitHub Logo" className="h-20 inline-block" />
          </a>
        </div>
        <p className="text-lg pb-8" data-reveal> . . . Or feel free to reach out if you have any questions or inquiries!</p>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center py-16 rounded-lg bg-accent text-textsec w-full md:w-3/4 mx-auto shadow-2xl shadow-textsec" data-reveal>
          <h1 className="text-4xl font-bold pb-8">Fill Out The Form Below to Send Me A Message!</h1>
          <input type="text" name="name" placeholder="Your Name" className="mb-4 p-2 rounded-lg w-4/5 md:w-3/4 bg-background text-textsec hover:scale-101 hover:shadow-2xl hover:shadow-textsec transition-transform" />
          <input type="email" name="email" placeholder="Your Email" className="mb-4 p-2 rounded-lg w-4/5 md:w-3/4 bg-background text-textsec hover:scale-101 hover:shadow-2xl hover:shadow-textsec transition-transform" />
          <textarea name="message" placeholder="Your Message" className="mb-4 p-2 rounded-lg w-4/5 md:w-3/4 bg-background text-textsec hover:scale-101 hover:shadow-2xl hover:shadow-textsec transition-transform" rows="4"></textarea>
          <button type="submit" className="bg-textsec text-background py-2 px-4 rounded-lg hover:scale-110 transition-transform cursor-pointer">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;