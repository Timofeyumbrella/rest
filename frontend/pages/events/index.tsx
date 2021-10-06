import axios from "axios";

import Event from "components/Event/Event";

import styles from "./Events.module.scss";

function Events({ events }) {
  return (
    <div className={styles.events}>
      <div className={styles.events__container}>
        {events.data.length ? (
          events.data.map((event) => {
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
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MzM1MDQ4ODksImV4cCI6MTYzMzUwODQ4OX0.Q1xDvRpuSNM9k2OYArDlc788_b4sO5p0y6odwqBJZPE`,
  };

  const res = await axios.get("/events", {
    headers,
  });

  return {
    props: { events: res.data },
  };
}

export default Events;
