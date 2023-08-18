import { useNavigate } from "react-router";
import useInput from "../../hooks/use-input";
import Button from "../util/Button";
import styles from './css/sign-in-form.module.css';

const SignUpForm = ({ errorHandler }) => {
  const navigate = useNavigate();

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((data) => data.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((data) => data.includes("@"));

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((data) => data.trim().length >= 8);

  const {
    value: password2,
    isValid: password2IsValid,
    hasError: password2HasError,
    valueChangeHandler: password2ChangeHandler,
    blurHandler: password2BlurHandler,
    reset: resetPassword2,
  } = useInput((data) => data.trim() !== '');

  const submitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid) {
      errorHandler('Please enter a valid email');
      return;
    }

    if (!emailIsValid) {
      errorHandler('Please enter a valid email');
      return;
    }

    if (!passwordIsValid) {
      errorHandler('Please enter a valid password');
      return;
    }

    
    if (nameIsValid && emailIsValid && passwordIsValid && password2IsValid) {
      let responseIsOk;
      fetch('https://dada-chinese-rest-api.herokuapp.com/auth/signup', {
        method: 'PUT',
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword: password2
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => {
        if (!response.ok) {
          responseIsOk = false;
        } else {
          responseIsOk = true;
        }

        return response.json();
      }).then((data) => {
        if (!responseIsOk) {
          return errorHandler(data.error);
        } else {
          resetName();
          resetEmail();
          resetPassword();
          resetPassword2();
          errorHandler(null);
          navigate('/sign-in');
        }
      }).catch((err) => {
        console.log(err);
      });

    } else {
      errorHandler('Invalid Credentials');
    }
  }

  const classNames = {
    name: nameHasError ? styles.invalid : "",
    email: emailHasError ? styles.invalid : "",
    password: passwordHasError ? styles.invalid : "",
    password2: password2HasError ? styles.invalid : ""
  };

  return (
    <>
      <form onSubmit={submitHandler}>

        <label className={styles.label}>Name</label>
        <input
          className={classNames.name}
          type="text"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
          name="name"
          placeholder="Full name"
        />

        <label className={styles.label}>Email</label>
        <input
          className={classNames.email}
          type="text"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
          name="email"
          placeholder="test@test.com"
        />

        <label className={styles.label}>Set password</label>
        <input
          className={classNames.password}
          type="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={password}
          name="password"
          placeholder="Must be 8 characters and include a number"
        />

        <label className={styles.label}>Confirm password</label>
        <input
          className={classNames.password}
          type="password"
          onChange={password2ChangeHandler}
          onBlur={password2BlurHandler}
          value={password2}
          name="password2"
        />

        <Button className={styles.submit} type="submit">Submit</Button>
      </form>
    </>
  );
};

export default SignUpForm;