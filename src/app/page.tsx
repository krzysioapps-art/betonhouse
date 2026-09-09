"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { PolishText } from "./polish-text";
import { useContact } from "./components/ContactContext";

const projects = [
  {
    title: "Dom Północny",
    subtitle: "Rezydencja",
    description:
      "Harmonia idealnego połączenia kubatury i funkcji.",
    href: "/projekty/dom-polnocny/",
    image: "/images/projects/dream-house.webp",
  },
  {
    title: "Dom Szkła",
    subtitle: "Willa",
    description:
      "Kaskadowo spływająca kubatura, choć pełna surowego betonu, daje wrażenie lekkości.",
    href: "/projekty/dom-szkla/",
    image: "/images/projects/glass-house.webp",
  },
];

function useImageZoom() {
  useEffect(() => {
    const images = Array.from(
      document.querySelectorAll<HTMLElement>(
        `.${styles.imageZoom}`
      )
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(
            styles.imageZoomReady
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    images.forEach((image) => {
      observer.observe(image);
    });

    return () => observer.disconnect();
  }, []);
}

function useReveal() {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal]"
      )
    );

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      items.forEach((item) =>
        item.classList.add(styles.revealed)
      );

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(
            styles.revealed
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);
}

function useHeroEntrance() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setReady(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  return ready;
}

