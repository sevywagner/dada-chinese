import styles from './css/home.module.css';
import About from '../components/home/About';
import Carousel from '../components/home/Carousel';

const Home = () => {
    return (
        <div>
            <div className={styles.title}>
                <p>Dada Chinese</p>
                <p>欢迎</p>
            </div>
            <Carousel />
            <About />
        </div>
    );
}

export default Home;