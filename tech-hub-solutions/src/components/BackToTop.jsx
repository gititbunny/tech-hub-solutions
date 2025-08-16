import { useCallback, useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

export default function BackToTop() {
  const { y } = useScrollPosition();
  const visible = y > 300;

  const onClick = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <a
      href="#home"
      className={`back-to-top ${visible ? "active" : ""}`}
      id="backToTop"
      onClick={onClick}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up"></i>
    </a>
  );
}
