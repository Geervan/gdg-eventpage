import { useEffect, useRef } from "react"
import "../styles/EventDetails.css";
import Typewriter from 'react-typewriter-effect';


function EventDetails() {
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionRefs.current.forEach((ref) => observer.observe(ref))

    return () => observer.disconnect()
  }, [])

  return (
    
    <div className="event-details">
      <section ref={(el) => (sectionRefs.current[0] = el)} className="hero">
        <h1 className="event-title">
          <span className="typewriter-wrapper">
            <Typewriter
              textStyle={{
                fontFamily: 'Courier New',
                fontWeight: '600',
                fontSize: '4rem', 
                color: '#333',   
                display: 'inline-block', 
              }}
              startDelay={100}
              cursorColor="orange"
              //text="SuperMove Tour dAppathon"
              multiText={['SuperMove Tour dAppathon']}
              typeSpeed={100}
              loop = {true}
              multiTextLoop={true}
            />
          </span>
          
        </h1>
        <p className="event-tagline">Innovate. Connect. Inspire.</p>
      </section>

      <section ref={(el) => (sectionRefs.current[1] = el)} className="event-description">
        <h2>Embark on a Tech Odyssey</h2>
        <p>
        ​A 12-hours Hackathon to Learn, Buidl, and Earn on Aptos

​Aptos x Spheron x IBW brings you day dappAthon a series of 12-hour hackathons for students, where you can learn, build and ship a project on Aptos with a prize pool of $1000+

​At dAppathon MUJ you will witness a 12-hour-long experience of coding, learning, networking, and having fun.

​While you work towards building any project you want to, you will be complemented with informative workshops, enjoyable mini-games, cool prizes, and pizzas to eat. 😎
        </p>
      </section>

      <section ref={(el) => (sectionRefs.current[2] = el)} className="event-highlights">
        <h2>Event Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <i className="fas fa-rocket"></i>
            <h3>Visionary Keynotes</h3>
            <p>Be inspired by tech luminaries and industry pioneers</p>
          </div>
          <div className="highlight-item">
            <i className="fas fa-code"></i>
            <h3>Code Labs</h3>
            <p>Hands-on sessions with cutting-edge technologies</p>
          </div>
          <div className="highlight-item">
            <i className="fas fa-network-wired"></i>
            <h3>Tech Nexus</h3>
            <p>Forge connections with peers and industry leaders</p>
          </div>
          <div className="highlight-item">
            <i className="fas fa-lightbulb"></i>
            <h3>Innovation Showcase</h3>
            <p>Witness groundbreaking projects and ideas</p>
          </div>
        </div>
      </section>

      <section ref={(el) => (sectionRefs.current[3] = el)} className="event-info">
        <div className="info-card date-time">
          <h3>Mark Your Calendar</h3>
          <p>October 15, 2023</p>
          <p>9:00 AM - 6:00 PM</p>
        </div>
        <div className="info-card location">
          <h3>Join Us At</h3>
          <p>Manipal University Jaipur</p>
          <p>Dehmi Kalan, Jaipur, Rajasthan</p>
        </div>
      </section>

      <section ref={(el) => (sectionRefs.current[4] = el)} className="cta-section">
        <h2>Be Part of the Future</h2>
        <p>Secure your spot at the most anticipated tech event of the year!</p>
        <button className="register-button">Register Now</button>
      </section>
    </div>
  )
}

export default EventDetails

