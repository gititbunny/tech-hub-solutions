import { useMemo, useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    category: "printers",
    badge: "Best Seller",
    img: "/media/laser-printer.jpg",
    alt: "Laser Printer",
    title: "ProLaser X900",
    price: "R5,299",
    original: "R6,499",
    rating: 4.5,
    reviews: 24,
  },
  {
    id: 2,
    category: "computers",
    img: "/media/desktop.jpg",
    alt: "Desktop Computer",
    title: "WorkPro Desktop",
    price: "R8,999",
    rating: 4,
    reviews: 18,
  },
  {
    id: 3,
    category: "furniture",
    badge: "New",
    img: "/media/office-chair.png",
    alt: "Office Chair",
    title: "ErgoComfort Chair",
    price: "R2,499",
    original: "R3,199",
    rating: 5,
    reviews: 32,
  },
  {
    id: 4,
    category: "supplies",
    img: "/media/printer-ink.png",
    alt: "Printer Ink",
    title: "InkJet Pro Cartridge",
    price: "R399",
    original: "R499",
    rating: 4.5,
    reviews: 47,
  },
  {
    id: 5,
    category: "printers",
    img: "/media/inkjet-printer.png",
    alt: "All-in-One Printer",
    title: "OfficeJet 4500",
    price: "R3,899",
    rating: 4,
    reviews: 15,
  },
  {
    id: 6,
    category: "computers",
    badge: "Sale",
    img: "/media/laptop.png",
    alt: "Laptop",
    title: "BusinessBook Pro",
    price: "R12,999",
    original: "R14,999",
    rating: 4.5,
    reviews: 29,
  },
];

function Stars({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <>
      {Array.from({ length: full }).map((_, i) => (
        <i key={`f${i}`} className="fas fa-star"></i>
      ))}
      {half && <i className="fas fa-star-half-alt"></i>}
      {Array.from({ length: empty }).map((_, i) => (
        <i key={`e${i}`} className="far fa-star"></i>
      ))}
    </>
  );
}

export default function Products({ onAddToCart, onNav }) {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section className="section products" id="products">
      <div className="container">
        <h2 className="section-title text-center">Our Products</h2>
        <p className="section-subtitle text-center">
          Quality office equipment and supplies for businesses of all sizes
        </p>

        <div className="products-filter">
          {["all", "printers", "computers", "furniture", "supplies"].map(
            (name) => (
              <button
                key={name}
                className={`filter-btn ${filter === name ? "active" : ""}`}
                data-filter={name}
                onClick={() => setFilter(name)}
              >
                {name === "all"
                  ? "All Products"
                  : name[0].toUpperCase() + name.slice(1)}
              </button>
            )
          )}
        </div>

        <div className="products-grid">
          {filtered.map((p) => (
            <div className="product-card" data-category={p.category} key={p.id}>
              <div className="product-img-container">
                {p.badge && <span className="product-badge">{p.badge}</span>}
                <img src={p.img} alt={p.alt} className="product-img" />
              </div>
              <div className="product-content">
                <span className="product-category">
                  {p.category[0].toUpperCase() + p.category.slice(1)}
                </span>
                <h3 className="product-title">{p.title}</h3>
                <div className="product-price">
                  <span className="current-price">{p.price}</span>
                  {p.original && (
                    <span className="original-price">{p.original}</span>
                  )}
                </div>
                <div className="product-rating">
                  <Stars value={p.rating} /> <span>({p.reviews})</span>
                </div>
                <button
                  className="btn product-btn"
                  data-product={p.id}
                  onClick={onAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 50 }}>
          <a
            href="#contact"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              onNav("#contact");
            }}
          >
            Contact Us for More Products
          </a>
        </div>
      </div>
    </section>
  );
}
