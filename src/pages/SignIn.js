import mainStyles from './../components/main.module.css';
import styles from './css/sign-in.module.css';
import SignInForm from '../components/sign-in/SignInForm';

const SignIn = () => {
    return (
        <div className={styles.root}>
            <div className={styles['elevate']}>
                <p className={mainStyles.title}>Sign in</p>
                <div className={styles.form}>
                    <SignInForm />
                </div>
            </div>
        </div>
    );
}

export default SignIn;