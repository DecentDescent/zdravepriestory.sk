import styles from "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className={styles["testimonials"]} id="referencie">
      <div className={styles["container"]}>
        <h1>Kde už majú zdravé priestory?</h1>
        <p className={styles["lead"]}>
          Produktom GCA Antivir sú už ošetrené priestory v súkromných firmách,
          inštitúciách, športových zariadeniach aj domácnostiach.
        </p>
        <div className={styles["testimonials__container"]}>
          <a href="https://www.fkpribram.cz/" target="_blank">
            <img src="/static/graphics/1.png" />
          </a>
          <a href="http://www.zzspk.cz/" target="_blank">
            <img src="/static/graphics/2.png" />
          </a>
          <a href="https://www.divadlonajezerce.cz/uvod" target="_blank">
            <img src="/static/graphics/3.png" />
          </a>
          <a href="https://www.dpmb.cz/cs/novinky/all" target="_blank">
            <img src="/static/graphics/4.png" />
          </a>
          <a href="https://www.ccrjm.cz/" target="_blank">
            <img src="/static/graphics/5.png" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
