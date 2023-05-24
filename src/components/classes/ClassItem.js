import { Link } from 'react-router-dom';
import styles from './css/class-item.module.css';
import mainStyles from './../main.module.css';
import { PopupButton } from 'react-calendly';

const ClassItem = (props) => {
    return (
        <Link to={props.linkPath}>
            <div className={styles.wrap}>
                <div className={styles.item}>
                    <div className={styles.pic}>
                        <img src={require(`./../../pictures/titlePics/${props.imageUrl}`)} />
                    </div>
                    <div className={styles.data}>
                        <p className={mainStyles.subtitle}>{props.name}</p>
                        {props.subtitles.map((subtitle) => <p className={styles.subtitle} key={Math.random()}>{subtitle}</p>)}
                        <hr />
                        {props.bulletPoints.map((bullet) => <li>{bullet}</li>)}
                        <p className={styles.price}>${props.price}</p>
                    </div>
                </div>
                <PopupButton 
                    className={styles.book} 
                    text='Book a Class' 
                    url='https://calendly.com/bettywangjy/60min?month=2023-05' 
                    rootElement={document.getElementById('root')}
                    prefill={{
                        customAnswers: {
                            a1: props.name
                        }
                    }}
                />
            </div>
        </Link>
    );
}

export default ClassItem;