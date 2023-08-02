import { useState } from "react";
import useInput from "../../hooks/use-input";
import Button from "../util/Button";
import Paypal from "./Paypal";
import { useDispatch } from "react-redux";
import styles from './css/credit.module.css';
import formStyles from './../contact/css/contact-form.module.css';
import { cartActions } from "../../store/redux/cart";

const Credit = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const {
        value: amount,
        isValid: amountIsValid,
        hasError: amountHasError,
        blurHandler: amountBlurHandler,
        valueChangeHandler: amountChangeHandler,
        reset: amountReset
    } = useInput((value) => Number.isInteger(parseInt(value)));

    const submitHandler = async () => {
        if (!amountIsValid) {
            return;
        }

        const response = await fetch('https://dada-chinese-rest-api.herokuapp.com/shop/add-credit', {
            method: 'POST',
            body: JSON.stringify({ credit: amount }),
            headers: {
                Authorization: 'bearer ' + localStorage.getItem('token'),
                'Content-Type': 'Application/json'
            }
        });

        const data = await response.json();

        amountReset();

        console.log(data);
        dispatch(cartActions.updateCredit(parseInt(amount)));
    }

    const toggleHandler = () => {
        if (!show && !amountIsValid) {
            return;
        }
        setShow((prevState) => !prevState);
    }

    const textBoxStyle = amountHasError ? styles.error : styles.text;

    return (
        <div className={styles.root}>
            <p className={styles.title}>Add Credit</p>
            <div className={styles.form} onSubmit={submitHandler}>
                {!show ? <input 
                    className={textBoxStyle}
                    placeholder="Enter Amount"
                    type="text" 
                    onChange={amountChangeHandler} 
                    onBlur={amountBlurHandler}
                    value={amount} 
                /> : <p>${amount} Credit</p>}
                <Button onClick={toggleHandler} className={styles.button}>{show ? 'Change amount' : 'Pay Now'}</Button>
                {show && <Paypal totalAmount={amount} onApprove={submitHandler} />}
            </div>
        </div>
    );
}

export default Credit;