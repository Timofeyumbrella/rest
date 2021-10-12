import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

import useAuth from "hooks/useAuth";

import styles from "./Register.module.scss";

function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const { token } = useSelector((state) => state.token);

  useEffect(() => {
    if (token.length) router.push("/");
  }, [token]);

  const handleNameChange = (event) => setName(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await auth.register({ name, age, email, gender, password });

    setName("");
    setAge("");
    setEmail("");
    setGender("");
    setPassword("");

    router.push("/user/login");
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Create your brand new profile</h1>
      <form className={styles.register__form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          value={name}
          onChange={handleNameChange}
          required
          className={styles.register__input}
        />
        <input
          type="number"
          placeholder="enter your age"
          value={age}
          onChange={handleAgeChange}
          required
          className={styles.register__input}
        />
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={handleEmailChange}
          required
          className={styles.register__input}
        />
        <input
          type="text"
          placeholder="enter your gender"
          value={gender}
          onChange={handleGenderChange}
          required
          className={styles.register__input}
        />
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={handlePasswordChange}
          required
          className={styles.register__input}
        />
        <input
          type="submit"
          className={styles.register__submit}
          value="Submit"
        />
      </form>

      <h3>Already have an account?</h3>
      <Link href="/user/login">
        <a className={styles.register__link}>Login here</a>
      </Link>
    </div>
  );
}

export default Register;
