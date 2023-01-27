import mainStyles from './../main.module.css';

const Quote = ({ quote, speaker }) => {
    return (
        <div className={mainStyles.wrap}>
            <p className={mainStyles.title}>{quote}</p>
            <p className={mainStyles.subtitle}>{speaker}</p>
        </div>
    );
}

export default Quote;