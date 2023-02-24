import mainStyles from './../main.module.css';
import styles from './css/about.module.css';

const About = () => {
    return (
        <div className={mainStyles.wrap}>
            <div className={styles.wrap}>
                <p className={mainStyles.subtitle}>About Us</p>
                <hr />
                <p className={mainStyles.pg}>Dada Chinese is a leader in today’s PreK-2 online Mandarin learning industry. We’re committed to providing unparalleled access to high quality live online classes to kids from 2-8 years old to their parents, grandparents, and caregivers. Our courses are well-designed to tailor young learners' curiosity, creativity, and capability. Through years of experience, our high interactive online courses make learning fun, engaging and effective.</p>
            </div>
        </div>
    );
}

export default About;