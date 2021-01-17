import styles from "./Footer.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__container"]}>
        <nav>
          <ul>
            <li>
              <a href="#proc-spolupracovat">Prečo spolupracovat s námi</a>
            </li>
            <li>
              <a href="#s-cim-pracujeme">S čím pracujeme</a>
            </li>
            <li>
              <a href="#co-umime">Co umíme ochrániť</a>
            </li>
            <li>
              <a href="#reference">Referencie</a>
            </li>
          </ul>
        </nav>

        <a
          href="https://www.facebook.com/Zdrav%C3%A9Prostorycz-105214201062315"
          target="_blank"
        >
          <svg viewBox="0 0 512 512">
            <path d="m452 0h-392c-33.084 0-60 26.916-60 60v392c0 33.084 26.916 60 60 60h392c33.084 0 60-26.916 60-60v-392c0-33.084-26.916-60-60-60zm20 452c0 11.028-8.972 20-20 20h-114v-163h61.79l10.21-62h-72v-43c0-16.975 13.025-30 30-30h41v-62h-41c-50.923 0-91.978 41.25-91.978 92.174v42.826h-60.022v62h60.022v163h-216.022c-11.028 0-20-8.972-20-20v-392c0-11.028 8.972-20 20-20h392c11.028 0 20 8.972 20 20z" />
          </svg>
        </a>

        <p>
          Zdraveprostory.cz s.r.o.
          <br />
          IČO: 04848390
          <br />
          Zlonínská 259, 250 63 Mratín
        </p>

        <p>
          <a href="mailto:info@zdraveprostory.cz">info&#64;zdraveprostory.cz</a>
        </p>
        <small>© 2020 Zdraveprostory.cz s.r.o.</small>
      </div>
    </footer>
  );
};

export default Footer;
