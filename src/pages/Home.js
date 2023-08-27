import styles from './css/home.module.css';
import mainStyles from './../components/main.module.css';
import About from '../components/home/About';
import Carousel from '../components/home/Carousel';
import QuoteSection from '../components/home/QuoteSection';
import { PopupButton } from 'react-calendly'
import Qa from '../components/home/Qa';

const Home = () => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <p>Dada Chinese</p>
                <p className={styles['under-title']}>Live Chinese class for kids, parents, and language lovers</p>
                <p>欢迎</p>
                {/* <a data-savvycal-embed className={mainStyles.book} href="https://savvycal.com/derrick/chat">Book a Class</a> */}
                <PopupButton 
                    className={mainStyles.book} 
                    text='Free Trial Lesson' 
                    url='https://calendly.com/bettywangjy/60min?month=2023-05' 
                    rootElement={document.getElementById('root')}
                />
            </div>
            <section>
                <div className={styles.row}>
                    <div className={styles.carousel}>
                        <Carousel />
                    </div>
                    <div className={mainStyles['half-width-block']}>
                        <About />
                    </div>
                </div>
            </section>
            <QuoteSection />
            <Qa />
        </div>
    );
}

export default Home;