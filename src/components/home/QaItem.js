import { useState } from 'react';
import styles from './css/qa.module.css';

const QaItem = (props) => {
    const [buttonState, setButtonState] = useState(false);

    const toggleButton = () => {
        setButtonState((prevState) => !prevState);
    }

    return (
        <>
            <div className={styles.question}>
                <p>{props.question}</p>

                {buttonState && <button onClick={toggleButton} className={styles['button-pressed']}>
                    <img width={25} src={require('./../../pictures/icons/right-arrow.png')} />
                </button>}

                {!buttonState && <button onClick={toggleButton} className={styles.button}>
                    <img width={25} src={require('./../../pictures/icons/right-arrow.png')} />
                </button>}
            </div>
            {buttonState && <p className={styles.answer}>{props.answer}</p>}
        </>
    );
}

export default QaItem;