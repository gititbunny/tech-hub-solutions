export default function Contact({ onSubmitSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    onSubmitSuccess();
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title text-center">Contact Us</h2>
        <p className="section-subtitle text-center">
          Get in touch for quotes, service requests, or any inquiries
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <h3>How Can We Help?</h3>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Our Location</h4>
                  <p>
                    123 Business Park, Letsitele, Tzaneen
                    <br />
                    Limpopo, 0885
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Call Us</h4>
                  <p>
                    <a href="tel:+27151234567">+27 15 123 4567</a>
                  </p>
                  <p>
                    <a href="tel:+27821234567">+27 82 123 4567</a> (Emergency)
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email Us</h4>
                  <p>
                    <a href="mailto:info@techhubsolutions.co.za">
                      info@techhubsolutions.co.za
                    </a>
                  </p>
                  <p>
                    <a href="mailto:support@techhubsolutions.co.za">
                      support@techhubsolutions.co.za
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-text">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Emergency Support: 24/7</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form id="serviceRequestForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Service Needed
                </label>
                <select id="service" className="form-control" required>
                  <option value="">Select a service</option>
                  <option value="sales">Product Inquiry/Sales</option>
                  <option value="repair">Equipment Repair</option>
                  <option value="maintenance">Maintenance Contract</option>
                  <option value="supplies">Supply Order</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="credit">
        <p>
          <em>
            This project was coded by
            <a
              href="https://www.linkedin.com/in/ninankhwashu/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              NN
            </a>
          </em>
        </p>
      </div>
    </section>
  );
}
