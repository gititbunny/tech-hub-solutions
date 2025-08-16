import { useEffect, useMemo, useState, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import useScrollPosition from "../hooks/useScrollPosition";

const scrollWithOffset = (selectorOrHash, offset = 80) => {
  const id = selectorOrHash.startsWith("#")
    ? selectorOrHash
    : `#${selectorOrHash}`;
  const el = document.querySelector(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

function MobileMenu({ open, onClose, theme, toggleTheme, onNav }) {
  useLockBodyScroll(open);

  const onBackdrop = (e) => {
    if (e.target.classList.contains("mobile-menu")) onClose();
  };

  return (
    <div
      className={`mobile-menu ${open ? "active" : ""}`}
      id="mobileMenu"
      aria-hidden={open ? "false" : "true"}
      onClick={onBackdrop}
    >
      <button
        className="mobile-menu-close"
        id="mobileMenuClose"
        aria-label="Close menu"
        onClick={onClose}
      >
        <i className="fas fa-times"></i>
      </button>

      <ul className="mobile-nav-links">
        {["home", "about", "services", "products", "contact"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                onNav(`#${id}`);
              }}
            >
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="theme-toggle mobile-theme-toggle"
        id="mobileThemeToggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>{" "}
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default function Header() {
  const { y } = useScrollPosition();
  const scrolled = y > 50;

  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") body.classList.add("dark-mode");
    else body.classList.remove("dark-mode");
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, [setTheme]);

  const [open, setOpen] = useState(false);

  const onNav = useCallback((hash) => {
    scrollWithOffset(hash, 80);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          <a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              onNav("#home");
            }}
          >
            <img
              src="/media/logo.png"
              alt="Tech Hub Solutions Logo"
              className="logo-img"
            />
            <span className="logo-text">Tech Hub Solutions</span>
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {["home", "about", "services", "products", "contact"].map(
                (id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNav(`#${id}`);
                      }}
                    >
                      {id[0].toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
          </button>

          <button
            className="mobile-menu-btn"
            id="mobileMenuBtn"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
        onNav={onNav}
      />
    </>
  );
}
