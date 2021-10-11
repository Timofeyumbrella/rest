import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import useAuth from "hooks/useAuth";
import Spinner from "components/Spinner/Spinner";

import styles from "./Profile.module.scss";

function Profile() {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const { token } = useSelector((state) => state.token);
  const auth = useAuth();
  const router = useRouter();

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { id, roleId } = user;

    await auth.updateUser({
      id,
      name,
      email,
      age,
      gender,
      password,
      roleId,
    });

    setEditMode(false);
  };

  useEffect(() => {
    if (!token) return router.push("/user/login");

    const getProfile = () => {
      setUser(auth.getProfile());
    };

    getProfile();
  }, [token]);

  return (
    <div className={styles.profile}>
      {editMode && (
        <form className={styles.profile__card} onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <h2 className={styles.profile__title}>Edit user</h2>
              <span
                className={styles.profile__close}
                onClick={() => setEditMode(false)}
              >
                &Chi;
              </span>
            </legend>
            <input
              type="text"
              placeholder="name"
              value={name}
              className={styles.profile__input}
              onChange={handleNameChange}
              required
            />
            <input
              type="email"
              placeholder="email"
              value={email}
              className={styles.profile__input}
              onChange={handleEmailChange}
              required
            />
            <input
              type="text"
              placeholder="gender"
              value={gender}
              className={styles.profile__input}
              onChange={handleGenderChange}
              required
            />
            <input
              type="number"
              min="12"
              max="120"
              placeholder="age"
              value={age}
              className={styles.profile__input}
              onChange={handleAgeChange}
              required
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              className={styles.profile__input}
              onChange={handlePasswordChange}
              required
            />
            <input
              type="submit"
              value="Save changes"
              className={styles.profile__submit}
            />
          </fieldset>
        </form>
      )}
      {!Object.keys(user).length > 0 && (
        <div className={styles.profile__spinner}>
          <Spinner />
        </div>
      )}
      {Object.keys(user).length > 0 && !editMode && (
        <div className={styles.profile__card}>
          <h1 className={styles.profile__name}>{user.name}</h1>
          <h2 className={styles.profile__email}>{user.email}</h2>
          <h2 className={styles.profile__gender}>{user.gender}</h2>
          <span className={styles.profile__age}>{user.age}</span>
          <button
            className={styles.profile__edit}
            onClick={() => setEditMode(true)}
          >
            edit profile
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
