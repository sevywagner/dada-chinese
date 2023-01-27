import mainStyles from './../components/main.module.css';
import styles from './css/sign-in.module.css';
import SignInForm from '../components/sign-in/SignInForm';
import SignUpForm from '../components/sign-in/SignUpForm';

const SignIn = ({ mode }) => {

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className={styles.root}>
            <div className={styles['elevate']}>
                <p className={mainStyles.title}>Sign {mode === 'register' ? 'up' : 'in'}</p>
                {mode === 'login' && 
                    <div className={styles.form}>
                        <SignInForm onSubmit={submitHandler} />
                    </div>
                }
                {mode === 'register' &&
                    <div className={styles.form}>
                        <SignUpForm onSubmit={submitHandler} />
                    </div>
                }
            </div>
        </div>
    );
}

export default SignIn;