import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/util/Button";
import { cartActions } from "../store/redux/cart";

import mainStyles from './../components/main.module.css';
import styles from './css/checkout.module.css';

const OrderConfirmation = () => {
    const [hasOrdered, setHasOrdered] = useState(false);
    const [hasError, setHasError] = useState();

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const addressRef = useRef();
    const aptNumRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        
        let address = aptNumRef.current.value.trim() !== '' ? addressRef.current.value + ' Apt #: ' + aptNumRef.current.value : addressRef.current.value;
        let error = false;
        
        fetch('http://localhost:8080/shop/new-order', {
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
                fetch('http://localhost:8080/shop/order-email', {
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

                dispatch(cartActions.resetCart());
                setHasOrdered(true);
            }
        }).catch((err) => {
            setHasError(err.message);
            console.log(err);
        });
    }

    useEffect(() => {
        if (hasOrdered) {
            setTimeout(() => {
                setHasOrdered(false);
                navigate('/dada-chinese/');
            }, 5000);
        }
    }, [hasOrdered]);

    return (
        <div>
            {!hasOrdered ? <div>
                <p className={mainStyles.title}>Last Thing...</p>
                {!hasError && <p className={mainStyles.subtitle}>Please enter your Address</p>}
                {hasError && <p className={mainStyles.error}>{hasError}</p>}
                <div className={mainStyles.wrap}>
                    <form className={styles.form} onSubmit={submitHandler}>
                        <label>Address</label>
                        <input type='text' ref={addressRef} />
                        <label>Apt # (optional)</label>
                        <input type='text' ref={aptNumRef} />
                        <Button type="submit">Finish Order</Button>
                    </form>
                </div>
            </div> : <div>
                <p className={mainStyles.title}>Your order has been placed!</p>
            </div>}
        </div>
    );
}

export default OrderConfirmation;