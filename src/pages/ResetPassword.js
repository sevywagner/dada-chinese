import mainStyles from './../components/main.module.css';
import styles from './css/reset-password.module.css';
import ResetPasswordForm from "../components/sign-in/ResetPasswordForm";
import PasswordReset from '../components/sign-in/PasswordReset';

const ResetPassword = ({ mode }) => {
    return (
        <div>
            <p className={mainStyles.title}>Forgot Password</p>
            {mode === 'email' && <div className={styles.wrap}>
                <p className={mainStyles.subtitle}>Please enter your email:</p>
                <div className={styles['form-wrap']}>
                    <ResetPasswordForm />
                </div>
            </div>}
            {mode === 'password' && <div className={styles.wrap}>
                <p className={mainStyles.subtitle}>Please enter a new password.</p>
                <div className={styles['form-wrap']}>
                    <PasswordReset />
                </div>
            </div>}
        </div>
    );
}

export default ResetPassword;