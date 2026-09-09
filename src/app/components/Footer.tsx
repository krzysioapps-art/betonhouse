import { PolishText } from "../polish-text";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <a
              href="/"
              aria-label="Studio Forma"
            >
              <img
                src="/logo-bw.svg"
                alt="Studio Forma"
                className="site-footer__logo"
              />
            </a>

            <p>
              <PolishText>
                Studio Forma
                <br />
                Pracownia architektoniczna
              </PolishText>
            </p>
          </div>

          <div>
            <p>
              <PolishText>
                ul. Przykładowa 12
                <br />
                40-000 Katowice
              </PolishText>
            </p>
          </div>

          <div>
            <p>
              <a href="tel:+48000000000">
                +48 000 000 000
              </a>
              <br />

              <a href="mailto:kontakt@example.com">
                kontakt@example.com
              </a>
            </p>
          </div>

          <div>
            <p>
              <a
                href="#"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <br />

              <a
                href="#"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <br />

              <a
                href="#"
                aria-label="Pinterest"
              >
                Pinterest
              </a>
              <br />

              <a
                href="#"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            © 2026 Studio Forma
          </span>

          <nav
            className="site-footer__legal"
            aria-label="Informacje prawne"
          >
            <a href="/polityka-prywatnosci/">
              Polityka prywatności
            </a>

            <a href="/regulamin/">
              Regulamin
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}