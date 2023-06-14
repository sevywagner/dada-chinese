import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { cartActions } from "../store/redux/cart";

import CheckoutCartItem from '../components/cart/CheckoutCartItem';
import Paypal from '../components/cart/Paypal';
import Button from '../components/util/Button';
import mainStyles from './../components/main.module.css';
import styles from './css/checkout.module.css';
import formStyles from './../components/contact/css/contact-form.module.css';

const Checkout = () => {
    const [showPaypal, setShowPaypal] = useState(false);
    const [hasError, setHasError] = useState();

    const dispatch = useDispatch();

    const addressRef = useRef();
    const aptNumRef = useRef();
    const nameRef = useRef();

    const submitHandler = () => {
        let address = aptNumRef.current.value.trim() !== '' ? addressRef.current.value + ' Apt #: ' + aptNumRef.current.value : addressRef.current.value;
        let error = false;
        
        fetch('https://dada-chinese-rest-api.herokuapp.com/shop/new-order', {
            method: 'PUT',
            body: JSON.stringify({ items: cart.items, totalPrice: cart.totalPrice, address: address }),
            headers: {
                "Content-Type": "Application/json",
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((result) => {
            if (!result.ok) {
                error = true;
            }
            
            return result.json();
        }).then((data) => {
            if (error) {
                setHasError(data.error);
                return;
            } else {
                console.log(data.message);
                if (localStorage.getItem('token')) {
                    fetch('https://dada-chinese-rest-api.herokuapp.com/shop/order-email', {
                        method: 'POST',
                        body: JSON.stringify({ cartItems: cart.items }),
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then((result) => {
                        if (!result.ok) {
                            return;
                        }
            
                        return result.json();
                    }).then((data) => {
                        console.log(data);
                    }).catch((err) => {
                        console.log(err);
                    });
                }

                dispatch(cartActions.resetCartAsGuest());
            }
        }).catch((err) => {
            setHasError(err.message);
            console.log(err);
        });
    }
    const cart = useSelector((state) => state.cart);

    const toggleCheckout = () => {
        if (addressRef.current.value === '' || (!localStorage.getItem('token')) && nameRef.current.value === '') {
            return setHasError('Please fill out the entirety of the form');
        }
        setShowPaypal((prevState) => !prevState);
    }

    return (
        <div>
            <p className={mainStyles.title}>Checkout</p>
            <div className={mainStyles.wrap}>
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
            </div>
            <p className={mainStyles.title}>Last Thing...</p>
            {!hasError && <p className={mainStyles.subtitle}>Please enter your {!localStorage.getItem('token') && 'Name and'} Address</p>}
            {hasError && <p className={mainStyles.error}>{hasError}</p>}
            <div className={mainStyles.wrap}>
                <form className={styles.form}>
                    {!localStorage.getItem('token') && <>
                        <label>Name</label>
                        <input type="text" ref={nameRef} />
                    </>}
                    <label>Address</label>
                    <input type='text' ref={addressRef} />
                    <label>Apt # (optional)</label>
                    <input type='text' ref={aptNumRef} />
                </form>
            </div>
            <p className={mainStyles.title}>Total Price: ${cart.totalPrice}</p>
            <div className={styles.wrap}>
                {!showPaypal ? <Button onClick={toggleCheckout}>Checkout</Button> : <Paypal onApprove={submitHandler} totalAmount={cart.totalPrice} />}
            </div>
        </div>
    );
}

export default Checkout