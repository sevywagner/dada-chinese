import styles from './css/textbook-item.module.css';

const TextbookItem = (props) => {
    return (
        <div className={styles.root}>
            <div className={styles.image}>
                <img src={props.imageUrl} />
            </div>
            <div className={styles.data}>
                <p className={styles.title}>{props.title}</p>
                <p>${props.price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default TextbookItem;