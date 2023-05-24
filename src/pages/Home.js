import styles from './css/home.module.css';
import mainStyles from './../components/main.module.css';
import About from '../components/home/About';
import Carousel from '../components/home/Carousel';
import QuoteSection from '../components/home/QuoteSection';
import { PopupButton } from 'react-calendly'

const Home = () => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <p>Dada Chinese</p>
                <p>欢迎</p>
                {/* <a data-savvycal-embed className={mainStyles.book} href="https://savvycal.com/derrick/chat">Book a Class</a> */}
                <PopupButton 
                    className={mainStyles.book} 
                    text='Book a Class' 
                    url='https://calendly.com/bettywangjy/60min?month=2023-05' 
                    rootElement={document.getElementById('root')}
                    prefill={{
                        customAnswers: {
                            a1: 'If this is your first class visit the "Our Classes" page and select a class'
                        }
                    }}
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
        </div>
    );
}

export default Home;