import styles from './css/event.module.css';

const EventItem = (props) => {
    return (
        <div className={styles['event-item']}>
            <div className={styles.top}>
                <p>{props.title}</p>
                <p>{props.date.toDateString()}</p>
            </div>
            <div className={styles.bottom}>
                <button className={styles.rsvp}>RSVP</button>
            </div>
        </div>
    );
}

export default EventItem;