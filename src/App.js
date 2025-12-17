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
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('impact')}>Impact</button>
            <button onClick={() => scrollToSection('expertise')}>Expertise</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-gradient"></div>
        <div className="container hero-content">
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <img
                src="/images/salvador-headshot.jpg"
                alt="Salvador - Senior Technical Product Manager"
                className="profile-image"
              />
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
                <div className="metric-value">2 Teams</div>
                <div className="metric-label">Leadership</div>
                <div className="metric-detail">Directed 12 developers across two cross-functional teams</div>
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
          <div className="container-wide">
            <div className="impact-header">
              <h2 className="section-title">What I Bring to the Table</h2>
              <p className="impact-description">
                Eight years of turning complex challenges into elegant solutions across the fintech ecosystem
              </p>
            </div>
            <div className="capabilities-showcase">
              <div className="capability-card featured">
                <div className="capability-number">01</div>
                <div className="capability-icon">👥</div>
                <h3>Leadership & Team Building</h3>
                <p>Directed two cross-functional teams totaling 12 developers across B2B payment solutions. Built succession pathways that promoted 5+ junior engineers into senior leadership roles. Champion of mentorship and talent development.</p>
                <div className="capability-stat">
                  <span className="stat-highlight">12</span> Developers Led
                </div>
              </div>
              <div className="capability-card featured">
                <div className="capability-number">02</div>
                <div className="capability-icon">📈</div>
                <h3>Revenue Growth & P&L</h3>
                <p>Doubled recurring revenue from $3M to $5M through strategic 3DS product rollout. Drove $250K+ ARR through OTP authentication commercialization. Expert in pricing strategy and revenue optimization.</p>
                <div className="capability-stat">
                  <span className="stat-highlight">$5M+</span> Revenue Generated
                </div>
              </div>
              <div className="capability-card">
                <div className="capability-number">03</div>
                <div className="capability-icon">🛡️</div>
                <h3>Fraud & Security</h3>
                <p>Built authentication systems cutting security incidents 30%. Designed fraud analytics that recaptured $1.5M+ annually. Deep expertise in 3D Secure, OTP, and real-time detection.</p>
              </div>
              <div className="capability-card">
                <div className="capability-number">04</div>
                <div className="capability-icon">🚀</div>
                <h3>Product Strategy & GTM</h3>
                <p>Full lifecycle ownership from market analysis to commercialization. Led launches processing millions in transactions. Expert in competitive positioning and go-to-market execution.</p>
              </div>
              <div className="capability-card">
                <div className="capability-number">05</div>
                <div className="capability-icon">🤖</div>
                <h3>AI & Innovation</h3>
                <p>Championing AI initiatives at Visa to automate workflows. Integrating prompt engineering with enterprise payments to enhance product intelligence and operational efficiency.</p>
              </div>
              <div className="capability-card">
                <div className="capability-number">06</div>
                <div className="capability-icon">🤝</div>
                <h3>Stakeholder Alignment</h3>
                <p>Orchestrated cross-functional collaboration with engineering, legal, compliance, and marketing teams. Expert at C-level reporting and executive decision-making support.</p>
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
