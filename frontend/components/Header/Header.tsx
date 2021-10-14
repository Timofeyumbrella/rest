import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "redux/root.reducer";
import { setToken } from "redux/token/token.actions";

import styles from "./Header.module.scss";

function Header() {
  const { token } = useSelector((state: RootState) => state.token);

  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/">
          <a>
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className={styles.header__logo}
            />
          </a>
        </Link>
        <nav className={styles.header__navbar}>
          <Link href="/events">
            <a className={styles.header__link}>Events</a>
          </Link>
          {token.length ? (
            <a
              className={styles.header__link}
              onClick={() => dispatch(setToken(""))}
            >
              Sign out
            </a>
          ) : (
            <Link href="/user/register">
              <a className={styles.header__link}>Auth</a>
            </Link>
          )}
          <Link href="/subscriptions">
            <a className={styles.header__link}>Subscriptions</a>
          </Link>
          {token.length > 0 && (
            <Link href="/profile">
              <a className={styles.header__link}>Profile</a>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;
