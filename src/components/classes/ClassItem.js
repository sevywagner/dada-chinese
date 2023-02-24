import { Link } from 'react-router-dom';
import styles from './css/class-item.module.css';
import mainStyles from './../main.module.css';

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
                        <p className={styles.price}>${props.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ClassItem;