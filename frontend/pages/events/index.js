import styles from "../../styles/pages/Events.module.scss";

function Events() {
  return (
    <div className={styles.events}>
      <div className={styles.events__container}>
        <h2 className={styles.events__unavailable}>
          Events are not available yet
        </h2>
      </div>
    </div>
  );
}

export default Events;
