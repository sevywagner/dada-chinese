import { Link } from 'react-router-dom';
import styles from './css/home.module.css';
import mainStyles from './../components/main.module.css';
import About from '../components/home/About';
import Carousel from '../components/home/Carousel';
import Impact from '../components/home/Impact';

const Home = () => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <p>Dada Chinese</p>
                <p>欢迎</p>
                <Link to='/dada-chinese/our-classes' className={mainStyles.book}>Book a Class</Link>
            </div>
            <div className={styles.row}>
                <div className={mainStyles['half-width-block']}>
                    <Carousel />
                </div>
                <div className={mainStyles['half-width-block']}>
                    <About />
                </div>
            </div>
            <Impact />
        </div>
    );
}

export default Home;