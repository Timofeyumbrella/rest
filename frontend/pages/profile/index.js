import { useState, useEffect } from "react";

import useAuth from "hooks/useAuth";

import styles from "./Profile.module.scss";

function Profile() {
  const [user, setUser] = useState({});

  const auth = useAuth();

  useEffect(() => {
    const getProfile = () => {
      setUser(auth.getProfile());
    };

    getProfile();
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles.profile__card}>
        <h1 className={styles.profile__name}>{user.name}</h1>
        <h2 className={styles.profile__email}>{user.email}</h2>
        <h2 className={styles.profile__gender}>{user.gender}</h2>
        <span className={styles.profile__age}>{user.age}</span>
        <button className={styles.profile__edit}>edit profile</button>
      </div>
    </div>
  );
}

export default Profile;
