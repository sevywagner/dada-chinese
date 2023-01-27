import styles from './css/teacher-item.module.css';
import mainStyles from './../main.module.css';

const TeacherItem = (props) => {
    return (
        <div className={styles.item}>
            <img src={require(`./../../pictures/teachers/${props.imageUrl}.jpg`)} />
            <p className={styles.title}>JingYi</p>
        </div>
    );
}

export default TeacherItem;