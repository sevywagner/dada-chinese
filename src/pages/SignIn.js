import mainStyles from './../components/main.module.css';
import styles from './css/sign-in.module.css';
import SignInForm from '../components/sign-in/SignInForm';
import SignUpForm from '../components/sign-in/SignUpForm';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const SignIn = ({ mode }) => {
    const location = useLocation();
    const [error, setError] = useState();

    const errorHandler = (errorMessage) => {
        setError(errorMessage);
    }

    useEffect(() => {
        setError(null);
    }, [location.pathname]);

    return (
        <div className={styles.root}>
            <div className={styles['elevate']}>
                <p className={mainStyles.title}>Sign {mode === 'register' ? 'up' : 'in'}</p>
                {error && <p>{error}</p>}
                {mode === 'login' &&
                    <>
                        <div className={styles.form}>
                            <SignInForm errorHandler={errorHandler} />
                        </div>
                        <Link className={styles.reset} to='/reset-password'>Reset Password</Link>
                    </>
                }
                {mode === 'register' &&
                    <div className={styles.form}>
                        <SignUpForm errorHandler={errorHandler} />
                    </div>
                }
            </div>
        </div>
    );
}

export default SignIn;