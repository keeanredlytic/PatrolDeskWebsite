import React, { useEffect, useState } from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

// Import images
import logo from './assets/PDLANDINGLOGO.png';
import showingApp from './assets/Showingapp.png';
import policeDept from './assets/Onboarding_3.png';
import crashedCars from './assets/Onboarding_4.png';
import appStoreBadge from './assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="PatrolDesk Logo" className="logo-image" onError={(e) => { e.target.style.display = 'none'; }} />
            <span>PatrolDesk</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content-simple">
          <h1>Paperwork is stealing your time. <span className="hero-accent">Let's take it back.</span></h1>
          <div className="hero-buttons-simple">
            <a href="#" className="app-store-badge-link" target="_blank" rel="noopener noreferrer">
              <img src={appStoreBadge} alt="Download on the App Store" className="app-store-badge" />
            </a>
          </div>
          <div className="hero-image-top">
            <img src={showingApp} alt="PatrolDesk App Screenshots" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section-simple">
        <div className="features-container-simple">
          <h2 className="section-title-simple">Get back on patrol</h2>

          <div className="features-grid-simple">
            <div className="feature-card-simple">
              <div className="feature-icon-simple">📸</div>
              <h3 className="feature-title-simple">Scan everything</h3>
              <p className="feature-description-simple">
                Capture licenses, VINs, and insurance cards instantly
              </p>
            </div>
            
            <div className="feature-card-simple">
              <div className="feature-icon-simple">📱</div>
              <h3 className="feature-title-simple">Digital reports</h3>
              <p className="feature-description-simple">
                Generate professional PDFs in seconds, not minutes
              </p>
            </div>
            
            <div className="feature-card-simple">
              <div className="feature-icon-simple">🔒</div>
              <h3 className="feature-title-simple">Secure & private</h3>
              <p className="feature-description-simple">
                All data stays on your device. Zero server storage
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="download" className="cta-section-simple">
        <div className="cta-container-simple">
          <h2>Ready to stop the paperwork?</h2>
          <p>
            Join officers across the country reclaiming their time
          </p>
          <div className="cta-buttons-simple">
            <a href="#" className="app-store-badge-link" target="_blank" rel="noopener noreferrer">
              <img src={appStoreBadge} alt="Download on the App Store" className="app-store-badge" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer-simple">
        <div className="footer-container-simple">
          <div className="footer-links-simple">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-copyright-simple">
            © 2025 PatrolDesk. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;

