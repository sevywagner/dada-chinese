import styles from './order-item.module.css';

const OrderItem = ({ order }) => {
    return (
        <div className={styles.item}>
            <p className={styles.name}>{order.name}</p>
            <p>{order.address}</p>
            <p>{order.userEmail}</p>
            <p>Order:</p>
            {order.items.map((item) => <div>
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
            </div>)}
            <p>Total Price: {order.totalPrice}</p>
        </div>
    );
}

export default OrderItem;