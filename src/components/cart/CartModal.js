import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../util/Button';
import mainStyles from './../main.module.css';
import styles from './css/cart-modal.module.css';
import CartItem, { ExampleItem } from './CartItem';

const Interface = (props) => {
    const cart = useSelector((state) => state.cart);

    return (
        <div className={styles.root}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={props.onClose}><img height='30' src={require('./../../pictures/icons/close.png')} /></button>
                <p className={mainStyles.title}>Cart</p>
                <hr />
                <div className={styles.list}>
                    {cart.items.length !== 0 ? <ExampleItem /> : <p>No items in the cart yet</p>}
                    {cart.items.map((item) => <CartItem 
                        key={Math.random()}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        time={item.time}
                    />)}
                </div>
                <div className={styles.total}>
                    <p>Total Price:</p>
                    <p>${cart.totalPrice.toFixed(2)}</p>
                </div>
                <div className={mainStyles.wrap}>
                    {cart.items.length !== 0 && <Link to='/checkout'><Button onClick={props.onClose}>Proceed to Checkout</Button></Link>}
                </div>
            </div>
        </div>
    );
}

const Overlay = () => {
    return <div className={mainStyles.overlay}></div>;
}

const CartModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay-root'))}
            {ReactDOM.createPortal(<Interface onClose={props.onClose} />, document.getElementById('modal-root'))}
        </>
    );
}

export default CartModal;