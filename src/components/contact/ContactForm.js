import { useRef, useState } from "react";
import useInput from "../../hooks/use-input";
import styles from "./css/contact-form.module.css";
import mainStyles from './../main.module.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const [hasSent, setHasSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [error, setError] = useState();

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

    if (!nameIsValid) {
      return setError('Please enter a valid name');
    } else if (!emailIsValid) {
      return setError('Please enter a valid email');
    } else if (!messageIsValid) {
      return setError('Please enter a valid message');
    }

    if (nameIsValid && emailIsValid && messageIsValid) {
      fetch('https://dada-chinese-rest-api.herokuapp.com/contact/contact-form', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => {
        if (!response.ok) {
          setError("Error please try again later");
        }
        return response.json();
      }).then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setHasSent(true);
        }
      });
    }
  }

  return (
    <>
      {hasSent && <p className={mainStyles.subtitle}>Sent, we will get back to you shortly</p>}
      {sendError && <p className={mainStyles.error}>Error</p>}
      {error && <p className={mainStyles.error}>{error}</p>}
      <div className={styles.wrap}>
        <form className={styles.contact} onSubmit={submitHandler} ref={formRef}>

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
    </>
  );
};

export default ContactForm;