import styles from './css/checkout-item.module.css';

const CheckoutCartItem = ({ title, price, quantity, time }) => {
    return (
        <>
            <div className={styles.item}>
                <section className={time ? styles.section : styles['half-section']}>
                    <p className={styles.title}>{title}</p>
                </section>
                <section className={time ? styles['middle-section'] : styles.section}>
                    <div className={time ? styles.wrap : styles['mid-wrap']}>
                        {quantity > 1 && <p className={styles.quantity}>x{quantity}</p>}
                        {price ? <p className={styles.price}>${price}</p> : <p className={styles.price}>Price</p>}
                    </div>
                </section>
                {time && <section className={styles.section}>
                    <div className={styles.wrap}>
                        <p>{time.split(' ')[0]}</p>
                        <p>{time.split(' ')[1]}</p>
                    </div>
                </section>}
            </div>
        </>
    );
}

export default CheckoutCartItem;