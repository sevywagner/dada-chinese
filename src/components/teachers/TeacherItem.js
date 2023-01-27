import styles from './css/teacher-item.module.css';
import { Link } from 'react-router-dom';

const TeacherItem = (props) => {
    return (
        <Link to={`/dada-chinese/our-teachers/${props.name}`}>
            <div className={styles.item}>
                <p className={styles.title}>JingYi</p>
            </div>
        </Link>
    );
}

export default TeacherItem;