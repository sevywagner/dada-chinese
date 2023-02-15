import TeacherItem from "../components/teachers/TeacherItem";
import styles from './css/our-teachers.module.css';
import mainStyles from './../components/main.module.css';
import bios from "../components/teachers/teacher-bios";

const OurTeachers = () => {
    return (
        <div className={styles.root}>
            <p className={mainStyles.title}>Our Teachers</p>
            <div className={styles.teachers}>
                {bios.map((bio) => <TeacherItem imageUrl={bio.imageUrl} name={bio.name} id={bio.id} key={bio.id} />)}
            </div>
        </div>
    );
}

export default OurTeachers;