import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="container">
          <h1 className="title">Salvador</h1>
          <h2 className="subtitle">Senior Product Manager | Fintech Expert</h2>
          <p className="tagline">Driving innovation in payments and AI technologies</p>
        </div>
      </header>

      <main className="main-content">
        <section className="about">
          <div className="container">
            <h2>About Me</h2>
            <p>
              Senior Product Manager with extensive experience in fintech and payments technology.
              Currently leading AI & Emerging Technologies initiatives at Visa (Fico division).
              Passionate about building innovative products and mentoring the next generation of product managers.
            </p>
          </div>
        </section>

        <section className="experience">
          <div className="container">
            <h2>Professional Experience</h2>
            <div className="experience-item">
              <h3>Senior Product Manager - Visa</h3>
              <p>AI & Emerging Technologies at Fico Division</p>
              <ul>
                <li>Leading product development for AI-powered payment solutions</li>
                <li>Managing cross-functional teams to deliver innovative fintech products</li>
                <li>Implementing Visa PRA solutions across the organization</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Previous Roles</h3>
              <p>Product leadership positions at First Data, Fiserv, PrizePicks, and Paya</p>
            </div>
          </div>
        </section>

        <section className="ventures">
          <div className="container">
            <h2>Business Ventures & Community</h2>
            <div className="venture-item">
              <h3>DisruptivePM</h3>
              <p>Product management platform and coaching business</p>
            </div>
            <div className="venture-item">
              <h3>Community Leadership</h3>
              <p>Atlanta Chapter Director at Techqueria | Strategic Growth Consultant at KSU</p>
            </div>
          </div>
        </section>

        <section className="skills">
          <div className="container">
            <h2>Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Product Management</h3>
                <ul>
                  <li>B2B & Payments</li>
                  <li>Team Leadership</li>
                  <li>Agile Methodologies</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Fintech</h3>
                <ul>
                  <li>Payment Systems</li>
                  <li>Cross-Border Payments</li>
                  <li>Reconciliation & APIs</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Technology</h3>
                <ul>
                  <li>AI & Emerging Tech</li>
                  <li>API Integration</li>
                  <li>Data Analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Salvador. All rights reserved.</p>
          <p>Connect with me on LinkedIn</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
