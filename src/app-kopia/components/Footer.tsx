import { PolishText } from "../polish-text";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <a href="/" aria-label="Beton House">
              <img
                src="/logo-bw.svg"
                alt="Beton House"
                className="site-footer__logo"
              />
            </a>

            <p>
              <PolishText>
                Hania i Seweryn Nogalscy
                <br />
                Pracownia architektoniczna
              </PolishText>
            </p>
          </div>

          <div>
            <p>
              <PolishText>
                ul. Nagietek 38
                <br />
                40-748 Katowice
              </PolishText>
            </p>
          </div>

          <div>
            <p>
              <a href="tel:+48606856600">+48 606 856 600</a>
              <br />
              <a href="tel:+48608339199">+48 608 339 199</a>
              <br />
              <a href="mailto:biuro@betonhouse.com">
                biuro@betonhouse.com
              </a>
            </p>
          </div>

          <div>
            <p>
              <a
                href="https://www.instagram.com/beton.house/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <br />

              <a
                href="https://pl-pl.facebook.com/Beton-House-198650000247824/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <br />

              <a
                href="https://pl.pinterest.com/betonhouse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
              <br />

              <a
                href="https://www.youtube.com/user/PentagramSN"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 Beton House</span>

          <nav
            className="site-footer__legal"
            aria-label="Informacje prawne"
          >
            <a href="/polityka-prywatnosci/">Polityka prywatności</a>
            <a href="/regulamin/">Regulamin</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}