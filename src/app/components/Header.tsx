"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { useContact } from "./ContactContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openContact } = useContact();

  const isHomePage = pathname === "/";
  const isDarkHeader = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleContact = () => {
    closeMenu();
    openContact();
  };

  return (
    <header
      className={`${styles.header} ${
        isDarkHeader ? styles.headerScrolled : styles.headerTop
      } ${menuOpen ? styles.headerMenuOpen : ""}`}
    >
      <div className={styles.headerInner}>
        <a
          href="/"
          className={styles.logo}
          aria-label="Studio Forma"
        >
          <img
            src="/logo-bw.svg"
            alt="Studio Forma"
          />
        </a>

        <nav
          className={styles.nav}
          aria-label="Główna nawigacja"
        >
          <a href="#pracownia">O nas</a>

          <a href="#dom-monolityczny">
            Dom Monolityczny
          </a>

          <a href="#projekty">
            Projekty
          </a>

          <button
            type="button"
            onClick={handleContact}
          >
            Kontakt
          </button>
        </nav>

        <button
          type="button"
          className={styles.headerContact}
          onClick={handleContact}
        >
          Rozpocznij współpracę
        </button>

        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen
              ? "Zamknij menu"
              : "Otwórz menu"
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <div
          className={styles.mobileMenu}
          aria-hidden={!menuOpen}
        >
          <nav aria-label="Menu mobilne">
            <a
              href="#pracownia"
              onClick={closeMenu}
            >
              O nas
            </a>

            <a
              href="#dom-monolityczny"
              onClick={closeMenu}
            >
              Dom Monolityczny
            </a>

            <a
              href="#projekty"
              onClick={closeMenu}
            >
              Projekty
            </a>

            <button
              type="button"
              onClick={handleContact}
            >
              Kontakt
            </button>
          </nav>

          <button
            type="button"
            className={styles.mobileCta}
            onClick={handleContact}
          >
            Rozpocznij współpracę
          </button>
        </div>
      </div>
    </header>
  );
}