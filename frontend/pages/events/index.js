import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import findAll from "utils/api/event/findAll";

import Event from "components/Event/Event";
import EventForm from "components/EventForm/EventForm";
import Spinner from "components/Spinner/Spinner";

import styles from "./Events.module.scss";

function Events() {
  const [events, setEvents] = useState([]);

  const { token } = useSelector((state) => state.token);

  useEffect(() => {
    const getEvents = async () => {
      if (!token.length) return;

      const events = await findAll();

      setEvents(events);
    };

    getEvents();
  }, [events.length]);

  return (
    <div className={styles.events}>
      {token.length > 0 && !events.length > 0 && (
        <div className={styles.events__spinner}>
          <Spinner />
        </div>
      )}
      {token.length > 0 && events.length > 0 && (
        <>
          <EventForm />
          <div className={styles.events__container}>
            {events.map((event) => {
              return <Event key={event.id} event={event} />;
            })}
          </div>
        </>
      )}
      {!token.length && (
        <h2 className={styles.events__unavailable}>You need to login first</h2>
      )}
    </div>
  );
}

export default Events;
