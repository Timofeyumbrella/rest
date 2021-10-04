import styles from "../styles/pages/Home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <h1 className={styles.home__title}>All events in one place</h1>
      </div>
    </div>
  );
}

export default Home;
