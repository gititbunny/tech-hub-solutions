import { useEffect, useRef, useState } from "react";

function animateNumber(el, end, duration = 2000) {
  let start = 0;
  let startTs = null;
  const step = (ts) => {
    if (!startTs) startTs = ts;
    const progress = Math.min((ts - startTs) / duration, 1);
    el.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Stats() {
  const ref = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!ref.current || done) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done) {
            animateNumber(document.getElementById("clientsCount"), 250, 2000);
            animateNumber(document.getElementById("productsCount"), 500, 2000);
            animateNumber(document.getElementById("yearsCount"), 8, 2000);
            animateNumber(document.getElementById("supportCount"), 100, 2000);
            setDone(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [done]);

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number" id="clientsCount">
              0
            </div>
            <div className="stat-text">Satisfied Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" id="productsCount">
              0
            </div>
            <div className="stat-text">Quality Products</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" id="yearsCount">
              0
            </div>
            <div className="stat-text">Years in Business</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" id="supportCount">
              0
            </div>
            <div className="stat-text">24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
