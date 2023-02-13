import { useState } from "react";
import useInput from "../../hooks/use-input";
import Button from "../util/Button";
import styles from './css/sign-in-form.module.css';

const SignUpForm = ({ onSubmit }) => {
  const [error, setError] = useState({
    hasError: false,
    message: ''
  });
  
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
  } = useInput(
    (data) =>
      data.trim().length >= 8 &&
      (data.includes("!") ||
        data.includes("@") ||
        data.includes(".") ||
        data.includes("/") ||
        data.includes("(") ||
        data.includes(")"))
  );

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

    if (nameIsValid && emailIsValid && passwordIsValid && password2IsValid) {
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
          throw new Error('Response error');
        }
        return response.json();
      }).then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });

      resetName();
      resetEmail();
      resetPassword();
      resetPassword2();
    } else {
      setError({
        hasError: true,
        message: 'Invalid input'
      });
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
      {error.hasError && <p>{error.message}</p>}
      <form onSubmit={submitHandler}>

        <label className={styles.label}>Name</label>
        <input
          className={classNames.name}
          type="text"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
          name="name"
        />

        <label className={styles.label}>Email</label>
        <input
          className={classNames.email}
          type="text"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
          name="email"
        />

        <label className={styles.label}>Set password</label>
        <input
          className={classNames.password}
          type="text"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={password}
          name="password"
        />

        <label className={styles.label}>Confirm password</label>
        <input
          className={classNames.password}
          type="text"
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