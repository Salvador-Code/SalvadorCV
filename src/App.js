import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">Salvador</div>
          <div className="nav-links">
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('impact')}>Impact</a>
            <a onClick={() => scrollToSection('expertise')}>Expertise</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-gradient"></div>
        <div className="container hero-content">
          <div className="profile-image-container">
            <div className="profile-image-placeholder">
              <span className="profile-initials">S</span>
            </div>
          </div>
          <h1 className="hero-title">Salvador</h1>
          <p className="hero-subtitle">Senior Technical Product Manager</p>
          <p className="hero-tagline">
            Building the future of enterprise payments at Visa. First-gen college graduate
            turning complex fintech challenges into elegant solutions.
          </p>
          <div className="hero-cta">
            <button onClick={() => scrollToSection('contact')} className="cta-primary">Get In Touch</button>
            <button onClick={() => scrollToSection('about')} className="cta-secondary">Learn More</button>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </header>

      <main className="main-content">
        <section id="about" className="metrics-section">
          <div className="container">
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-value">$5M+</div>
                <div className="metric-label">Revenue Generated</div>
                <div className="metric-detail">Doubled revenue from $3M to $5M through 3DS product rollout</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">300%</div>
                <div className="metric-label">Capacity Increase</div>
                <div className="metric-detail">Tripled chargeback resolution through portal optimization</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">75 bps</div>
                <div className="metric-label">Fraud Reduction</div>
                <div className="metric-detail">Combined reduction through authentication & fraud systems</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">12</div>
                <div className="metric-label">Teams Led</div>
                <div className="metric-detail">Directing developer teams across B2B payment solutions</div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <h2 className="section-title">Breaking Barriers, Building Products</h2>
                <p className="about-text">
                  As a <strong>first-generation college graduate</strong> and proud Hispanic American,
                  I understand what it means to break through barriers. That resilience shapes how I
                  approach product management—turning complex enterprise payment challenges into
                  elegant solutions that move millions of dollars.
                </p>
                <p className="about-text">
                  Currently at <strong>Visa</strong>, I lead B2B acceptance products, championing AI
                  integration and directing cross-functional developer teams. My journey spans Shift4,
                  CO-OP Solutions, Paya, and Fiserv—where I've built fraud prevention systems,
                  authentication platforms, and payment gateways that serve enterprises globally.
                </p>
                <p className="about-text">
                  Beyond my day job, I'm the founder of <strong>DisruptivePM</strong>, a product
                  management coaching platform, and serve as Atlanta Chapter Director for
                  <strong> Techqueria</strong>, the largest Latinx tech network.
                </p>
              </div>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">01</span>
                  <h3>Product Leadership</h3>
                  <p>8+ years leading fintech products from ideation to commercialization</p>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">02</span>
                  <h3>Community Impact</h3>
                  <p>Building pathways for the next generation of tech leaders</p>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">03</span>
                  <h3>Thought Leadership</h3>
                  <p>Speaking on panels about fintech, product strategy, and diversity</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="impact-section">
          <div className="container">
            <h2 className="section-title">Core Capabilities</h2>
            <div className="capabilities-grid">
              <div className="capability-card">
                <div className="capability-icon">🛡️</div>
                <h3>Fraud & Security</h3>
                <p>3D Secure, OTP authentication, real-time fraud analytics. Reduced security incidents 30% and recaptured $1.5M+ annually through enhanced detection.</p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">🚀</div>
                <h3>Product Strategy</h3>
                <p>Full lifecycle management from market analysis to go-to-market. Launched payment solutions processing millions in transactions for enterprise clients.</p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">🤖</div>
                <h3>AI Integration</h3>
                <p>Championing AI initiatives at Visa to automate workflows and enhance product intelligence. Prompt engineering meets enterprise payments.</p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">👥</div>
                <h3>Team Development</h3>
                <p>Mentored juniors into senior leadership roles. Built succession pathways and fostered cross-functional collaboration across engineering, UX, and ops teams.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="expertise-section">
          <div className="container-wide">
            <h2 className="section-title">Technical Expertise</h2>
            <div className="expertise-grid">
              <div className="expertise-category">
                <h3>Product & Strategy</h3>
                <div className="expertise-list">
                  <span>Product Roadmapping</span>
                  <span>Agile & Scrum</span>
                  <span>Market Analysis</span>
                  <span>Go-to-Market Strategy</span>
                  <span>Stakeholder Management</span>
                  <span>P&L Ownership</span>
                </div>
              </div>
              <div className="expertise-category">
                <h3>Data & Analytics</h3>
                <div className="expertise-list">
                  <span>SQL</span>
                  <span>Tableau</span>
                  <span>Power BI</span>
                  <span>MongoDB</span>
                  <span>R</span>
                  <span>Palantir</span>
                </div>
              </div>
              <div className="expertise-category">
                <h3>Engineering & APIs</h3>
                <div className="expertise-list">
                  <span>REST APIs</span>
                  <span>JavaScript</span>
                  <span>Node.js</span>
                  <span>Postman</span>
                  <span>GitHub</span>
                  <span>Azure</span>
                </div>
              </div>
              <div className="expertise-category">
                <h3>Design & Tools</h3>
                <div className="expertise-list">
                  <span>Figma</span>
                  <span>Miro</span>
                  <span>UIzard</span>
                  <span>Jira</span>
                  <span>Confluence</span>
                  <span>Mermaid</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-content">
              <h2 className="section-title">Let's Connect</h2>
              <p className="contact-description">
                Available for product consulting, speaking engagements, and mentorship opportunities.
                Let's discuss how we can work together.
              </p>
              <div className="contact-options">
                <a href="https://linkedin.com" className="contact-card">
                  <div className="contact-icon">💼</div>
                  <h3>LinkedIn</h3>
                  <p>Connect professionally</p>
                </a>
                <a href="mailto:salvador@example.com" className="contact-card">
                  <div className="contact-icon">✉️</div>
                  <h3>Email</h3>
                  <p>salvador@example.com</p>
                </a>
                <div className="contact-card">
                  <div className="contact-icon">💼</div>
                  <h3>DisruptivePM</h3>
                  <p>Product coaching platform</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>Built with React • Designed for impact • Made in Atlanta</p>
          <p>&copy; 2025 Salvador. Turning complexity into clarity, one product at a time.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
