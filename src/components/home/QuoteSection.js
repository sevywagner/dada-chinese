import { useState } from 'react'
import Quote from './Quote';
import quotes from './quotes';
import styles from './../../pages/css/home.module.css';
import mainStyles from './../main.module.css';

const QuoteSection = () => {
    const [more, setMore] = useState(false);
    
    const toggle = () => {
        setMore((prevState) => !prevState);
    }

    return (
        <section className={styles['quote-section']}>
            <p className={mainStyles.title}>Reviews</p>
            {!more && <div className={mainStyles.column}>
                <Quote quote={quotes[0].quote} speaker={quotes[0].speaker} />
                <button className={styles.button} onClick={toggle}>See More</button>
            </div>}
            {more && <div className={mainStyles.column}>
                {quotes.map((quote) => <Quote quote={quote.quote} speaker={quote.speaker} key={quote.speaker} />)}
                <fieldset>
                    <a href="https://www.wyzant.com/Tutors/jingyi" className={styles.button}>More on Wyzant</a>
                </fieldset>
                <button className={styles.button} onClick={toggle}>See Less</button>
            </div>}
        </section>
    );
}

export default QuoteSection;