import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router";
import { cartActions } from "../../store/redux/cart";
import { useDispatch } from "react-redux";

const Paypal = ({ totalAmount, onApprove }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createOrderHandler = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: 'Credit for Dada Chinese Classes or Textbooks',
                    amount: {
                        currency_code: 'USD',
                        value: parseInt(totalAmount)
                    }
                }
            ]
        }).then((order) => {
            return order;
        });
    }

    const subscriptionHandler = (actions, data) => {
        return actions.subscription.create({
            /* Creates the subscription */
            "plan-id": 'P-1NT15801DB804310BMZC22UY'
          });
    }

    const approveHandler = (data, actions) => {
        return actions.order.capture().then(() => {
            onApprove();
            navigate('/order-confirmation');
            dispatch(cartActions.resetCart({ guest: localStorage.getItem('token') === null }));
        });
    }

    const errorHandler = (error) => {
        console.log(error);
    }

    return (
        <PayPalScriptProvider options={{
            "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
            components: "buttons",
            intent: "subscription",
            vault: true
        }}>
            <PayPalButtons createSubscription={subscriptionHandler} style={{ label: "subscribe" }} />
        </PayPalScriptProvider>
    );
}

export default Paypal;