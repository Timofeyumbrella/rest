import { useSelector } from "react-redux";

import axios from "axios";

import Event from "../../components/Event";

import styles from "../../styles/pages/Events.module.scss";

function Events({ events }) {
  return (
    <div className={styles.events}>
      <div className={styles.events__container}>
        {events.length ? (
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

export async function getStaticProps() {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MzM0MzIyNTcsImV4cCI6MTYzMzQzNTg1N30.cQFCuxmgL4ZnRut-MJYtyp9nVpaNEq7CVaYKBV9aExI`,
  };

  const { data: res } = await axios.get("http://localhost:5000/events", {
    headers,
  });

  return {
    props: { events: res.data },
  };
}

export default Events;
