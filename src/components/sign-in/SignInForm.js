import { useRef } from "react";
import styles from "./css/sign-in-form.module.css";
import Button from "../util/Button";

const SignInForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.inputs}>
          <div className={styles.block}>
            <label>Email</label>
            <input type="text" ref={emailInputRef} placeholder="example@example.com" />
          </div>

          <div className={styles.block}>
            <label>Password</label>
            <input type="password" ref={passwordInputRef} />
          </div>
        </div>
        <Button type="submit">Log in</Button>
      </form>
    </>
  );
};

export default SignInForm;
