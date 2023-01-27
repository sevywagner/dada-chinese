import TeacherItem from "../components/teachers/TeacherItem";
import styles from './css/our-teachers.module.css';

const OurTeachers = () => {
    return (
        <div className={styles.root}>
            <div className={styles.teachers}>
                <TeacherItem imageUrl='Jingyi' />
            </div>
        </div>
    );
}

export default OurTeachers;