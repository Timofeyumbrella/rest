import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import useAuth from "hooks/useAuth";

import Modal from "components/Modal/Modal";
import Spinner from "components/Spinner/Spinner";

import { setIsModalOpened } from "redux/modal/modal.actions";

import styles from "./EventPage.module.scss";

function EventPage() {
  const [event, setEvent] = useState({});

  const { isModalOpened } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  const auth = useAuth();

  useEffect(() => {
    const getEvent = async () => {
      if (!id) return;

      setEvent(await auth.getEvent(id));
    };

    getEvent();
  }, [id]);

  const handleDelete = async () => {
    await auth.deleteEvent(id);

    router.push("/events");
  };

  return (
    <div className={styles.eventPage}>
      {Object.keys(event).length ? (
        <div className={styles.eventPage__event}>
          <div className={styles.eventPage__content}>
            <h1 className={styles.eventPage__title}>{event.title}</h1>
            <p className={styles.eventPage__description}>{event.description}</p>
            <span className={styles.eventPage__price}>{event.price}$</span>
            <span className={styles.eventPage__date}>
              {event.date.substring(10, -10)}
            </span>
          </div>
          <div className={styles.eventPage__buttons}>
            <button
              className={styles.eventPage__button}
              onClick={() => dispatch(setIsModalOpened(true))}
            >
              udpate
            </button>
            <button className={styles.eventPage__button} onClick={handleDelete}>
              delete
            </button>
          </div>

          {isModalOpened && <Modal id={id} />}
        </div>
      ) : (
        <div className={styles.eventPage__spinner}>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default EventPage;
