import styles from './css/checkout-item.module.css';

const CheckoutCartItem = ({ title, price, quantity }) => {
    return (
        <div className={styles.item}>
            <p className={styles.title}>{title}</p>
            {price ? <p className={styles.price}>${price}</p> : <p className={styles.price}>Price</p>}
            <p className={styles.quantity}>{quantity}</p>
        </div>
    );
}

export default CheckoutCartItem;