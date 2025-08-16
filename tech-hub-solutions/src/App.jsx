import { useEffect } from "react";
import Header from "./components/Header.jsx";
import BackToTop from "./components/BackToTop.jsx";

export default function App() {
  useEffect(() => {
    document.title =
      "Tech Hub Solutions | Office Equipment Supplier | Letsitele";
  }, []);

  return (
    <>
      <Header />
      <header className="header">
        <div className="container header-container">
          <a href="#home" className="logo">
            <img
              src="/media/logo.png"
              alt="Tech Hub Solutions Logo"
              className="logo-img"
            />
            <span className="logo-text">Tech Hub Solutions</span>
          </a>

          <nav>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle theme"
          >
            <i className="fas fa-moon"></i>
          </button>

          <button
            className="mobile-menu-btn"
            id="mobileMenuBtn"
            aria-label="Open menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      <div className="mobile-menu" id="mobileMenu" aria-hidden="true">
        <button
          className="mobile-menu-close"
          id="mobileMenuClose"
          aria-label="Close menu"
        >
          <i className="fas fa-times"></i>
        </button>
        <ul className="mobile-nav-links">
          <li>
            <a href="#home" className="mobile-nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="mobile-nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="mobile-nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="#products" className="mobile-nav-link">
              Products
            </a>
          </li>
          <li>
            <a href="#contact" className="mobile-nav-link">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="theme-toggle mobile-theme-toggle"
          id="mobileThemeToggle"
        >
          <i className="fas fa-moon"></i> Toggle Theme
        </button>
      </div>

      <section className="hero" id="home">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Trusted Office Equipment Partner in Limpopo
            </h1>
            <p className="hero-subtitle">
              Tech Hub Solutions provides top-quality office equipment,
              supplies, and maintenance services to businesses throughout
              Tzaneen and surrounding areas.
            </p>
            <div className="hero-buttons">
              <a href="#products" className="btn">
                Explore Products
              </a>
              <a href="#contact" className="btn btn-outline">
                Request Service
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/media/hero-pic.jpg"
              alt="Modern Office Equipment"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container">
          <h2 className="section-title text-center">
            About Tech Hub Solutions
          </h2>
          <p className="section-subtitle text-center">
            Serving the Limpopo business community with reliable office
            solutions since 2015
          </p>
          <div className="about-container">
            <div className="about-image">
              <img
                src="/media/about-pic.jpg"
                alt="Tech Hub Solutions Team"
                className="about-img"
              />
            </div>
            <div className="about-content">
              <h3 className="about-title">Why Choose Us?</h3>
              <p className="about-text">
                Tech Hub Solutions (Pty) Ltd has been a trusted name in office
                equipment supply and service in Tzaneen for nearly a decade. We
                pride ourselves on delivering exceptional products and unmatched
                customer service.
              </p>

              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Local Expertise</h4>
                    <p>
                      We understand the unique needs of Limpopo businesses and
                      provide tailored solutions.
                    </p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div className="feature-content">
                    <h4>24/7 Support</h4>
                    <p>
                      Our dedicated support team is always available to assist
                      with any issues or questions.
                    </p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-truck"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Fast Delivery</h4>
                    <p>
                      We offer prompt delivery services throughout the Limpopo
                      province.
                    </p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="btn">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
    </>
  );
}
