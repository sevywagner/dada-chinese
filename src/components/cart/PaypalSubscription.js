import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"

const PaypalSubscription = ({ planId }) => {

    const createSubscriptionHandler = (data, actions) => {
        return actions.subscription.create({
            plan_id: planId
        });
    }

    return (
        <PayPalScriptProvider options={{
            "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
            components: "buttons",
            intent: "subscription",
            vault: true
        }}>
            <PayPalButtons createSubscription={createSubscriptionHandler} style={{ label: "subscribe" }} />
        </PayPalScriptProvider>
    )
}

export default PaypalSubscription;