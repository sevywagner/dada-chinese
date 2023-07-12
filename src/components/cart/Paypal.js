import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router";
import { cartActions } from "../../store/redux/cart";
import { useDispatch } from "react-redux";

const Paypal = ({ totalAmount, onApprove }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createOrderHandler = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                description: 'Purchase from Dada Chinese Webstore',
                amount: {
                    value: '' + totalAmount
                }
            }]
        });
    }

    const approveHandler = (data, actions) => {
        return actions.order.capture().then((order) => {
            onApprove();
            navigate('/dada-chinese/order-confirmation');
            dispatch(cartActions.resetCart({ guest: localStorage.getItem('token') === null }));
        }).catch((err) => {
            console.log(err);
        });
    }

    const errorHandler = (error) => {
        console.log(error);
    }

    return (
        <PayPalScriptProvider options={{
            "client-id": "AcNOytnjExuv-KS5qOHxR49tPBcnhrcmbiMx1rhUqpiy7YsFFwavvM65ZsMyM6RGs7PicM8vKqQyfdrj"
        }}>
            <PayPalButtons createOrder={createOrderHandler} onApprove={approveHandler} onError={errorHandler} />
        </PayPalScriptProvider>
    );
}

export default Paypal;