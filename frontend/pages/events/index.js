import axios from "axios";

const Events = ({ events }) => {
  return (
    <div className="events">
      {events.map((event) => {
        return (
          <div className="event" key={event.id}>
            <span className="event__title">{event.title}</span>
            <span className="event__description">{event.description}</span>
            <span className="event__price">{event.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get("/events");

  return {
    props: { events: res.data },
  };
}

export default Events;
