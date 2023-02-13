import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/redux/cart';
import styles from './css/textbook-item.module.css';
import { useContext } from 'react';
import { authContext } from '../../store/context/auth-context';

const TextbookItem = (props) => {
    const dispatch = useDispatch();
    const authCtx = useContext(authContext);
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
                    {localStorage.getItem('token') ? <button className={styles.add} onClick={addToCartHandler}>Add to Cart</button> : <Link className={styles.login} to='/dada-chinese/sign-in'>Login to add to cart</Link>}
                    {existingItem && localStorage.getItem('token') && <p>{existingItem.quantity} in cart</p>}
                </div>
            </div>
        </>
    );
}

export default TextbookItem;