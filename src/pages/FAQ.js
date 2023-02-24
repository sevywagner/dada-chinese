import { Link } from 'react-router-dom';
import mainStyles from './../components/main.module.css';
import styles from './css/faq.module.css';

const FAQ = () => {
    return (
        <div>
            <p className={mainStyles.title}>FAQ</p>
            <div className={styles.qa}>
                <div className={styles.wrap}>
                    <p className={styles.question}>How long will each class take?</p>
                    <p className={styles.answer}>Each class is 45 minutes to one hour</p>
                </div>
                <div className={styles.wrap}>
                    <p className={styles.question}>What is your cancellation policy?</p>
                    <p className={styles.answer}>If you cancel a class 48 hours in advance you are elligable for a full refund, otherwise there will not be a refund but depending on the teacher's availability you can schedule a makeup session.</p>
                </div>
                <div className={styles.wrap}>
                    <p className={styles.question}>I have a million questions. Who should I reach out to?</p>
                    <p className={styles.answer}>You can always email us about your inquiries, expectations, questions, stories, feedback, complaints, etc. If you don't already have our email address feel free to contact us through our <Link to='/dada-chinese/contact' className={styles.contact}>Contact Form</Link></p>
                </div>
            </div>
        </div>
    );
}

export default FAQ;