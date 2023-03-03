import { Link } from 'react-router-dom';
import styles from './css/home.module.css';
import mainStyles from './../components/main.module.css';
import About from '../components/home/About';
import Carousel from '../components/home/Carousel';
import Calendar from '../components/home/Calendar';

const Home = () => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <p>Dada Chinese</p>
                <p>欢迎</p>
                <a data-savvycal-embed className={mainStyles.book} href="https://savvycal.com/derrick/chat">Book a Class</a>
            </div>
            <div className={styles.row}>
                <div className={styles.carousel}>
                    <Carousel />
                </div>
                <div className={mainStyles['half-width-block']}>
                    <About />
                </div>
            </div>
        </div>
    );
}

export default Home;