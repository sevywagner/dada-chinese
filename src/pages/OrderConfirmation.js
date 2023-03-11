import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/redux/cart";

import mainStyles from './../components/main.module.css';

const OrderConfirmation = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        fetch('https://dada-chinese-rest-api.herokuapp.com/shop/order-email', {
            method: 'POST',
            body: JSON.stringify({ cartItems: cart.items }),
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((result) => {
            if (!result.ok) {
                throw new Error();
            }

            return result.json();
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });

        fetch('https://dada-chinese-rest-api.herokuapp.com/shop/new-order', {
            method: 'PUT',
            body: JSON.stringify({ items: cart.items, totalPrice: cart.totalPrice }),
            headers: {
                "Content-Type": "Application/json",
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((result) => {
            if (!result.ok) {
                throw new Error();
            }

            return result.json();
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
        
        dispatch(cartActions.resetCart());
    }, []);

    return (
        <div>
            <p className={mainStyles.title}>Thank you, your order has been placed!</p>
        </div>
    );
}

export default OrderConfirmation;