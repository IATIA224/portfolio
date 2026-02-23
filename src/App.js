import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [certSrc, setCertSrc] = useState('/images/cert.jpg');
  const resetCertSrc = () => setCertSrc('/images/cert.jpg');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close modal on Escape key when open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsCertOpen(false);
    };
    if (isCertOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isCertOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('hero')}>
            <span className="logo-accent">JS</span> / Jorvince Soriano
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('skills')}>Skills</a>
            <a onClick={() => scrollToSection('projects')}>Projects</a>
            <a onClick={() => scrollToSection('experience')}>Experience</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
            <a href="/data/Soriano_Jorvince_Resume.pdf" className="btn-resume" download="Soriano_Jorvince_Resume.pdf">
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>

          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-background">
          <div className="grid-overlay"></div>
          <div className="particles">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}></div>
            ))}
          </div>
        </div>
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Jorvince Soriano.</h1>
          <h2 className="hero-title">Full-Stack Developer & IT Operations Specialist.</h2>
          <p className="hero-description">
            I build intelligent web systems and manage secure enterprise infrastructures.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              <i className="fas fa-briefcase"></i> View My Work
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              <i className="fas fa-envelope"></i> Contact Me
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll Down</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">01.</span> About Me
          </h2>
          <div className="about-content">
            <div className="about-image">
              <div className="image-wrapper">
                <img 
                  src="/formal_pic.png" 
                  alt="Jorvince Soriano - Professional Headshot" 
                  className="profile-image"
                />
                <div className="image-border"></div>
              </div>
            </div>
            <div className="about-text">
              <p className="about-bio">
                I'm a passionate <span className="highlight">Full-Stack Developer</span> and 
                <span className="highlight"> IT Operations Specialist</span> with a strong foundation 
                in building intelligent web applications and managing enterprise infrastructures.
              </p>
              <p className="about-bio">
                Currently pursuing my <span className="highlight">BS in Computer Science</span> at 
                <span className="highlight"> Taguig City University</span>, I combine academic excellence 
                with hands-on experience in modern web technologies and IT operations.
              </p>
              <div className="achievements">
                <h3>Achievements</h3>
                <div className="badges-container">
                  <div className="badge">
                    <div className="badge-icon">
                      <i className="fas fa-award"></i>
                    </div>
                    <div className="badge-content">
                      <h4>Dean's Lister</h4>
                      <p>Academic Excellence</p>
                    </div>
                  </div>
                  <div className="badge">
                    <div className="badge-icon">
                      <i className="fas fa-medal"></i>
                    </div>
                    <div className="badge-content">
                      <h4>TCU-CEAA Merit Scholar</h4>
                      <p>Scholarship Recipient</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">02.</span> Technical Skills
          </h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Web Development</h3>
              <div className="skill-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>IT Operations & Tools</h3>
              <div className="skill-tags">
                <span className="tag">Firebase</span>
                <span className="tag">Android Studio</span>
                <span className="tag">GitHub</span>
                <span className="tag">VS Code</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">03.</span> Featured Projects
          </h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/lakbai.png" alt="LakbAI Travel Planner" className="project-image-img" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://lakbai.onrender.com/dashboard" target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="https://github.com/IATIA224" target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>LakbAI Travel Planner</h3>
                <p className="project-description">
                  An AI-powered travel planning application that generates personalized itineraries.
                </p>
                <p className="project-highlight">
                  <i className="fas fa-star"></i> Implemented Association Rule Mining for personalized travel recommendations.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Firebase</span>
                  <span className="tag">AI</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/bikeshop.png" alt="KJC Bike Shop System" className="project-image-img" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://bike-shop-p0if.onrender.com" target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="https://github.com/IATIA224" target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>KJC Bike Shop System</h3>
                <p className="project-description">
                  A comprehensive inventory management system for bike shop operations.
                </p>
                <p className="project-highlight">
                  <i className="fas fa-star"></i> Reduced manual entry via Excel-based bulk inventory import.
                </p>
                <div className="project-tags">
                  <span className="tag">React.js</span>
                  <span className="tag">Inventory Management</span>
                </div>
              </div>
            </div>

            {/* Capy - Calorie Estimator & Task Manager APK project */}
            <div className="project-card">
              <div className="project-image">
                <img src="/caps.png" alt="Capy - Calorie Estimator & Task Manager" className="project-image-img" style={{ objectFit: 'contain' }} />
                <div className="project-overlay">
                  <div className="project-links">
                    {/* Direct link to GitHub release APK */}
                    <a href="https://github.com/IATIA224/Calculator/releases/download/v1.0/app-debug.apk" className="project-link" title="Download APK" download>
                      <i className="fas fa-download"></i>
                    </a>
                    <a href="https://github.com/IATIA224/Calculator" target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Capy - Calorie Estimator & Task Manager</h3>
                <p className="project-description">
                  A mobile app that combines calorie estimation from food images with a weekly task manager. Track calories and organize your to-do list by day of the week.
                </p>
                <p className="project-highlight">
                  <i className="fas fa-star"></i> AI-powered food recognition for calorie tracking plus organized task management for daily planning.
                </p>
                <div className="project-tags">
                  <span className="tag">Android</span>
                  <span className="tag">Food Tracking</span>
                  <span className="tag">Task Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">04.</span> Research & Leadership
          </h2>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-microscope"></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Research Presenter</h3>
                  <span className="timeline-date">May 2025</span>
                </div>
                <h4>CICT Faculty Research Colloquium</h4>
                <p>
                  Presented research findings to the CICT Dean and faculty experts, demonstrating 
                  the application of cutting-edge technologies in solving real-world problems.
                </p>
                <div className="timeline-highlight">
                  <i className="fas fa-brain"></i>
                  <span>Highlighted the integration of Machine Learning for expense prediction in travel planning applications.</span>
                </div>
                <div className="timeline-actions" style={{marginTop: '20px'}}>
                  <button
                    className="btn-primary"
                    onClick={() => { resetCertSrc(); setIsCertOpen(true); }}
                    style={{marginRight: '12px'}}
                  >
                    <i className="fas fa-eye"></i> View Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {isCertOpen && (
        <div className="modal-overlay" onClick={() => setIsCertOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsCertOpen(false)} aria-label="Close certificate">×</button>
            {certSrc ? (
              <img
                src={certSrc}
                alt="Certificate"
                className="modal-img"
                onError={(e) => {
                  if (certSrc === '/images/cert.jpg') setCertSrc('/images/cert.png');
                  else if (certSrc === '/images/cert.png') setCertSrc('/cert.jpg');
                  else if (certSrc === '/cert.jpg') setCertSrc('/cert.png');
                  else setCertSrc('');
                }}
              />
            ) : (
              <div style={{padding: '40px', color: 'var(--text-secondary)'}}>Certificate not found. Place it at <code>/public/images/cert.jpg</code> or <code>/public/cert.png</code>.</div>
            )}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">05.</span> Get In Touch
          </h2>
          <div className="contact-content">
            <h3 className="contact-heading">Let's build something together.</h3>
            <p className="contact-text">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="contact-links">
              <a href="mailto:jorvincesoriano3@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-info">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">jorvincesoriano3@gmail.com</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="contact-info">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Jorvince Soriano</span>
                </div>
              </a>
              <a href="https://github.com/IATIA224" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <i className="fab fa-github"></i>
                </div>
                <div className="contact-info">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">IATIA224</span>
                </div>
              </a>
              <a href="tel:+639517796708" className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-info">
                  <span className="contact-label">Mobile</span>
                  <span className="contact-value">+63 951 779 6708</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Designed & Built by <span className="highlight">Jorvince Soriano</span></p>
          <div className="footer-social">
            <a href="https://github.com/IATIA224" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:jorvincesoriano3@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p className="copyright">© 2025 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
