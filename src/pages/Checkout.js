import { useRef, useState } from "react";
import { useSelector } from "react-redux";

import CheckoutCartItem from '../components/cart/CheckoutCartItem';
import Paypal from '../components/cart/Paypal';
import Button from '../components/util/Button';
import mainStyles from './../components/main.module.css';
import styles from './css/checkout.module.css';
import formStyles from './../components/contact/css/contact-form.module.css';

const Checkout = () => {
    const cart = useSelector((state) => state.cart);
    const textbook = cart.items.findIndex((item) => item.id === 't1');
    const [showPaypal, setShowPaypal] = useState(false);
    const [hasError, setHasError] = useState();
    
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
        let url = 'https://dada-chinese-rest-api.herokuapp.com/shop/new-order';
        let guestUrl = 'https://dada-chinese-rest-api.herokuapp.com/shop/new-order-guest';
        const email = emailRef.current.value || null;

        let body = JSON.stringify({ 
            items: cart.items, 
            totalPrice: cart.totalPrice
        });

        let guestBody = JSON.stringify({ 
            items: cart.items, 
            totalPrice: cart.totalPrice,
            address: address,
            name: nameRef.current.value || '',
            email: emailRef.current.value || ''
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
                url = 'https://dada-chinese-rest-api.herokuapp.com/shop/order-email';
                guestUrl = 'https://dada-chinese-rest-api.herokuapp.com/shop/order-email-guest'
                body = JSON.stringify({ cartItems: cart.items });
                guestBody = JSON.stringify({ 
                    cartItems: cart.items,
                    email: email,
                });
                console.log(data.message);
                return fetch(localStorage.getItem('token') !== null ? url : guestUrl, {
                    method: 'POST',
                    body: localStorage.getItem('token') !== null ? body : guestBody,
                    headers: localStorage.getItem('token') !== null ? headers : guestHeaders
                })
            }
        }).then(() => {

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

    return (
        <>
            <p className={mainStyles.title}>Checkout</p>
            <div className={styles.wrap}>
                <div className={styles['box-wrap']}>
                    {/* <div className={mainStyles.wrap}> */}
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
                                <p className={styles['total__text']}>${cart.totalPrice}</p>
                            </div>
                        </div>
                    {/* </div> */}
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
                            <div className={styles.wrap}>
                                {!showPaypal ? <Button>Pay</Button> : <Paypal onApprove={submitHandler} totalAmount={cart.totalPrice} />}
                            </div>
                            <div id="paypal-button-container"></div>

                            {/* {window.paypal.Buttons({
                                style: {
                                    shape: 'rect',
                                    color: 'blue',
                                    layout: 'horizontal',
                                    label: 'subscribe',
                                    tagline: true
                                },
                                createSubscription: function(data, actions) {
                                    return actions.subscription.create({
                                    'plan_id': '<Plan-id>'
                                    });
                                },
                                onApprove: function(data, actions) {
                                    alert(data.subscriptionID);
                                }
                            }).render('#paypal-button-container')} */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;