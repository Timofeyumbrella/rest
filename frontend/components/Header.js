import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className={styles.header__logo}
          />
        </Link>
        <nav className={styles.header__navbar}>
          <Link href="/events">
            <a className={styles.header__link}>Events</a>
          </Link>
          <Link href="/user/register">
            <a className={styles.header__link}>Auth</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
