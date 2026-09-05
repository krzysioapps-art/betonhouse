"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { PolishText } from "./polish-text";
import { useContact } from "./components/ContactContext";

const projects = [
  {
    title: "Dream House",
    subtitle: "Rezydencja",
    description:
      "Harmonia idealnego połączenia kubatury i funkcji.",
    href: "/projekty/dream-house/",
    image: "/images/projects/dream-house.webp",
  },
  {
    title: "Glass House",
    subtitle: "Willa",
    description:
      "Kaskadowo spływająca kubatura, choć pełna surowego betonu, daje wrażanie lekkości.",
    href: "/projekty/glass-house/",
    image: "/images/projects/glass-house.webp",
  },
];

function useReveal() {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add(styles.revealed));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(styles.revealed);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
}

function useHeroEntrance() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));

    return () => cancelAnimationFrame(id);
  }, []);

  return ready;
}

export default function HomePage() {
  useReveal();

  const heroReady = useHeroEntrance();

  const { openContact } = useContact();

  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img
            src="/images/beton-house/hero-stairs.webp"
            alt="Beton House — schody we wnętrzu naszego domu"
          />
        </div>

        <div className={styles.heroShade} />

        <div className={styles.heroContent}>
          <h1
            className={`${styles.heroTitle} ${
              heroReady ? styles.heroTitleReady : ""
            }`}
          >
            <span className={styles.heroLine}>
              <PolishText>Budowane z betonu.</PolishText>
            </span>

            <span className={styles.heroLine}>
              <PolishText>Projektowane z sercem.</PolishText>
            </span>
          </h1>

          <p
            className={`${styles.heroAuthors} ${
              heroReady ? styles.heroAuthorsReady : ""
            }`}
          >
            <PolishText>
              Hania i Seweryn Nogalscy
              <br />
              Katowice
            </PolishText>
          </p>
        </div>
      </section>

      {/* =====================================================
          INTRO
          ===================================================== */}

      <section
        id="pracownia"
        className={`${styles.intro} ${styles.rail} ${styles.reveal}`}
        data-reveal
      >
        <div className={styles.introHeading}>
          <h2 className={styles.heading}>
            <PolishText>Zaczynamy od człowieka.</PolishText>
          </h2>
        </div>

        <div className={styles.introCopy}>
          <p className={styles.lead}>
            <PolishText>
              Projektujemy przestrzenie, które odpowiadają na potrzeby
              konkretnych ludzi i konkretnych miejsc.
            </PolishText>
          </p>

          <p className={styles.body}>
            <PolishText>
              Podążamy za wyobraźnią. Szukamy rozwiązań, które pozwalają nam
              wyjść poza opatrzone formy — od wnętrz, przez domy, po większe
              realizacje.
            </PolishText>
          </p>

          <p className={styles.body}>
            <PolishText>
              Łączymy artystyczną kreatywność z inżynierskim profesjonalizmem.
              Dobra architektura musi być dla nas czymś więcej niż obrazem.
              Musi działać.
            </PolishText>
          </p>
        </div>
      </section>

      {/* =====================================================
          STORY
          ===================================================== */}

      <section
        id="beton-house"
        className={`${styles.story} ${styles.reveal}`}
        data-reveal
      >
        <div className={styles.storyInner}>
          <div className={styles.storyContent}>
            <h2 className={styles.heading}>
              <PolishText>To tutaj wszystko się zaczęło.</PolishText>
            </h2>

            <p className={styles.lead}>
              <PolishText>
                Beton House to nasz dom i jednocześnie nazwa naszej pracowni.
                Projekt zaczęliśmy prawie dekadę temu, a jego realizacja stała
                się dla nas pierwszym doświadczeniem tworzenia architektury od
                pierwszej kreski aż po codzienne życie.
              </PolishText>
            </p>
          </div>

          <div className={`${styles.imageFrame} ${styles.storyImage}`}>
            <img
              src="/images/beton-house/exterior.webp"
              alt="Beton House — nasz dom w Katowicach"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
          ===================================================== */}

      <section
        className={`${styles.experience} ${styles.rail} ${styles.reveal}`}
        data-reveal
      >
        <div className={styles.experienceText}>
          <h2 className={styles.heading}>
            <PolishText>Dom stał się naszym laboratorium.</PolishText>
          </h2>

          <p className={styles.lead}>
            <PolishText>
              Ponad 500 m² betonu, szkła, światła i przestrzeni pozwoliło nam
              sprawdzić własne pomysły w praktyce.
            </PolishText>
          </p>

          <p className={styles.body}>
            <PolishText>
              Zobaczyliśmy, co działa, co wymaga zmiany i jak architektura
              zachowuje się wtedy, kiedy naprawdę zaczynamy w niej mieszkać.
            </PolishText>
          </p>
        </div>

        <div className={`${styles.imageFrame} ${styles.experienceImage}`}>
          <img
            src="/images/beton-house/detail.webp"
            alt="Detal wnętrza Beton House"
          />
        </div>
      </section>

      {/* =====================================================
          LIFE
          ===================================================== */}

      <section
        className={`${styles.life} ${styles.rail} ${styles.reveal}`}
        data-reveal
      >
        <div className={`${styles.imageFrame} ${styles.lifeImage}`}>
          <img src="/images/beton-house/life.webp" alt="Życie w Beton House" />
        </div>

        <div className={styles.lifeText}>
          <h2 className={styles.heading}>
            <PolishText>Z czasem dom zaczął żyć.</PolishText>
          </h2>

          <p className={styles.body}>
            <PolishText>
              Projektując własny dom, nie mogliśmy przewidzieć wszystkiego.
              Dopiero codzienność pokazała nam, jak przestrzeń zachowuje się
              rano, wieczorem, latem i zimą.
            </PolishText>
          </p>

          <p className={styles.body}>
            <PolishText>
              To doświadczenie jest dla nas równie ważne jak sam projekt.
              Architektura przestaje być abstrakcją w chwili, kiedy zaczyna
              uczestniczyć w życiu.
            </PolishText>
          </p>
        </div>
      </section>

      {/* =====================================================
          BUILD
          ===================================================== */}

      <section
        className={`${styles.build} ${styles.rail} ${styles.reveal}`}
        data-reveal
      >
        <div className={styles.buildHeader}>
          <h2 className={styles.heading}>
            <PolishText>Najpierw był projekt.</PolishText>
          </h2>

          <p className={styles.lead}>
            <PolishText>Później przyszła rzeczywistość.</PolishText>
          </p>
        </div>

        <div className={styles.buildGallery}>
          <div className={styles.buildImage}>
            <img
              src="/images/beton-house/build-01.webp"
              alt="Beton House podczas budowy"
            />
          </div>

          <div className={styles.buildImage}>
            <img
              src="/images/beton-house/build-02.webp"
              alt="Beton House — etap budowy"
            />
          </div>

          <div className={styles.buildImage}>
            <img
              src="/images/beton-house/build-03.webp"
              alt="Beton House — realizacja"
            />
          </div>
        </div>

        <div className={styles.buildText}>
          <h3>
            <PolishText>Poznaliśmy projekt z obu stron.</PolishText>
          </h3>

          <div className={styles.buildCopy}>
            <p className={styles.body}>
              <PolishText>
                Przy realizacji Beton House Seweryn występował w dwóch rolach —
                architekta i inwestora.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Z jednej strony odpowiadał za projekt, funkcję i rozwiązania
                techniczne. Z drugiej — za budżet, wykonanie i decyzje, które
                pojawiają się pomiędzy rysunkiem a gotowym domem.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Dzięki temu zobaczyliśmy cały proces z dwóch perspektyw.
                Nauczyliśmy się, gdzie potrzebny jest kompromis, a gdzie warto
                szukać rozwiązania, które pozwoli zachować najważniejszą ideę.
              </PolishText>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WATER
          ===================================================== */}

      <section className={`${styles.water} ${styles.reveal}`} data-reveal>
        <div className={styles.waterInner}>
          <div className={`${styles.imageFrame} ${styles.waterImage}`}>
            <img
              src="/images/beton-house/water.webp"
              alt="Refleksor wodny przed Beton House"
            />
          </div>

          <div className={styles.waterText}>
            <h2 className={styles.heading}>
              <PolishText>
                Chcieliśmy, żeby światło było częścią domu.
              </PolishText>
            </h2>

            <p className={styles.lead}>
              <PolishText>
                Przed południową, szklaną elewacją zaprojektowaliśmy płytki
                zbiornik wody — refleksor.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Odbijające się od jego powierzchni światło trafia do wnętrza i
                zmienia je wraz z porą dnia.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Wiatr tworzy fale, a na suficie i ścianach pojawiają się ruchome
                refleksy. Zimą refleksor zamarza i zamienia się w lodowisko dla
                naszych trzech córek.
              </PolishText>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          TVN
          ===================================================== */}

      <section className={`${styles.tvn} ${styles.reveal}`} data-reveal>
        <div className={styles.tvnInner}>
          <div className={`${styles.imageFrame} ${styles.tvnImage}`}>
            <img
              src="/images/beton-house/tvn-omenaa.webp"
              alt="Omenaa Mensah z Hanią i Sewerynem Nogalskimi w Beton House"
            />
          </div>

          <div className={styles.tvnText}>
            <h2 className={styles.heading}>
              <PolishText>Pokazaliśmy nasz dom.</PolishText>
            </h2>

            <p className={styles.lead}>
              <PolishText>
                Omenaa Mensah odwiedziła nas w Beton House w programie
                „Wyjątkowe domy”.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Mogliśmy opowiedzieć o architekturze, ale też o tym, jak żyjemy
                w domu, który sami zaprojektowaliśmy.
              </PolishText>
            </p>

            <a
              href="https://player.pl/playerplus/programy-online/wyjatkowe-domy-odcinki,27402/odcinek-2,S01E02,184839"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.buttonDark}`}
            >
              <PolishText>Zobacz materiał TVN</PolishText>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRANSITION
          ===================================================== */}

      <section
        className={`${styles.transition} ${styles.rail} ${styles.reveal}`}
        data-reveal
      >
        <div className={styles.transitionHeading}>
          <h2 className={styles.heading}>
            <PolishText>Własny dom zmienił nasze projektowanie.</PolishText>
          </h2>
        </div>

        <div className={styles.transitionText}>
          <p className={styles.lead}>
            <PolishText>
              To doświadczenie zabieramy ze sobą do każdego kolejnego projektu.
            </PolishText>
          </p>

          <p className={styles.body}>
            <PolishText>
              Dziś wiemy, że dobra architektura musi spotkać się z
              rzeczywistością: z budżetem, wykonaniem, materiałem i przede
              wszystkim z życiem ludzi, którzy będą z niej korzystać.
            </PolishText>
          </p>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
          ===================================================== */}

      <section
        className={`${styles.philosophy} ${styles.reveal}`}
        data-reveal
      >
        <div className={styles.philosophyInner}>
          <div className={styles.philosophyHeading}>
            <h2 className={styles.heading}>
              <PolishText>Słuchamy. Szukamy. Projektujemy.</PolishText>
            </h2>
          </div>

          <div className={styles.philosophyText}>
            <p className={styles.lead}>
              <PolishText>Każdy projekt zaczynamy od rozmowy.</PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Chcemy wiedzieć, jak żyjecie, czego potrzebujecie i co jest dla
                Was ważne.
              </PolishText>
            </p>

            <p className={styles.body}>
              <PolishText>
                Nie projektujemy gotowych domów. Szukamy rozwiązań dla
                konkretnych ludzi, miejsc i sposobów życia.
              </PolishText>
            </p>

            <button
              type="button"
              className={`${styles.button} ${styles.buttonDark}`}
              onClick={openContact}
            >
              <PolishText>Porozmawiajmy</PolishText>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
          ===================================================== */}

      <section
        id="projekty"
        className={`${styles.projects} ${styles.rail} ${styles.reveal}`}
        data-reveal
      >
        <div className={styles.projectsHeader}>
          <h2 className={styles.heading}>
            <PolishText>Kolejne historie.</PolishText>
          </h2>

          <p className={styles.projectsIntro}>
            <PolishText>Wybrane realizacje i projekty Beton House.</PolishText>
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
                <img src={project.image} alt={project.title} />
              </div>

              <div className={styles.projectInfo}>
                <h3>
                  <PolishText>{project.title}</PolishText>
                </h3>

                <p>
                  <PolishText>{project.subtitle}</PolishText>
                </p>
              </div>

              <p className={styles.projectDescription}>
                <PolishText>{project.description}</PolishText>
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* =====================================================
          CONTACT
          ===================================================== */}

      <section
        id="kontakt"
        className={`${styles.contact} ${styles.reveal}`}
        data-reveal
      >
        <div className={styles.contactInner}>
          <h2 className={styles.heading}>
            <PolishText>Porozmawiajmy o Waszym miejscu.</PolishText>
          </h2>

          <p>
            <PolishText>
              Jeśli jesteście na początku drogi albo macie już konkretną wizję,
              chętnie jej posłuchamy.
            </PolishText>
          </p>

          <button
            type="button"
            className={`${styles.button} ${styles.buttonDark}`}
            onClick={openContact}
          >
            <PolishText>Porozmawiajmy</PolishText>
          </button>
        </div>
      </section>
    </main>
  );
}