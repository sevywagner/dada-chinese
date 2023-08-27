import { useState } from "react";
import { useLoaderData } from "react-router";

import OrderItem from "../../components/orders/OrderItem";
import Paginator from "../../components/util/paginator/Paginator";

import mainStyles from './../../components/main.module.css';

const Orders = () => {
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
        <div>
            <p className={mainStyles.title}>Orders</p>
            <div className={mainStyles.wrap}>
                <Paginator currentPage={currentPage} lastPage={maxPage} onPrevious={previousHandler} onNext={nextHandler}>
                    <div className={mainStyles.wrap}>
                        {orders.map((order) => <OrderItem key={order._id} order={order} />)}
                    </div>
                </Paginator>
            </div>
        </div>
    );
};

export const loader = async () => {
    try {
        const response = await fetch('https://dada-chinese-rest-api.herokuapp.com/shop/orders', {
            method: 'POST',
            body: JSON.stringify({ pageNum: 1 }),
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        });
    
        if (!response.ok) {
            throw new Error('response not ok');
        }
    
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export default Orders;