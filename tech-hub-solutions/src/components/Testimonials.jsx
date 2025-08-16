import Slider from "react-slick";

const testimonials = [
  {
    text: "Tech Hub Solutions has been our go-to supplier for all office equipment needs. Their products are top quality and their service is exceptional. Highly recommended for any business in the area.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Sarah M.",
    role: "Office Manager, Letsitele Accounting",
  },
  {
    text: "When our printer broke down right before a big deadline, Tech Hub Solutions had a technician at our office within 2 hours. They saved the day and we've been loyal customers ever since.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James T.",
    role: "Director, Limpopo Legal Services",
  },
  {
    text: "Their prices are competitive and their delivery is always on time. We've outfitted our entire office with furniture and equipment from Tech Hub Solutions and couldn't be happier.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Precious K.",
    role: "CEO, Tzaneen Tech Startups",
  },
];

export default function Testimonials() {
  const settings = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
    focusOnSelect: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{ breakpoint: 768, settings: { centerMode: false } }],
  };

  return (
    <section className="section testimonials">
      <div className="container">
        <h2 className="section-title text-center">What Our Clients Say</h2>
        <p className="section-subtitle text-center">
          Trusted by businesses throughout Limpopo
        </p>

        <div className="testimonials-slider">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i}>
                <div className="testimonial-card">
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <img src={t.img} alt={t.name} className="author-img" />
                    <div className="author-info">
                      <h4>{t.name}</h4>
                      <p>{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
