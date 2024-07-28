import { Link } from 'react-router-dom';
import styles from './css/action.module.css';

const Action = () => {
    return (
        <div className={styles.root}>
            <Link to='/our-classes' className={styles.button}>Book a Class</Link>
        </div>
    );
}

export default Action;