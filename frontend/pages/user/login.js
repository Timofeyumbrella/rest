import { useState } from "react";
import Link from "next/link";

import styles from "../../styles/pages/user/Login.module.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Enter your existing profile</h1>

      <form className={styles.login__form} onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="enter your email"
          className={styles.login__input}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="enter your password"
          className={styles.login__input}
          onChange={handlePasswordChange}
          required
        />

        <input type="submit" value="Login" className={styles.login__submit} />
      </form>

      <h3>Don't have an account yet?</h3>
      <Link href="/user/register">
        <a className={styles.login__link}>Create a brand new one here</a>
      </Link>
    </div>
  );
}

export default Login;
