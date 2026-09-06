"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./ContactPanel.module.css";
import { PolishText } from "../polish-text";

type ContactPanelProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactPanel({
  open,
  onClose,
}: ContactPanelProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Kontakt ze strony Beton House — ${name}`
    );

    const body = encodeURIComponent(
      `Imię i nazwisko: ${name}\n` +
        `E-mail: ${email}\n` +
        `Telefon: ${phone || "—"}\n\n` +
        `Wiadomość:\n${message}`
    );

    window.location.href =
      `mailto:biuro@betonhouse.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        aria-hidden={!open}
        aria-label="Formularz kontaktowy"
      >
        <div className={styles.inner}>
          <div className={styles.top}>
            <span className={styles.title}>
              <PolishText>Porozmawiajmy.</PolishText>
            </span>

            <button
              type="button"
              className={styles.close}
              onClick={onClose}
              aria-label="Zamknij"
            >
              <span />
              <span />
            </button>
          </div>

          <div className={styles.content}>
            <p className={styles.intro}>
              <PolishText>
                Opowiedzcie nam o swoim miejscu, pomyśle albo planach.
                Odezwiemy się, żeby porozmawiać o możliwościach.
              </PolishText>
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span>
                  <PolishText>Imię i nazwisko</PolishText>
                </span>

                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>
                  <PolishText>E-mail</PolishText>
                </span>

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>
                  <PolishText>Telefon</PolishText>
                </span>

                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  autoComplete="tel"
                />
              </label>

              <label className={styles.field}>
                <span>
                  <PolishText>Wiadomość</PolishText>
                </span>

                <textarea
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={5}
                  required
                />
              </label>

              <button type="submit" className={styles.submit}>
                <PolishText>Wyślij wiadomość</PolishText>
              </button>
            </form>

            <div className={styles.or}>
              <span>
                <PolishText>lub</PolishText>
              </span>
            </div>

            <div className={styles.contactDetails}>
              <a href="mailto:biuro@betonhouse.com">
                biuro@betonhouse.com
              </a>

              <a href="tel:+48606856600">
                +48 606 856 600
              </a>

              <a href="tel:+48608339199">
                +48 608 339 199
              </a>

              <p>
                <PolishText>
                  ul. Nagietek 38
                  <br />
                  40-748 Katowice
                </PolishText>
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}