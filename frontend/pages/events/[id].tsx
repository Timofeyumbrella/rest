import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { setIsModalOpened } from "redux/modal/modal.actions";
import { RootState } from "redux/root.reducer";
import find from "utils/api/event/find";
import destroy from "utils/api/event/destroy";

import Event from "interfaces/Event";

import Modal from "components/Modal/Modal";
import Spinner from "components/Spinner/Spinner";

import styles from "./EventPage.module.scss";

function EventPage() {
  const [event, setEvent] = useState<Event>({} as Event);

  const { isModalOpened } = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getEvent = async () => {
      if (!id) return;

      const event = await find(id);

      setEvent(event);
    };

    getEvent();
  }, [id]);

  const handleDelete = async () => {
    await destroy(id);

    router.push("/events");
  };

  return (
    <div className={styles.eventPage}>
      {Object.keys(event).length > 0 && (
        <div className={styles.eventPage__event}>
          <div className={styles.eventPage__content}>
            <h1 className={styles.eventPage__title}>{event.title}</h1>
            <p className={styles.eventPage__description}>{event.description}</p>
            <span className={styles.eventPage__price}>{event.price}$</span>
            <span className={styles.eventPage__date}>
              {event.date.toString().substring(10, -10)}
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
      )}
      {!Object.keys(event).length && (
        <div className={styles.eventPage__spinner}>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default EventPage;
