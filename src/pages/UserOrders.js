import { useLoaderData } from 'react-router';
import { useState } from 'react';
import OrderItem from '../components/orders/OrderItem';
import Paginator from '../components/util/paginator/Paginator';

import styles from './css/user-orders.module.css';
import mainStyles from './../components/main.module.css'

const UserOrders = () => {
    const { orders: initialOrders, maxPage } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const [orders, setOrders] = useState(initialOrders);

    const nextHandler = async () => {
        const response = await fetch('https://dada-chinese-rest-api.herokuapp.com/shop/user-orders', {
            method: 'POST',
            body: JSON.stringify({ pageNum: currentPage + 1 }),
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        setCurrentPage((prevState) => prevState + 1);
        setOrders(data.orders);
    }
    
    const previousHandler = async () => {
        const response = await fetch('https://dada-chinese-rest-api.herokuapp.com/shop/user-orders', {
            method: 'POST',
            body: JSON.stringify({ pageNum: currentPage - 1 }),
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        setCurrentPage((prevState) => prevState - 1);
        setOrders(data.orders);
    }

    return (
        <div className={styles.wrap}>
            <p className={mainStyles.title}>My Orders</p>
            <Paginator onNext={nextHandler} onPrevious={previousHandler} currentPage={currentPage} lastPage={maxPage}>
                <div className={mainStyles.wrap}>
                    {orders.map((order) => <OrderItem key={Math.random()} order={order} />)}
                </div>
            </Paginator>
        </div>
    );
}

export const loader = async () => {
    const response = await fetch('https://dada-chinese-rest-api.herokuapp.com/shop/user-orders', {
        method: 'POST',
        body: JSON.stringify({ pageNum: 1 }),
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export default UserOrders;