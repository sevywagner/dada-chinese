import { useParams } from 'react-router-dom';
import bios from './../components/teachers/teacher-bios';
import mainStyles from './../components/main.module.css';
import styles from './css/teacher.module.css';

const Teacher = () => {
    const params = useParams();
    const bio = bios.find((bio) => bio.name === params.teacherName);

    return (
        <div>
            <p className={mainStyles.title}>About {bio.name}</p>
            <div className={styles['pg-wrapper']}>
                <p className={mainStyles.pg}>{bio.bodyPg}</p>
            </div>
        </div>
    );
}

export default Teacher;