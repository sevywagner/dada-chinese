import { useState } from "react";
import useInput from "../../hooks/use-input";
import styles from "./css/contact-form.module.css";

const ContactForm = () => {
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
  } = useInput((data) => data === password);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const classNames = {
    name: nameHasError ? styles.invalid : "",
    email: emailHasError ? styles.invalid : "",
    password: passwordHasError ? styles.invalid : "",
    password2: password2HasError ? styles.invalid : ""
  };

  return (
    <div className={styles.wrap}>
      <form className={styles.contact} onSubmit={submitHandler}>

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

        <div className={styles.wrap}>
          <button className={styles.submit} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;