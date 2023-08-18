import styles from './css/teacher-item.module.css';
import { Link } from 'react-router-dom';

const TeacherItem = (props) => {
    return (
        <Link to={`/our-teachers/${props.name}`}>
            <div className={styles.item}>
                <img src={require(`./../../pictures/teachers/${props.imageUrl}.jpg`)} />
                <p className={styles.title}>{props.name}</p>
            </div>
        </Link>
    );
}

export default TeacherItem;