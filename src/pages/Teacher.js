import { useParams } from 'react-router-dom';
import bios from './../components/teachers/teacher-bios';
import mainStyles from './../components/main.module.css';
import styles from './css/teacher.module.css';

const Teacher = () => {
    const params = useParams();
    const bio = bios.find((bio) => bio.name === params.teacherName);

    return (
        <div className={styles.root}>
                    <p className={mainStyles.title}>About {bio.name}</p>
            <div className={styles.wrap}>
                <div className={styles.pic}>
                    <img src={require(`./../pictures/teachers/${bio.imageUrl}.jpg`)} alt="Bio" />
                </div>
                <div className={styles.pg}>
                    <p className={styles.text}>{bio.bodyPg}</p>
                </div>
            </div>
        </div>
    );
}

export default Teacher;