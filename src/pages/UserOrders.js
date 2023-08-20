import { useLoaderData } from 'react-router';
import OrderItem from '../components/orders/OrderItem';
import styles from './css/user-orders.module.css';

const UserOrders = () => {
    const orders = useLoaderData();
    console.log(orders);

    return (
        <div className={styles.wrap}>
            {orders.map((order) => <OrderItem key={Math.random()} order={order} />)}
        </div>
    );
}

export const loader = async () => {
    const response = await fetch('https://dada-chinese-rest-api.herokuapp.com/shop/user-orders', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    });
    const data = await response.json();
    return data.orders;
}

export default UserOrders;