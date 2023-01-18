import mainStyles from "./../main.module.css";
import styles from "./css/event.module.css";
import EventItem from "./EventItem";

const Events = () => {
  const events = [
    {
      id: "e1",
      title: "Event",
      date: new Date(2025, 1, 19),
      time: "10:00pm",
      location: "San Fransisco",
    },
    {
      id: "e2",
      title: "Event",
      date: new Date(2025, 1, 19),
      time: "10:00pm",
      location: "San Fransisco",
    },
    {
      id: "e3",
      title: "Event",
      date: new Date(2025, 1, 19),
      time: "10:00pm",
      location: "San Fransisco",
    },
  ];

  return (
    <div>
      <p className={mainStyles.title}>Events</p>
      <div className={styles.events}>
        {events.map((event) => (
          <EventItem
            key={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;