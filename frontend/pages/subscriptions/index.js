import styles from "./Subscriptions.module.scss";

const subscriptions = () => {
  return (
    <div className={styles.subscriptions}>
      <div className={styles.subscriptions__container}>
        <h2 className={styles.subscriptions__empty}>
          You don't have any subscriptions yet
        </h2>
      </div>
    </div>
  );
};

export default subscriptions;
