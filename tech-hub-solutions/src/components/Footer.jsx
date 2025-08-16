export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <h3>Tech Hub Solutions</h3>
            <p className="footer-text">
              Your trusted partner for office equipment and supplies in Limpopo.
              Quality products, exceptional service.
            </p>
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
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
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
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Equipment Sales</a>
              </li>
              <li>
                <a href="#">Repair Services</a>
              </li>
              <li>
                <a href="#">Maintenance Contracts</a>
              </li>
              <li>
                <a href="#">Office Supplies</a>
              </li>
              <li>
                <a href="#">IT Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Newsletter</h3>
            <p className="footer-text">
              Subscribe to our newsletter for the latest products and special
              offers.
            </p>
            <div className="footer-newsletter">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Tech Hub Solutions (Pty) Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
