import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Beton House — Demo",
  description: "Podstrona demonstracyjna Beton House.",
};

export default function DemoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Beton House</p>

          <h1 className={styles.title}>
            Ta część strony
            <br />
            jest jeszcze w budowie.
          </h1>

          <div className={styles.bottom}>
            <p className={styles.description}>
              To wersja demonstracyjna strony. Docelowa zawartość tej
              podstrony pojawi się w kolejnej wersji serwisu.
            </p>

            <Link href="/" className={styles.back}>
              <span>Wróć na stronę główną</span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}