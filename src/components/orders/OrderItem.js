import styles from './order-item.module.css';
import { Link } from 'react-router-dom';

const OrderItem = ({ order }) => {
    return (
        <div className={styles.item}>
            <Link to={`/orders/${order._id}`}>
                <p className={styles.name}>{order.name}</p>
                <p>${order.totalPrice}</p>
                <p>{order.date}</p>
            </Link>
        </div>
    );
}

export default OrderItem;