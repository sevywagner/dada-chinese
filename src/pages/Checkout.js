import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import CheckoutCartItem from '../components/cart/CheckoutCartItem';
import Paypal from '../components/cart/Paypal';
import Button from '../components/util/Button';
import { cartActions } from "../store/redux/cart";
import mainStyles from './../components/main.module.css';
import styles from './css/checkout.module.css';
import formStyles from './../components/contact/css/contact-form.module.css';

const Checkout = () => {
    const cart = useSelector((state) => state.cart);

    const [showPaypal, setShowPaypal] = useState(false);
    const [hasError, setHasError] = useState();
    const [usingCredit, setUsingCredit] = useState(false);
    const [totalPrice, setTotalPrice] = useState(cart.totalPrice);

    const textbook = cart.items.findIndex((item) => item.id === 't1');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const addressRef = useRef();
    const aptNumRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    
    const submitHandler = () => {
        let address = '';
        if (textbook !== -1) {
            address = aptNumRef.current.value.trim() !== '' ? addressRef.current.value + ' Apt #: ' + aptNumRef.current.value : addressRef.current.value;
        }
        let error = false;
        let url = 'http://localhost:8080/shop/new-order';
        let guestUrl = 'http://localhost:8080/shop/new-order-guest';
        let email = null;
        if (!localStorage.getItem('token')) {
            email = emailRef.current.value;
        }

        let body = JSON.stringify({ 
            items: cart.items, 
            totalPrice: cart.totalPrice
        });

        let guestBody = JSON.stringify({ 
            items: cart.items, 
            totalPrice: cart.totalPrice,
            address: address,
            name: !localStorage.getItem('token') ? nameRef.current.value : '',
            email: !localStorage.getItem('token') ? emailRef.current.value : '',
        });

        const headers = {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
        
        const guestHeaders = {
            "Content-Type": "application/json"
        }
        
        fetch(localStorage.getItem('token') !== null ? url : guestUrl, {
            method: 'PUT',
            body: localStorage.getItem('token') !== null ? body : guestBody,
            headers: localStorage.getItem('token') !== null ? headers : guestHeaders
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
                url = 'http://localhost:8080/shop/order-email';
                guestUrl = 'http://localhost:8080/shop/order-email-guest'
                body = JSON.stringify({ cartItems: cart.items });
                guestBody = JSON.stringify({ 
                    cartItems: cart.items,
                    email: email,
                });
                console.log(data.message);
                fetch(localStorage.getItem('token') !== null ? url : guestUrl, {
                    method: 'POST',
                    body: localStorage.getItem('token') !== null ? body : guestBody,
                    headers: localStorage.getItem('token') !== null ? headers : guestHeaders
                }).then().catch();
            }
        }).then(() => {
            if (usingCredit) {
                fetch('http://localhost:8080/shop/use-credit', {
                    method: 'POST',
                    body: JSON.stringify({ creditUsed: cart.totalPrice - cart.creditPrice }),
                    headers: {
                        'Content-Type': 'Application/json',
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log(data);
                    navigate('/dada-chinese/order-confirmation');
                    dispatch(cartActions.resetCart({ guest: localStorage.getItem('token') === null }));
                }).catch((err) => {
                    setHasError(err.message);
                    console.log(err);
                })
            }
        }).catch((err) => {
            setHasError(err.message);
            console.log(err);
        });
    }


    const toggleCheckout = (event) => {
        event.preventDefault();

        if ((textbook !== -1 && addressRef.current.value.trim() === '') || (!localStorage.getItem('token')) && (nameRef.current.value.trim() === '' || emailRef.current.value.trim() === '')) {
            return setHasError('Please fill out the entirety of the form');
        }
        setShowPaypal((prevState) => !prevState);
    }

    const creditHandler = () => {
        setUsingCredit((prevState) => !prevState);
    }

    useEffect(() => {
        if (usingCredit) {
            setTotalPrice(cart.creditPrice);
        } else {
            setTotalPrice(cart.totalPrice);
        }
    }, [usingCredit]);

    useEffect(() => {
        setTotalPrice(cart.totalPrice);
    }, [cart.totalPrice]);

    return (
        <>
            <p className={mainStyles.title}>Checkout</p>
            <div className={styles.wrap}>
                <div className={styles['box-wrap']}>
                    <div className={styles['list-wrap']}>
                        <p className={styles.summary}>Summary</p>
                        {cart.items.map((item) => (
                            <CheckoutCartItem 
                                key={item.title}
                                title={item.title} 
                                price={item.price} 
                                quantity={item.quantity} 
                            />
                        ))}
                        <div className={styles.total}>
                            <p className={styles['total__text']}>Total:</p>
                            <p className={styles['total__text']}>${totalPrice}</p>
                        </div>
                    </div>
                    <div className={styles.section}>
                        {hasError && <p className={mainStyles.error}>{hasError}</p>}
                        <form className={styles.form} onSubmit={toggleCheckout}>
                            {!localStorage.getItem('token') && <>
                                <p className={styles.subtitle}>Basic Info</p>

                                <fieldset>
                                    <legend>Name</legend>
                                    <input name="name" className={styles.input} type="text" ref={nameRef} />
                                </fieldset>

                                <fieldset>
                                    <legend>Email</legend>
                                    <input name="email" className={styles.input} type="text" ref={emailRef} />
                                </fieldset>
                            </>}
                            {textbook !== -1 && <>
                                <p className={styles.subtitle}>Shipping Info</p>

                                <fieldset>
                                    <legend>Address</legend>
                                    <input name="address" className={styles.input} type='text' ref={addressRef} />
                                </fieldset>

                                <fieldset>
                                    <legend>Apt # (optional)</legend>
                                    <input type='text' className={styles.input} ref={aptNumRef} />
                                </fieldset>
                            </>}
                            {(localStorage.getItem('token') && textbook === -1) && <p className={mainStyles.title}>Thank you for choosing Dada Chinese!</p>}
                            <button onClick={creditHandler}>{usingCredit ? 'Don\'t u' : 'U'}se Credit</button>
                            <div className={styles.wrap}>
                                {!showPaypal ? <Button onClick={toggleCheckout}>Pay</Button> : totalPrice !== 0 && <Paypal onApprove={submitHandler} totalAmount={totalPrice} />}
                                {totalPrice === 0 && <Button onClick={submitHandler}>Continue</Button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;