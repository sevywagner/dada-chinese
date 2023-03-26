import { useLoaderData } from "react-router";

import OrderItem from "../../components/orders/OrderItem";
import mainStyles from './../../components/main.module.css';

const Orders = () => {
    const orders = useLoaderData();

    return (
        <div>
            <p className={mainStyles.title}>Orders</p>
            <div className={mainStyles.wrap}>
                {orders.map((order) => <OrderItem order={order} />)}
            </div>
        </div>
    );
};

export const loader = async () => {
    try {
        const response = await fetch('https://dada-chinese-rest-api.herokuapp.com/shop/orders', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    
        if (!response.ok) {
            throw new Error('response not ok');
        }
    
        const data = await response.json();
        return data.orders;
    } catch (err) {
        console.log(err);
    }
}

export default Orders;