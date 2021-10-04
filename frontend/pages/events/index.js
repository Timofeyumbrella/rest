import axios from "axios";

function Events({ events }) {
  return (
    <div className="events">
      <h2>list of events in here</h2>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:5000/test");

  return {
    props: { events: res.data.events },
  };
}

export default Events;