export default function HomePage() {
  useReveal();
  useImageZoom();

  const heroReady = useHeroEntrance();
  const { openContact } = useContact();

  return (
    <main className={`${styles.page} debug`}>
      {/* HERO */}
      <section
        className={`${styles.hero} ${
          heroReady ? styles.heroReady : ""
        }`}
      >
        <div className={styles.heroImage}>
          <img
            src="/images/beton-house/hero-stairs.webp"
            alt="Dom z betonu — schody we wnętrzu domu"
          />
        </div>

        <div className={styles.heroShade} />

        <div className={styles.heroInner}>
          <div className={styles.heroTop}>
            <p className={styles.heroMeta}>
              <PolishText>
                Pracownia architektoniczna
                <br />
                Architektura i projektowanie
                <br />
                Katowice
              </PolishText>
            </p>
          </div>

          <div className={styles.heroBottom}>
            <h1 className={styles.heroTitle}>
              <span
                className={styles.heroTitleLine}
              >
                <PolishText>
                  Budowane z betonu.
                </PolishText>
              </span>

              <span
                className={styles.heroTitleLine}
              >
                <PolishText>
                  Projektowane z sercem.
                </PolishText>
              </span>
            </h1>

            <p
              className={`${styles.heroAuthors} ${
                heroReady
                  ? styles.heroAuthorsReady
                  : ""
              }`}
            >
              <PolishText>
                Architektura, która zaczyna się
                <br />
                od życia, nie od formy.
              </PolishText>
            </p>
          </div>
        </div>
      </section>

      {/* DOM MONOLITYCZNY */}
      <section
        id="dom-monolityczny"
        className={styles.stickyStory}
      >
        <div className={styles.stickyGrid}>
          <div
            className={`${styles.stickyVisual} ${styles.imageZoom}`}
          >
            <img
              src="/images/beton-house/exterior.webp"
              alt="Dom Monolityczny — elewacja"
            />
          </div>

          <div className={styles.stickyContent}>
            <div className={styles.stickyIntro}>
              <h2 className={styles.heading}>
                <PolishText>
                  To tutaj wszystko się zaczęło.
                </PolishText>
              </h2>

              <p className={styles.lead}>
                <PolishText>
                  Dom Monolityczny to nasz dom i
                  jednocześnie nazwa projektu.
                  Projekt zaczęliśmy prawie dekadę
                  temu.
                </PolishText>
              </p>
            </div>

            <div className={styles.storySteps}>
              <article
                className={styles.storyStep}
              >
                <h3>
                  <PolishText>
                    Od pierwszej kreski do
                    codziennego życia.
                  </PolishText>
                </h3>

                <p>
                  <PolishText>
                    Realizacja stała się dla nas
                    pierwszym doświadczeniem
                    tworzenia architektury od
                    początku do końca — bez
                    dystansu między projektem a
                    tym, jak naprawdę się w nim
                    mieszka.
                  </PolishText>
                </p>
              </article>

              <article
                className={styles.storyStep}
              >
                <h3>
                  <PolishText>
                    Dom stał się naszym
                    laboratorium.
                  </PolishText>
                </h3>

                <p>
                  <PolishText>
                    Ponad 500 m² betonu, szkła,
                    światła i przestrzeni pozwoliło
                    nam sprawdzić własne pomysły w
                    praktyce. Zobaczyliśmy, co działa,
                    co wymaga zmiany i jak przestrzeń
                    zachowuje się, kiedy zaczynamy w
                    niej żyć.
                  </PolishText>
                </p>
              </article>

              <article
                className={styles.storyStep}
              >
                <h3>
                  <PolishText>
                    Z czasem dom zaczął żyć.
                  </PolishText>
                </h3>

                <p>
                  <PolishText>
                    Projektując własny dom, nie
                    mogliśmy przewidzieć wszystkiego.
                    Dopiero codzienność pokazała nam,
                    jak przestrzeń zachowuje się rano,
                    wieczorem, latem i zimą.
                  </PolishText>
                </p>
              </article>

              <article
                className={styles.storyStep}
              >
                <h3>
                  <PolishText>
                    Architektura przestaje być
                    abstrakcją.
                  </PolishText>
                </h3>

                <p>
                  <PolishText>
                    To doświadczenie jest dla nas
                    równie ważne jak sam projekt.
                    Przestrzeń zaczyna naprawdę
                    uczestniczyć w życiu dopiero,
                    kiedy można ją codziennie
                    sprawdzać.
                  </PolishText>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE INTERRUPTION */}
      <section
        className={`${styles.fullBleed} ${styles.imageZoom}`}
      >
        <img
          src="/images/beton-house/life.webp"
          alt="Codzienne życie w domu"
        />
      </section>

      {/* BUILD */}
      <section
        className={`${styles.build} ${styles.rail} ${styles.reveal}`}
        data-reveal
      >
        <div className={styles.buildHead}>
          <div>
            <h2 className={styles.heading}>
              <PolishText>
                Najpierw był projekt.
              </PolishText>
            </h2>
          </div>

          <div className={styles.buildHeadCopy}>
            <p className={styles.lead}>
              <PolishText>
                Później przyszła rzeczywistość.
              </PolishText>
            </p>
          </div>
        </div>

        <div className={styles.buildGallery}>
          <div
            className={`${styles.buildImage} ${styles.buildImageLarge} ${styles.imageZoom}`}
          >
            <img
              src="/images/beton-house/build-01.webp"
              alt="Dom podczas budowy"
            />
          </div>

          <div
            className={`${styles.buildImage} ${styles.buildImageSmall} ${styles.imageZoom}`}
          >
            <img
              src="/images/beton-house/build-02.webp"
              alt="Etap budowy domu"
            />
          </div>

          <div
            className={`${styles.buildImage} ${styles.buildImageSmall} ${styles.imageZoom}`}
          >
            <img
              src="/images/beton-house/build-03.webp"
              alt="Realizacja domu"
            />
          </div>
        </div>

        <div className={styles.buildText}>
          <h3>
            <PolishText>
              Poznaliśmy projekt z obu stron.
            </PolishText>
          </h3>

          <div>
            <p className={styles.body}>
              <PolishText>
                Przy realizacji naszego domu
                połączyliśmy dwie perspektywy —
                architekta i inwestora.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Z jednej strony odpowiadaliśmy za
                projekt, funkcję i rozwiązania
                techniczne. Z drugiej — za budżet,
                wykonanie i decyzje, które pojawiają
                się pomiędzy rysunkiem a gotowym
                domem.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Dzięki temu zobaczyliśmy cały proces
                z dwóch perspektyw. Nauczyliśmy się,
                gdzie potrzebny jest kompromis, a
                gdzie warto szukać rozwiązania, które
                pozwoli zachować najważniejszą ideę.
              </PolishText>
            </p>
          </div>
        </div>
      </section>

      {/* SECOND STICKY */}
      <section
        className={styles.experienceSticky}
      >
        <div className={styles.experienceGrid}>
          <div className={styles.experienceContent}>
            <h2 className={styles.heading}>
              <PolishText>
                Materiał nie jest dekoracją.
              </PolishText>
            </h2>

            <div className={styles.experienceCopy}>
              <p className={styles.lead}>
                <PolishText>
                  Beton, szkło i światło nie są dla
                  nas warstwą nakładaną na projekt.
                  Są jego konstrukcją.
                </PolishText>
              </p>

              <p className={styles.body}>
                <PolishText>
                  Własny dom nauczył nas patrzeć na
                  materiały nie tylko przez pryzmat
                  obrazu, ale także dotyku,
                  temperatury, akustyki, światła i
                  codziennego użytkowania.
                </PolishText>
              </p>

              <p className={styles.body}>
                <PolishText>
                  To właśnie dlatego doświadczenie
                  realizacji zabieramy ze sobą do
                  każdego kolejnego projektu.
                </PolishText>
              </p>
            </div>
          </div>

          <div
            className={`${styles.experienceVisual} ${styles.imageZoom}`}
          >
            <img
              src="/images/beton-house/detail.webp"
              alt="Detal wnętrza domu"
            />
          </div>
        </div>
      </section>

      {/* WATER */}
      <section
        className={`${styles.lightSplit} ${styles.split}`}
      >
        <div
          className={`${styles.splitImage} ${styles.imageZoom}`}
        >
          <img
            src="/images/beton-house/water.webp"
            alt="Reflektor wodny przed domem"
          />
        </div>

        <div className={styles.splitText}>
          <h2 className={styles.heading}>
            <PolishText>
              Chcieliśmy, żeby światło było częścią
              domu.
            </PolishText>
          </h2>

          <p className={styles.lead}>
            <PolishText>
              Przed południową, szklaną elewacją
              zaprojektowaliśmy płytki zbiornik wody
              — reflektor.
            </PolishText>
          </p>

          <p className={styles.body}>
            <PolishText>
              Odbijające się od jego powierzchni
              światło trafia do wnętrza i zmienia je
              wraz z porą dnia.
            </PolishText>
          </p>

          <p className={styles.body}>
            <PolishText>
              Wiatr tworzy fale, a na suficie i
              ścianach pojawiają się ruchome refleksy.
              Zimą reflektor zamarza i zamienia się w
              lodowisko dla naszych dzieci.
            </PolishText>
          </p>
        </div>
      </section>

      {/* VIDEO STORY */}
      <section className={styles.videoStory}>
        <div className={styles.videoStoryMedia}>
          <video
            className={styles.videoStoryIframe}
            src="/videos/beton-house.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Materiał wideo przedstawiający Dom Monolityczny"
          />
        </div>

        <div className={styles.videoStoryText}>
          <h2 className={styles.heading}>
            <PolishText>
              Pokazaliśmy nasz dom.
            </PolishText>
          </h2>

          <p className={styles.lead}>
            <PolishText>
              Chcieliśmy pokazać nie tylko
              architekturę, ale również sposób, w
              jaki żyjemy w domu, który sami
              zaprojektowaliśmy.
            </PolishText>
          </p>

          <p className={styles.body}>
            <PolishText>
              Opowiedzieliśmy o procesie projektowania,
              materiałach i codzienności, która
              ostatecznie nadaje przestrzeni sens.
            </PolishText>
          </p>

          <a
            href="/material"
            className={styles.button}
          >
            <PolishText>
              Zobacz materiał
            </PolishText>
          </a>
        </div>
      </section>

      {/* STATEMENT */}
      <section
        className={`${styles.statement} ${styles.rail} ${styles.reveal}`}
        data-reveal
      >
        <div className={styles.statementInner}>
          <div className={styles.statementHeading}>
            <h2 className={styles.heading}>
              <PolishText>
                Własny dom zmienił nasze
                projektowanie.
              </PolishText>
            </h2>
          </div>

          <div className={styles.statementCopy}>
            <p className={styles.lead}>
              <PolishText>
                To doświadczenie zabieramy ze sobą
                do każdego kolejnego projektu.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Dziś wiemy, że dobra architektura musi
                spotkać się z rzeczywistością: z
                budżetem, wykonaniem, materiałem i
                przede wszystkim z życiem ludzi,
                którzy będą z niej korzystać.
              </PolishText>
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        id="pracownia"
        className={`${styles.intro} ${styles.rail} ${styles.reveal}`}
        data-reveal
      >
        <div className={styles.introGrid}>
          <div className={styles.introHeading}>
            <h2 className={styles.heading}>
              <PolishText>
                Zaczynamy od człowieka.
              </PolishText>
            </h2>
          </div>

          <div className={styles.introCopy}>
            <p className={styles.lead}>
              <PolishText>
                Projektujemy przestrzenie, które
                odpowiadają na potrzeby konkretnych
                ludzi i konkretnych miejsc.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Podążamy za wyobraźnią. Szukamy
                rozwiązań, które pozwalają nam wyjść
                poza opatrzone formy — od wnętrz,
                przez domy, po większe realizacje.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Łączymy artystyczną kreatywność z
                inżynierskim profesjonalizmem. Dobra
                architektura musi być dla nas czymś
                więcej niż obrazem. Musi działać.
              </PolishText>
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyInner}>
          <div>
            <h2 className={styles.heading}>
              <PolishText>
                Słuchamy. Szukamy. Projektujemy.
              </PolishText>
            </h2>
          </div>

          <div className={styles.philosophyCopy}>
            <p className={styles.lead}>
              <PolishText>
                Każdy projekt zaczynamy od rozmowy.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Chcemy wiedzieć, jak żyjecie, czego
                potrzebujecie i co jest dla Was ważne.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Nie projektujemy gotowych domów.
                Szukamy rozwiązań dla konkretnych
                ludzi, miejsc i sposobów życia.
              </PolishText>
            </p>

            <button
              type="button"
              className={styles.button}
              onClick={openContact}
            >
              <PolishText>
                Porozmawiajmy
              </PolishText>
            </button>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projekty"
        className={`${styles.projects} ${styles.projectsInner} ${styles.reveal}`}
        data-reveal
      >
        <div className={styles.projectsHeader}>
          <h2 className={styles.heading}>
            <PolishText>
              Kolejne historie.
            </PolishText>
          </h2>

          <p className={styles.projectsIntro}>
            <PolishText>
              Wybrane realizacje i projekty naszej
              pracowni.
            </PolishText>
          </p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <a
              href={project.href}
              className={styles.projectCard}
              key={project.title}
            >
              <div className={styles.projectImage}>
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className={styles.projectInfo}>
                <h3>
                  <PolishText>
                    {project.title}
                  </PolishText>
                </h3>

                <p>
                  <PolishText>
                    {project.subtitle}
                  </PolishText>
                </p>
              </div>

              <p
                className={
                  styles.projectDescription
                }
              >
                <PolishText>
                  {project.description}
                </PolishText>
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        className={styles.contact}
        id="kontakt"
      >
        <div className={styles.contactInner}>
          <h2 className={styles.heading}>
            <PolishText>
              Porozmawiajmy o Waszym miejscu.
            </PolishText>
          </h2>

          <p>
            <PolishText>
              Jeśli jesteście na początku drogi albo
              macie już konkretną wizję, chętnie jej
              posłuchamy.
            </PolishText>
          </p>

          <button
            type="button"
            className={styles.button}
            onClick={openContact}
          >
            <PolishText>
              Porozmawiajmy
            </PolishText>
          </button>
        </div>
      </section>
    </main>
  );
}