import { useRef, useState } from "react";
import Button from "../util/Button";
import styles from './../contact/css/contact-form.module.css';

const ResetPasswordForm = () => {
    const [result, setResult] = useState();
    const emailRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        let error = false;

        fetch('https://dada-chinese-rest-api.herokuapp.com/auth/reset-password', {
            method: 'POST',
            body: JSON.stringify({ email: emailRef.current.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((result) => {

            if (!result.ok) {
                error = true;
            }
            return result.json();
        }).then((data) => {
            if (error) {
                setResult(data.error);
            } else {
                setResult(data.message);
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <form onSubmit={submitHandler}>
            {result && <p>{result}</p>}
            <label>Email</label>
            <input type='text' name="email" ref={emailRef} />
            <div className={styles.wrap}>
                <Button type="submit">Send Reset Link</Button>
            </div>
        </form>
    );
}

export default ResetPasswordForm;