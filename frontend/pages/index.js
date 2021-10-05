import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <h1 className={styles.home__title}>Welcome to ebox</h1>
        <h2 className={styles.home__description}>
          Here you can find all upcoming events here
        </h2>
        <div className={styles.home__spinner}></div>
      </div>
    </div>
  );
}

export default Home;
