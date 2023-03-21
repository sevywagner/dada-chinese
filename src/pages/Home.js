import styles from './css/home.module.css';
import mainStyles from './../components/main.module.css';
import About from '../components/home/About';
import Carousel from '../components/home/Carousel';
import Quote from '../components/home/Quote';
import quotes from '../components/home/quotes';

const Home = () => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <p>Dada Chinese</p>
                <p>欢迎</p>
                <a data-savvycal-embed className={mainStyles.book} href="https://savvycal.com/derrick/chat">Book a Class</a>
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
            <section className={styles['quote-section']}>
                <p className={mainStyles.title}>Feedback from our Students</p>
                {quotes.map((quote) => <Quote quote={quote.quote} speaker={quote.speaker} key={quote.speaker} />)}
            </section>
        </div>
    );
}

export default Home;