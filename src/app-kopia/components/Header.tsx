"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { useContact } from "./ContactContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { openContact } = useContact();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDarkHeader = !isHomePage || isScrolled;

  return (
    <header
      className={`${styles.header} ${
        isDarkHeader ? styles.headerScrolled : styles.headerTop
      }`}
    >
      <div className={styles.headerInner}>
        <nav className={styles.nav} aria-label="Główna nawigacja">
          <a href="#pracownia">O nas</a>
          <a href="#beton-house">Beton House</a>
          <a href="#projekty">Projekty</a>

          <button type="button" onClick={openContact}>
            Kontakt
          </button>
        </nav>

        <a href="/" className={styles.logo} aria-label="Beton House">
          <img src="/logo-bw.svg" alt="Beton House" />
        </a>

        <button
          type="button"
          className={styles.headerContact}
          onClick={openContact}
        >
          Rozpocznij współpracę
        </button>
      </div>
    </header>
  );
}