import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero-background"></div>
        <div className="container hero-content">
          <div className="profile-image-container">
            <div className="profile-image-placeholder">
              <span className="profile-initials">S</span>
            </div>
            <div className="profile-status">
              <span className="status-dot"></span>
              Open to opportunities
            </div>
          </div>
          <div className="hero-badge">Building the Future of Payments</div>
          <h1 className="title">Hey, I'm Salvador</h1>
          <p className="hero-description">
            First-gen college grad. Product leader. Community builder.
            I turn complex payment problems into elegant solutions while opening
            doors for the next generation of tech leaders.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">$5M+</span>
              <span className="stat-label">Revenue Generated</span>
            </div>
            <div className="stat">
              <span className="stat-number">12</span>
              <span className="stat-label">Developer Teams Led</span>
            </div>
            <div className="stat">
              <span className="stat-number">75%</span>
              <span className="stat-label">Fraud Reduction</span>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="story-section">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2 className="section-title">The Backstory</h2>
                <p>
                  I'm a first-generation college graduate and proud Hispanic American who
                  broke barriers to get here. Being the first in my family to earn a degree
                  wasn't just about personal achievement—it taught me the power of resilience,
                  resourcefulness, and blazing trails for others.
                </p>
                <p>
                  That mindset shapes everything I do: from building payment products that
                  move millions of dollars, to mentoring the next generation of product leaders,
                  to leading Atlanta's largest Latinx tech community. I believe the best innovation
                  happens when we bring diverse perspectives to the table and lift others as we climb.
                </p>
                <p>
                  When I'm not shipping products at Visa or running <strong>DisruptivePM</strong>
                  (my product management platform and coaching practice), you'll find me on panels
                  sharing insights, advising university programs, or building community through Techqueria.
                </p>
              </div>
              <div className="story-highlights">
                <div className="highlight-card">
                  <div className="highlight-icon">🎓</div>
                  <h3>First-Gen Grad</h3>
                  <p>First in my family to earn a college degree (BBS + MBA)</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">🌟</div>
                  <h3>DisruptivePM</h3>
                  <p>Founder of product management coaching platform</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">🎤</div>
                  <h3>Speaker & Panelist</h3>
                  <p>Sharing insights on fintech, product, and leadership</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="container">
            <h2 className="section-title">What I Actually Do</h2>
            <p className="section-subtitle">
              I solve problems where money, technology, and people intersect
            </p>
            <div className="impact-grid">
              <div className="impact-card">
                <div className="impact-icon">🛡️</div>
                <h3>Fight Fraud</h3>
                <p>
                  Built authentication systems that cut security incidents by 30%
                  and saved millions in chargebacks. Think 3D Secure, OTP, and
                  real-time fraud analytics.
                </p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">🚀</div>
                <h3>Ship Products</h3>
                <p>
                  From SpaceX Starlink to enterprise ERPs, I've launched payment
                  solutions that process millions in transactions. Full lifecycle:
                  ideation to commercialization.
                </p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">🤖</div>
                <h3>Leverage AI</h3>
                <p>
                  Championing AI initiatives at Visa to automate workflows and
                  enhance product intelligence. Prompt engineering meets payment tech.
                </p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">👥</div>
                <h3>Build Teams</h3>
                <p>
                  Mentored juniors into senior leaders, directed cross-functional
                  teams, and fostered succession pathways. Product is a team sport.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="container">
            <h2 className="section-title">My Toolkit</h2>
            <p className="section-subtitle">
              Technology I use to build, analyze, and ship
            </p>
            <div className="skills-container">
              <div className="skill-group">
                <h3 className="skill-group-title">Product Craft</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Jira & Confluence</span>
                  <span className="skill-tag">Agile & Scrum</span>
                  <span className="skill-tag">Product Roadmapping</span>
                  <span className="skill-tag">Stakeholder Management</span>
                  <span className="skill-tag">Market Analysis</span>
                </div>
              </div>
              <div className="skill-group">
                <h3 className="skill-group-title">Data & Analytics</h3>
                <div className="skill-tags">
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Tableau & Power BI</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">R</span>
                  <span className="skill-tag">Palantir</span>
                </div>
              </div>
              <div className="skill-group">
                <h3 className="skill-group-title">Tech Stack</h3>
                <div className="skill-tags">
                  <span className="skill-tag">REST APIs</span>
                  <span className="skill-tag">JavaScript & Node.js</span>
                  <span className="skill-tag">HTML/CSS</span>
                  <span className="skill-tag">Postman</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">Mermaid</span>
                </div>
              </div>
              <div className="skill-group">
                <h3 className="skill-group-title">Design & UX</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">Miro</span>
                  <span className="skill-tag">UIzard</span>
                  <span className="skill-tag">Adobe Suite</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="journey-section">
          <div className="container">
            <h2 className="section-title">The Journey</h2>
            <p className="section-subtitle">
              From databases to boardrooms, here's how I got here
            </p>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Visa - Senior TPM</h3>
                  <span className="timeline-date">2024 - Present</span>
                  <p>
                    Leading B2B acceptance products. Directing developer teams,
                    championing AI integration, and ensuring enterprise-grade quality
                    through UAT cycles.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Shift4 - Senior PM</h3>
                  <span className="timeline-date">2023</span>
                  <p>
                    Launched fraud APIs reducing fraud by 25 bps for enterprise clients.
                    Built chargeback portal that tripled resolution capacity (300%) and
                    cut chargeback rates by 50 bps. Designed real-time analytics dashboards.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>CO-OP Solutions</h3>
                  <span className="timeline-date">2021 - 2022</span>
                  <p>
                    Commercialized OTP authentication. Partnered with sales to drive
                    $250K+ ARR. Mentored team on fraud tactics and BI tools.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Fiserv (First Data)</h3>
                  <span className="timeline-date">2016 - 2020</span>
                  <p>
                    Rolled out 3DS 1.0, doubling revenue to $5M annually. Built automated
                    billing on Azure. Recaptured $1.5M+ through fraud analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="beyond-section">
          <div className="container">
            <h2 className="section-title">Beyond the Day Job</h2>
            <div className="beyond-grid">
              <div className="beyond-card">
                <div className="beyond-header">
                  <h3>🌎 Techqueria ATL</h3>
                  <span className="beyond-role">Chapter Director</span>
                </div>
                <p>
                  Leading the largest Latinx tech network in Atlanta. Building community,
                  creating opportunities, and opening doors for the next generation.
                </p>
              </div>
              <div className="beyond-card">
                <div className="beyond-header">
                  <h3>🎓 KSU Fintech Advisor</h3>
                  <span className="beyond-role">Strategic Growth</span>
                </div>
                <p>
                  Advising Kennesaw State's FinTech MS program on curriculum, partnerships,
                  and employer placement. Helping shape the future of fintech education.
                </p>
              </div>
              <div className="beyond-card">
                <div className="beyond-header">
                  <h3>💼 DisruptivePM</h3>
                  <span className="beyond-role">Founder & Coach</span>
                </div>
                <p>
                  Product management coaching platform helping aspiring and current PMs
                  level up their skills, build better products, and advance their careers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Let's Build Something</h2>
              <p>
                Whether it's payments, fraud prevention, AI integration, product strategy,
                or speaking engagements - I'm always interested in solving hard problems
                with great people.
              </p>
              <div className="cta-grid">
                <div className="cta-card">
                  <h3>💬 Product Consulting</h3>
                  <p>Need help with product strategy, roadmapping, or go-to-market?</p>
                </div>
                <div className="cta-card">
                  <h3>🎤 Speaking & Panels</h3>
                  <p>Looking for a speaker on fintech, product management, or leadership?</p>
                </div>
                <div className="cta-card">
                  <h3>🤝 Mentorship</h3>
                  <p>Want guidance on breaking into product or advancing your PM career?</p>
                </div>
              </div>
              <div className="cta-buttons">
                <a href="https://linkedin.com" className="cta-button primary">Connect on LinkedIn</a>
                <a href="mailto:salvador@example.com" className="cta-button secondary">Drop me a line</a>
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
