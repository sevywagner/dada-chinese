import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

import styles from './css/cart-item.module.css';

const CartItem = (props) => {
    const dispatch = useDispatch();

    const removeFromCartHandler = () => {
        dispatch(cartActions.removeItem(props.id));
    }

    return (
        <>
            <div className={styles.item}>
                <div className={styles.section}>
                    <p>{props.title}</p>
                </div>
                <div className={styles.section}>
                    <p>${props.price.toFixed(2)}</p>
                </div>
                <div className={styles.section}>
                    <p>{props.quantity}</p>
                </div>
            </div>
            <div className={styles.wrap}>
                <button className={styles.remove} onClick={removeFromCartHandler}>{props.quantity > 1 ? 'Remove One' : 'Remove from Cart'}</button>
            </div>
        </>
    );
}

export const ExampleItem = () => {
    return (
        <div className={styles.example}>
            <div className={`${styles.section} ${styles['example-item']}`}>
                <p>Title</p>
            </div>
            <div className={`${styles.section} ${styles['example-item']}`}>
                <p>Price</p>
            </div>
            <div className={`${styles.section} ${styles['example-item']}`}>
                <p>Quantity</p>
            </div>
        </div>
    );
}

export default CartItem;