import { Component, useState } from "react";
import classnames from "classnames";
import styles from "./Form.scss";
import emailjs from "emailjs-com";

export default function Form(props) {
  const [formError, setFormError] = useState(false);
  const [formSent, setFormSent] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
    if (e.target.contact.value === "" || e.target.meters.value === "") {
      setFormError(true);
      setFormSent(true);
      console.log(e.target.contact.value);
      console.log(e.target.meters.value);
    } else {
      e.preventDefault();
      setFormError(false);
      setFormSent(true);
      emailjs
        .sendForm(
          "service_yopwzvg",
          "template_o26g2zg",
          e.target,
          "user_m8JnwiYVVXHwMLu8HisPe"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <section
        className={classnames({
          [styles["form"]]: true,
          [styles["form--compact"]]: props.compact,
        })}
      >
        <div className={styles["container"]}>
          {props.compact ? (
            <p className={styles["form__info"]}>
              <strong>Ozveme sa.</strong> Nechajte nám na seba kontakt a
              vytvoríme vám ponuku na mieru.
            </p>
          ) : (
            <>
              <h1>Ozveme sa</h1>
              <p className={styles["lead"]}>
                Nechajte nám na seba kontakt a vytvoríme vám ponuku na mieru.
              </p>
            </>
          )}
          <div className={styles["form__container"]}>
            <input
              type="text"
              name="contact"
              placeholder="vaše telefónne číslo / email"
              maxLength="5"
            />
            <input
              type="text"
              name="meters"
              placeholder="približná veľkosť priestorov v m2"
              maxLength="5"
            />
            <button type="submit">Odoslať</button>
          </div>

          {formSent ? (
            formError ? (
              <p className={styles["form__error"]}>Vyplňte, prosím, obě pole</p>
            ) : (
              <p className={styles["form__ok"]}>
                Nezávazná poptávka odeslána, děkujeme!
              </p>
            )
          ) : null}
        </div>
      </section>
    </form>
  );
}
