import mainStyles from './../main.module.css';
import styles from './css/quote.module.css';

const Quote = ({ quote, speaker }) => {
    return (
        <div className={mainStyles.wrap}>
            <div className={styles.wrap}>
                <p className={styles.quote}>"{quote}"</p>
                <p className={styles.speaker}>~{speaker}</p>
            </div>
        </div>
    );
}

export default Quote;