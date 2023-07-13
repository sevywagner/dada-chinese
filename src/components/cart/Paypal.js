import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router";
import { cartActions } from "../../store/redux/cart";
import { useDispatch } from "react-redux";

const Paypal = ({ totalAmount, onApprove }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createSubscriptionHandler = (data, actions) => {
        return actions.subscription.create({
            plan_id: 'P-4RU74068SC498771DMSXCTCY'
        });
    }

    const approveHandler = (data, actions) => {
        onApprove();
        navigate('/dada-chinese/order-confirmation');
        dispatch(cartActions.resetCart({ guest: localStorage.getItem('token') === null }));
    }

    const errorHandler = (error) => {
        console.log(error);
    }

    return (
        <PayPalScriptProvider options={{
            "client-id": "AcNOytnjExuv-KS5qOHxR49tPBcnhrcmbiMx1rhUqpiy7YsFFwavvM65ZsMyM6RGs7PicM8vKqQyfdrj"
        }}>
            <PayPalButtons createSubscription={createSubscriptionHandler} onApprove={approveHandler} onError={errorHandler} />
        </PayPalScriptProvider>
        
    );
}

export default Paypal;