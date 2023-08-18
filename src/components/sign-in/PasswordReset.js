import { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Button from "../util/Button";
import styles from './../contact/css/contact-form.module.css';

const PasswordReset = () => {
    const [error, setError] = useState();
    const token = useParams().token;
    const navigate = useNavigate();

    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        let error = false;
        fetch('https://dada-chinese-rest-api.herokuapp.com/auth/change-password', {
            method: 'POST',
            body: JSON.stringify({
                password: passwordRef.current.value,
                confirmPassword: confirmPasswordRef.current.value,
                token
            }),
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
                setError(data.error);
            } else {
                console.log(data.message);
                navigate('/sign-in');
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <form onSubmit={submitHandler}>
            {error && <p style={{ textAlign: 'center' }}>{error}</p>}
            <label>Password</label>
            <input type='password' name='password' ref={passwordRef} />
            <label>Confirm Password</label>
            <input type='password' name='confirmPassword' ref={confirmPasswordRef} />
            <div className={styles.wrap}>
                <Button>Submit</Button>
            </div>
        </form>
    );
}

export default PasswordReset;