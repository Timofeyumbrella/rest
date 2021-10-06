import useDescriptionShortener from "hooks/useDescriptionShortener";

import styles from "./Event.module.scss";

function Event({ event }) {
  const { title, description, price, date } = event;

  const allowedDescription = useDescriptionShortener(description);

  return (
    <div className={styles.event}>
      <h2 className={styles.event__title}>{title}</h2>
      <p className={styles.event__description}>{allowedDescription}</p>
      <span className={styles.event__price}>{price}$</span>
      <span className={styles.event__date}>{date.substring(0, 10)}</span>
    </div>
  );
}

export default Event;
