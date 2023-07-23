import { useState } from "react";
import useInput from "../../hooks/use-input";
import Button from "../util/Button";
import Paypal from "./Paypal";
import styles from './css/credit.module.css';
import formStyles from './../contact/css/contact-form.module.css';

const Credit = () => {
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

        const response = await fetch('http://localhost:8080/shop/add-credit', {
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