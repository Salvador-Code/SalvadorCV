import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'SALVADOR';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
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
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
              </div>
              <div className="terminal-title">salvador@portfolio:~</div>
            </div>
            <div className="terminal-body">
              <div className="profile-image-container">
                <div className="profile-image-wrapper">
                  <img
                    src="/images/salvador-headshot.jpg"
                    alt="Salvador - Senior Technical Product Manager"
                    className="profile-image"
                  />
                </div>
              </div>
              <div className="code-output">
                <span className="code-comment">{'//'} Initializing Product Manager...</span>
                <h1 className="hero-title">
                  <span className="code-keyword">const</span> {typedText}
                  <span className={`typing-cursor ${showCursor ? 'visible' : ''}`}>_</span>
                </h1>
                <p className="hero-subtitle">Senior Technical Product Manager</p>
              </div>
              <div className="api-response">
                <div className="response-header">
                  <span className="status-code">200 OK</span>
                  <span className="response-time">~8 years experience</span>
                </div>
                <pre className="code-block">
{`{
  "role": "Senior Technical PM",
  "specialization": ["Payments", "Fraud", "B2B APIs"],
  "impact": {
    "revenue": "$5M+",
    "fraudReduction": "75 bps",
    "capacity": "300%"
  },
  "companies": ["Visa", "Shift4", "CO-OP", "Paya", "Fiserv"]
}`}
                </pre>
              </div>
              <div className="hero-cta">
                <button onClick={() => scrollToSection('contact')} className="cta-primary">
                  <span className="btn-icon">→</span> POST /contact
                </button>
                <button onClick={() => scrollToSection('impact')} className="cta-secondary">
                  <span className="btn-icon">⚡</span> GET /impact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>scroll --down</span>
          <div className="scroll-arrow"></div>
        </div>
      </header>

      <main className="main-content">
        <section className="experience-strip">
          <div className="container-wide">
            <div className="experience-timeline">
              <div className="exp-item">
                <h4>Visa</h4>
                <p>Sr Technical PM, B2B Acceptance</p>
              </div>
              <div className="exp-divider">→</div>
              <div className="exp-item">
                <h4>Shift4</h4>
                <p>Sr PM, Online Payments</p>
              </div>
              <div className="exp-divider">→</div>
              <div className="exp-item">
                <h4>CO-OP Solutions</h4>
                <p>Sr PM, Auth & Fraud</p>
              </div>
              <div className="exp-divider">→</div>
              <div className="exp-item">
                <h4>Paya</h4>
                <p>PM, ERP Integrations</p>
              </div>
              <div className="exp-divider">→</div>
              <div className="exp-item">
                <h4>Fiserv</h4>
                <p>Product Leadership</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="metrics-section">
          <div className="container">
            <div className="api-stats-header">
              <span className="endpoint-badge">GET /api/v1/metrics</span>
              <span className="live-indicator">● LIVE</span>
            </div>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-endpoint">/revenue</span>
                  <span className="metric-status">✓</span>
                </div>
                <div className="metric-value">$5M+</div>
                <div className="metric-label">Revenue Generated</div>
                <div className="metric-detail">Doubled revenue from $3M to $5M through 3DS product rollout</div>
              </div>
              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-endpoint">/efficiency</span>
                  <span className="metric-status">✓</span>
                </div>
                <div className="metric-value">300%</div>
                <div className="metric-label">Capacity Increase</div>
                <div className="metric-detail">Tripled chargeback resolution through portal optimization</div>
              </div>
              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-endpoint">/fraud-reduction</span>
                  <span className="metric-status">✓</span>
                </div>
                <div className="metric-value">75 bps</div>
                <div className="metric-label">Fraud Reduction</div>
                <div className="metric-detail">Combined reduction through authentication & fraud systems</div>
              </div>
              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-endpoint">/leadership</span>
                  <span className="metric-status">✓</span>
                </div>
                <div className="metric-value">2 Teams</div>
                <div className="metric-label">Leadership</div>
                <div className="metric-detail">Directed 12 developers across two cross-functional teams</div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="about-intro">
              <p className="positioning-statement">
                Results-driven fintech PM with deep expertise in analytics, fraud, and enterprise payments—focused
                on revenue growth, risk mitigation, and operational efficiency.
              </p>
            </div>
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
              <div className="api-documentation-header">
                <span className="api-version">API v2.0</span>
                <span className="endpoint-path">/api/endpoints/achievements</span>
              </div>
              <h2 className="section-title">Product Wins That Move the Needle</h2>
              <p className="impact-description">
                <span className="code-inline">Quantified outcomes</span> across fraud reduction, revenue growth, and operational excellence
              </p>
            </div>
            <div className="wins-grid">
              <div className="win-card">
                <div className="win-icon">🛡️</div>
                <div className="win-metric">25+ bps</div>
                <h3>Fraud Reduction</h3>
                <p>Cut fraud by 25+ bps for enterprise clients through commercialized fraud and authentication APIs, including real-time analytics dashboards.</p>
              </div>
              <div className="win-card">
                <div className="win-icon">📈</div>
                <div className="win-metric">$3M → $5M</div>
                <h3>3DS Revenue Growth</h3>
                <p>Doubled 3DS recurring revenue from $3M to $5M annually. Recaptured $1.5M+ via fraud analytics and automated billing optimization on Azure.</p>
              </div>
              <div className="win-card">
                <div className="win-icon">✅</div>
                <div className="win-metric">100%</div>
                <h3>Visa PRA Compliance</h3>
                <p>Delivered 60+ ERP migrations to 100% Visa PRA compliance, eliminating regulatory risk and improving payment completion by 28%.</p>
              </div>
              <div className="win-card">
                <div className="win-icon">🔐</div>
                <div className="win-metric">$250K+ ARR</div>
                <h3>OTP Authentication</h3>
                <p>Grew OTP-based 3DS adoption, reducing security incidents by 30% and driving $250K+ in annual recurring revenue through tiered pricing.</p>
              </div>
              <div className="win-card">
                <div className="win-icon">⚡</div>
                <div className="win-metric">300%</div>
                <h3>Operational Efficiency</h3>
                <p>Tripled chargeback resolution capacity through portal optimization, cutting chargeback rates by 50 bps and streamlining merchant workflows.</p>
              </div>
              <div className="win-card">
                <div className="win-icon">💰</div>
                <div className="win-metric">18%</div>
                <h3>Transaction Growth</h3>
                <p>Engineered "link to invoice" feature driving 18% growth in transaction volume and streamlining payment collection for merchants.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="capabilities-section">
          <div className="container-wide">
            <div className="impact-header">
              <h2 className="section-title">How I Drive Impact</h2>
              <p className="impact-description">
                Operator + Builder + Strategist across the full product lifecycle
              </p>
            </div>
            <div className="capabilities-showcase">
              <div className="capability-card featured">
                <div className="capability-number">01</div>
                <div className="capability-icon">📈</div>
                <h3>Revenue Growth & P&L</h3>
                <p><strong>Result:</strong> Doubled recurring revenue from $3M to $5M through strategic 3DS product rollout. Drove $250K+ ARR through OTP authentication commercialization and tiered pricing models.</p>
                <div className="domain-tags">
                  <span className="tag">B2B Payments</span>
                  <span className="tag">Pricing Strategy</span>
                </div>
              </div>
              <div className="capability-card featured">
                <div className="capability-number">02</div>
                <div className="capability-icon">🛡️</div>
                <h3>Fraud & Risk Mitigation</h3>
                <p><strong>Result:</strong> Cut fraud 25+ bps for enterprise clients. Recaptured $1.5M+ annually through fraud analytics. Built authentication systems reducing security incidents 30%.</p>
                <div className="domain-tags">
                  <span className="tag">Fraud & Risk</span>
                  <span className="tag">Authentication</span>
                </div>
              </div>
              <div className="capability-card">
                <div className="capability-number">03</div>
                <div className="capability-icon">👥</div>
                <h3>Team Leadership</h3>
                <p><strong>Result:</strong> Directed 2 cross-functional teams (12 developers) across B2B payments. Promoted 5+ junior engineers into senior roles through mentorship and succession planning.</p>
                <div className="domain-tags">
                  <span className="tag">Leadership</span>
                </div>
              </div>
              <div className="capability-card">
                <div className="capability-number">04</div>
                <div className="capability-icon">🎯</div>
                <h3>Product Strategy & GTM</h3>
                <p><strong>Result:</strong> Full lifecycle ownership from market analysis to commercialization. Launched payment solutions processing millions in transactions with competitive positioning and pricing strategy.</p>
                <div className="domain-tags">
                  <span className="tag">GTM Strategy</span>
                  <span className="tag">Portfolio Leadership</span>
                </div>
              </div>
              <div className="capability-card">
                <div className="capability-number">05</div>
                <div className="capability-icon">📊</div>
                <h3>Data & Analytics</h3>
                <p><strong>Result:</strong> Built fraud analytics frameworks cutting review times 30%. Designed BI dashboards and KPI frameworks using SQL, Power BI, Tableau, and R for executive decision-making.</p>
                <div className="domain-tags">
                  <span className="tag">AI & Analytics</span>
                </div>
              </div>
              <div className="capability-card">
                <div className="capability-number">06</div>
                <div className="capability-icon">⚙️</div>
                <h3>ERP & Compliance</h3>
                <p><strong>Result:</strong> Delivered 60+ ERP migrations to 100% Visa PRA compliance. Raised client productivity 15% and payment completion 28% through optimized integration workflows.</p>
                <div className="domain-tags">
                  <span className="tag">ERP Integrations</span>
                  <span className="tag">PRA Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="competencies-section">
          <div className="container-wide">
            <h2 className="section-title">Core Competencies</h2>
            <div className="competency-clusters">
              <div className="cluster-card">
                <h3>Product & Strategy</h3>
                <p>Roadmapping, GTM, portfolio leadership, P&L, market and competitive analysis, pricing strategy</p>
              </div>
              <div className="cluster-card">
                <h3>Risk & Payments</h3>
                <p>Fraud platforms, 3DS, authentication, ERP payments, tokenization, PRA compliance, chargeback management</p>
              </div>
              <div className="cluster-card">
                <h3>Data & Analytics</h3>
                <p>SQL, R, BI dashboards (Power BI, Tableau), fraud analytics frameworks, KPI design, predictive modeling</p>
              </div>
              <div className="cluster-card">
                <h3>Engineering & APIs</h3>
                <p>REST APIs, JavaScript, Node.js, Azure, GitHub, Postman, API integration, microservices architecture</p>
              </div>
            </div>
          </div>
        </section>

        <section className="community-section">
          <div className="container">
            <h2 className="section-title">Community & Advisory</h2>
            <div className="community-grid">
              <div className="community-card">
                <div className="community-icon">🌎</div>
                <h3>Techqueria Atlanta</h3>
                <span className="role-badge">Chapter Director</span>
                <p>Leading programming, partnerships, and career pathways for the largest Latinx tech network in Atlanta.</p>
              </div>
              <div className="community-card">
                <div className="community-icon">🎓</div>
                <h3>KSU Fintech MS Program</h3>
                <span className="role-badge">Strategic Growth Advisor</span>
                <p>Advising on curriculum, partnerships, and growth strategy—supporting 25%+ annual enrollment growth and employer placement.</p>
              </div>
              <div className="community-card">
                <div className="community-icon">💼</div>
                <h3>DisruptivePM</h3>
                <span className="role-badge">Founder & Coach</span>
                <p>Coaching aspiring and mid-career PMs into fintech and SaaS roles through personalized product strategy mentorship.</p>
              </div>
              <div className="community-card">
                <div className="community-icon">🎤</div>
                <h3>Thought Leadership</h3>
                <span className="role-badge">Speaker & Mentor</span>
                <p>Former Toastmasters chapter president. Mentoring early-career talent at Chattahoochee Tech on communication and analytics.</p>
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

        <section className="testimonials-section">
          <div className="container-wide">
            <div className="testimonials-header">
              <div className="api-documentation-header">
                <span className="api-version">Reviews v1.0</span>
                <span className="endpoint-path">/api/reviews/leadership</span>
              </div>
              <h2 className="section-title">Peer Code Reviews</h2>
              <p className="impact-description">
                <span className="code-inline">5/5 stars</span> from industry leaders and cross-functional partners
              </p>
            </div>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-buttons">
                      <span className="terminal-button close"></span>
                      <span className="terminal-button minimize"></span>
                      <span className="terminal-button maximize"></span>
                    </div>
                    <div className="terminal-title">review_from_ajay_guru.txt</div>
                  </div>
                  <div className="terminal-body-compact">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h4>Ajay Guru</h4>
                        <p className="reviewer-role">SVP & GM, Equifax Digital Solutions</p>
                        <span className="relationship-badge">Direct Manager</span>
                      </div>
                      <div className="review-rating">
                        <span className="stars">★★★★★</span>
                      </div>
                    </div>
                    <div className="review-content">
                      <p className="review-quote">"Work ethic like no one else. Extremely hardworking, punctual, steadfast, and tenacious. Skilled in portfolio product management and always thorough."</p>
                      <div className="review-tags">
                        <span className="tag-highlight">Dedication</span>
                        <span className="tag-highlight">Tenacity</span>
                        <span className="tag-highlight">Excellence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-buttons">
                      <span className="terminal-button close"></span>
                      <span className="terminal-button minimize"></span>
                      <span className="terminal-button maximize"></span>
                    </div>
                    <div className="terminal-title">review_from_christopher_ciraky.txt</div>
                  </div>
                  <div className="terminal-body-compact">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h4>Christopher Ciraky</h4>
                        <p className="reviewer-role">Director, Broadcom Payment Security</p>
                        <span className="relationship-badge">Former Manager</span>
                      </div>
                      <div className="review-rating">
                        <span className="stars">★★★★★</span>
                      </div>
                    </div>
                    <div className="review-content">
                      <p className="review-quote">"Truly a rare talent. Constantly finds ways to exceed expectations, always learning and improving both yourself and your work. A pleasure to work with."</p>
                      <div className="review-tags">
                        <span className="tag-highlight">Rare Talent</span>
                        <span className="tag-highlight">Continuous Learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-buttons">
                      <span className="terminal-button close"></span>
                      <span className="terminal-button minimize"></span>
                      <span className="terminal-button maximize"></span>
                    </div>
                    <div className="terminal-title">review_from_sergio_valencia.txt</div>
                  </div>
                  <div className="terminal-body-compact">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h4>Sergio Valencia</h4>
                        <p className="reviewer-role">VP Authentication, Velera</p>
                        <span className="relationship-badge">Cross-Functional Partner</span>
                      </div>
                      <div className="review-rating">
                        <span className="stars">★★★★★</span>
                      </div>
                    </div>
                    <div className="review-content">
                      <p className="review-quote">"Exceptionally talented leader with strong analytical prowess and business acumen. Delivers 360° insights that advance organizations. Deep expertise in fraud, data, and product."</p>
                      <div className="review-tags">
                        <span className="tag-highlight">Leadership</span>
                        <span className="tag-highlight">Analytics</span>
                        <span className="tag-highlight">360° Impact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-buttons">
                      <span className="terminal-button close"></span>
                      <span className="terminal-button minimize"></span>
                      <span className="terminal-button maximize"></span>
                    </div>
                    <div className="terminal-title">review_from_michael_anton.txt</div>
                  </div>
                  <div className="terminal-body-compact">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h4>Michael Anton</h4>
                        <p className="reviewer-role">Engineering Colleague</p>
                        <span className="relationship-badge">Former Teammate</span>
                      </div>
                      <div className="review-rating">
                        <span className="stars">★★★★★</span>
                      </div>
                    </div>
                    <div className="review-content">
                      <p className="review-quote">"Absolute pleasure to work with. Strong can-do attitude and tireless work ethic. Quickly ramps up on complex business and technical projects."</p>
                      <div className="review-tags">
                        <span className="tag-highlight">Can-Do Attitude</span>
                        <span className="tag-highlight">Fast Learner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-buttons">
                      <span className="terminal-button close"></span>
                      <span className="terminal-button minimize"></span>
                      <span className="terminal-button maximize"></span>
                    </div>
                    <div className="terminal-title">review_from_saqib_shariff.txt</div>
                  </div>
                  <div className="terminal-body-compact">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h4>Saqib Shariff</h4>
                        <p className="reviewer-role">Sr Investigator, Fraud Prevention</p>
                        <span className="relationship-badge">Cross-Team Partner</span>
                      </div>
                      <div className="review-rating">
                        <span className="stars">★★★★★</span>
                      </div>
                    </div>
                    <div className="review-content">
                      <p className="review-quote">"Trusted colleague, always helpful with technical issues and willing to sacrifice your time. Critical to client success. A pleasure and honor to work with you."</p>
                      <div className="review-tags">
                        <span className="tag-highlight">Trusted Partner</span>
                        <span className="tag-highlight">Client Success</span>
                      </div>
                    </div>
                  </div>
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
