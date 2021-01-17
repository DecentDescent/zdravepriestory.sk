import styles from "./Hero.scss";
import Header from "../Header";
import Form from "../Form";

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["container"]}>
        <Header />
        <div className={styles["hero__text"]}>
          <h1>
            Zaisťujeme dlhodobú dezinfekčnú ochranu proti{" "}
            <span>baktériám a vírusom</span>
          </h1>
          <p>
            Používame dezinfekčnú ochranu GCA Antivir, ktorá si poradí
            s väčšinou baktérií a vírusov –{" "}
            <strong>vrátane koronavírusov</strong> a vaše okolie ochránime až{" "}
            <strong>na 120 dní</strong>.
          </p>
        </div>
        <Form compact="true" />
      </div>
      <div className={styles["hero__background"]}>
        <div className={styles["slides"]}>
          <div className={styles["background__slide"]}></div>
          <div className={styles["background__slide"]}></div>
          <div className={styles["background__slide"]}></div>
          <div className={styles["background__slide"]}></div>
          <div className={styles["background__slide"]}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
