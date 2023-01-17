import { useEffect, useState } from "react";
import useInput from "../../hooks/use-input";
import styles from "./css/sign-in-form.module.css";

const SignUpForm = () => {
  const [error, setError] = useState({
    hasError: false,
    errorMessage: "",
  });

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    blurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: resetName,
  } = useInput((data) => data.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    blurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput((data) => data.includes("@"));

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (nameIsValid) {
    } else {
      setError({
        hasError: true,
        errorMessage: "Name must be longer than 0 characters",
      });
    }

    resetName();
    resetEmail();
  };
  
  let classNames = {
    name: nameHasError ? styles.invalid : "",
    email: emailHasError ? styles.invalid : "",
  };


  return (
    <>
      {error.hasError && <p>{error.errorMessage}</p>}
      <form onSubmit={formSubmitHandler}>
        <div className={styles.inputs}>
          <label>Name</label>
          <input
            className={classNames.name}
            type="text"
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
            value={name}
          />

          <label>Email</label>
          <input
            className={classNames.email}
            type="text"
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            value={email}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default SignUpForm;