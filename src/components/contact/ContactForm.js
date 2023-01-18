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
    value: message,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    blurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput((data) => data.trim() !== '');

  const classNames = {
    name: nameHasError ? styles.invalid : "",
    email: emailHasError ? styles.invalid : "",
    message: messageHasError ? styles.invalid : ""
  };

  const submitHandler = (event) => {
    event.preventDefault();

  }

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

        <label className={styles.label}>Message</label>
        <textarea
          className={classNames.message}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          value={message}
          name='message'
        ></textarea>

        <div className={styles.wrap}>
          <button className={styles.submit} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;