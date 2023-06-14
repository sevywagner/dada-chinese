import { useEffect } from "react";
import { useNavigate } from "react-router";

import mainStyles from './../components/main.module.css';

const OrderConfirmation = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/dada-chinese/');
        }, 5000);
    }, [navigate]);

    return (
        <div>
            <p className={mainStyles.title}>Your order has been placed!</p>
        </div>
    );
}

export default OrderConfirmation;