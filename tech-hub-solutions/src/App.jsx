import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Services from "./components/Services.jsx";
import Products from "./components/Products.jsx";
import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import MapEmbed from "./components/MapEmbed.jsx";
import Footer from "./components/Footer.jsx";
import Modals from "./components/Modals.jsx";

const scrollWithOffset = (hash, offset = 80) => {
  const el = document.querySelector(hash);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export default function App() {
  useEffect(() => {
    document.title =
      "Tech Hub Solutions | Office Equipment Supplier | Letsitele";
  }, []);

  const [productOpen, setProductOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const onAddToCart = useCallback(() => setProductOpen(true), []);
  const onCheckout = useCallback(() => {
    setProductOpen(false);
    alert("Checkout functionality would be implemented here");
  }, []);

  const onSubmitSuccess = useCallback(() => setSuccessOpen(true), []);
  const closeSuccess = useCallback(() => setSuccessOpen(false), []);

  const onNav = useCallback((hash) => scrollWithOffset(hash, 80), []);

  return (
    <>
      <Header />

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
              <a
                href="#products"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  onNav("#products");
                }}
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  onNav("#contact");
                }}
              >
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

              <a
                href="#contact"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  onNav("#contact");
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <Services onNav={onNav} />
      <Products onAddToCart={onAddToCart} onNav={onNav} />
      <Stats />
      <Testimonials />
      <Contact onSubmitSuccess={onSubmitSuccess} />
      <MapEmbed />
      <Footer />
      <Modals
        productOpen={productOpen}
        onCloseProduct={() => setProductOpen(false)}
        onCheckout={onCheckout}
        successOpen={successOpen}
        onCloseSuccess={closeSuccess}
      />
      <BackToTop />
    </>
  );
}
