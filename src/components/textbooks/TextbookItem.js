import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import styles from './css/textbook-item.module.css';

const TextbookItem = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const existingItem = cart.items.find((item) => item.id === props.id);

    const addToCartHandler = () => {
        dispatch(cartActions.addItem({
            id: props.id,
            title: props.title,
            price: props.price,
            quantity: 1
        }));
    }

    return (
        <>
            <div className={styles.root}>
                <div className={styles.image}>
                    <img src={props.imageUrl} />
                </div>
                <div className={styles.data}>
                    <p className={styles.title}>{props.title}</p>
                    <p>${props.price}</p>
                    <button className={styles.add} onClick={addToCartHandler}>Add to Cart</button>
                    {existingItem && <p>{existingItem.quantity} in cart</p>}
                </div>
            </div>
        </>
    );
}

export default TextbookItem;