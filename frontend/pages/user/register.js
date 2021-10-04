import { useState } from "react";
import Link from "next/link";

import styles from "../../styles/user/Register.module.scss";

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
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
