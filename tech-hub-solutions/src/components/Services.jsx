export default function Services({ onNav }) {
  return (
    <section className="section services" id="services">
      <div className="container">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="section-subtitle text-center">
          Comprehensive office solutions to keep your business running smoothly
        </p>

        <div className="services-grid">
          <div className="card">
            <img
              src="/media/service1.jpg"
              alt="Equipment Sales"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">Equipment Sales</h3>
              <p className="card-text">
                We offer a wide range of high-quality office equipment from
                trusted brands at competitive prices.
              </p>
              <a
                href="#products"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  onNav("#products");
                }}
              >
                View Products
              </a>
            </div>
          </div>

          <div className="card">
            <img
              src="/media/service2.jpg"
              alt="Maintenance & Repair"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">Maintenance & Repair</h3>
              <p className="card-text">
                Our certified technicians provide prompt and reliable repair
                services for all major office equipment brands.
              </p>
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

          <div className="card">
            <img
              src="/media/service3.jpg"
              alt="Supplies & Consumables"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">Supplies & Consumables</h3>
              <p className="card-text">
                We stock all the office supplies you need, from printer ink to
                stationery, with convenient delivery options.
              </p>
              <a
                href="#products"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  onNav("#products");
                }}
              >
                Shop Supplies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
