import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Event from "components/Event/Event";

import styles from "./Events.module.scss";

function Events() {
  const [events, setEvents] = useState([]);

  const { token } = useSelector((state) => state.token);

  useEffect(() => {
    const getEvents = async () => {
      if (!token) return;

      const instance = axios.create({
        baseURL: "http://localhost:5000",
      });

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const { data: res } = await instance.get("/events", { headers });

      setEvents(res.data);
    };

    getEvents();
  }, []);

  return (
    <div className={styles.events}>
      <div className={styles.events__container}>
        {token.length ? (
          events.map((event) => {
            return <Event key={event.id} event={event} />;
          })
        ) : (
          <h2 className={styles.events__unavailable}>
            You need to login first
          </h2>
        )}
      </div>
    </div>
  );
}

export default Events;
