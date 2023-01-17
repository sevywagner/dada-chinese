import styles from './css/home.module.css';
import mainStyles from './../components/main.module.css';
import About from '../components/home/About';
import Carousel from '../components/home/Carousel';
import Impact from '../components/home/Impact';
import Events from '../components/home/Events';

const Home = () => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <p>Dada Chinese</p>
                <p>欢迎</p>
            </div>
            <div className={mainStyles.row}>
                <div className={mainStyles['half-width-block']}>
                    <Carousel />
                </div>
                <div className={mainStyles['half-width-block']}>
                    <About />
                </div>
            </div>
            <Impact />
            <Events />
        </div>
    );
}

export default Home;