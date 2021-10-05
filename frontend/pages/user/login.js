import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

import { setToken } from "../../redux/token/token.actions";

import styles from "./Login.module.scss";

function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data: res } = await axios.post("/user/login", {
        email,
        password,
      });

      dispatch(setToken(res.data.access));

      setEmail("");
      setPassword("");

      router.push("/");
    } catch (error) {
      setError(JSON.parse(JSON.stringify(error)));
    }
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
