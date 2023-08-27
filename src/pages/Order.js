import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router';
import CheckoutCartItem from '../components/cart/CheckoutCartItem';

import styles from './css/order.module.css';
import mainStyles from './../components/main.module.css';

const Order = () => {
    const id = useParams().orderId;
    const [order, setOrder] = useState();

    useEffect(() => {
        fetch('https://dada-chinese-rest-api.herokuapp.com/shop/fetch-order', {
            method: 'POST',
            body: JSON.stringify({ orderId: id }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setOrder(data.order);
        })
    }, []);


    return (
        <>
            {order && <div className={styles.root}>
                <p className={mainStyles.title}>Order from {order.date}</p>
                <div className={styles['list-wrap']}>
                    <p className={styles.summary}>Summary</p>
                    {order.items.map((item) => (
                        <CheckoutCartItem 
                        key={item.title}
                        title={item.title} 
                        price={item.price} 
                        quantity={item.quantity} 
                        />
                        ))}
                    <div className={styles.total}>
                        <p className={styles['total__text']}>Total:</p>
                        <p className={styles['total__text']}>${order.totalPrice}</p>
                    </div>
                </div>
                {order.address && <p className={mainStyles.subtitle}>{order.address}</p>}
                <p className={mainStyles.subtitle}>{order.userEmail}</p>
            </div>}
        </>
    );
}

export default Order;