import useDescriptionShortener from "hooks/useDescriptionShortener";
import Link from "next/link";

import styles from "./Event.module.scss";

function Event({ event }) {
  const { id, title, description, price, date } = event;

  const allowedDescription = useDescriptionShortener(description);

  return (
    <div className={styles.event}>
      <Link href={`/events/${id}`}>
        <a className={styles.event__title}>{title}</a>
      </Link>
      <p className={styles.event__description}>{allowedDescription}</p>
      <span className={styles.event__price}>{price}$</span>
      <span className={styles.event__date}>{date.substring(0, 10)}</span>
    </div>
  );
}

export default Event;
