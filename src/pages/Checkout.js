import { useState } from 'react';
import { useSelector } from 'react-redux';

import CheckoutCartItem from '../components/cart/CheckoutCartItem';
import Paypal from '../components/cart/Paypal';
import Button from '../components/util/Button';
import mainStyles from './../components/main.module.css';
import styles from './css/checkout.module.css';

const Checkout = () => {
    const [showPaypal, setShowPaypal] = useState(false);
    const cart = useSelector((state) => state.cart);

    const toggleCheckout = () => {
        setShowPaypal((prevState) => !prevState);
    }

    return (
        <div>
            <p className={mainStyles.title}>Checkout</p>
            <div className={styles['list-wrap']}>
                <CheckoutCartItem title='Item' quantity='Quantity' />
                {cart.items.map((item) => (
                    <CheckoutCartItem 
                        key={item.title}
                        title={item.title} 
                        price={item.price} 
                        quantity={item.quantity} 
                    />
                ))}
            </div>
            <p className={mainStyles.title}>Total Price: {cart.totalPrice}</p>
            <div className={styles.wrap}>
                {!showPaypal ? <Button onClick={toggleCheckout}>Checkout</Button> : <Paypal totalAmount={cart.totalPrice} />}
            </div>
        </div>
    );
}

export default Checkout