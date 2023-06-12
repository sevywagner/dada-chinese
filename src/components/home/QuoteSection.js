import Quote from './Quote';
import quotes from './quotes';
import styles from './../../pages/css/home.module.css';
import mainStyles from './../main.module.css';

const QuoteSection = () => {
    return (
        <section className={styles['quote-section']}>
            <p className={mainStyles.title}>Reviews</p>
            {quotes.map((quote) => <Quote quote={quote.quote} speaker={quote.speaker} key={quote.speaker} />)}
        </section>
    );
}

export default QuoteSection;