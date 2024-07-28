import { useRef, useState } from "react";
import { useContext } from "react";
import { authContext } from "../../store/context/auth-context";
import { useNavigate } from "react-router";
import styles from "./css/sign-in-form.module.css";
import Button from "../util/Button";

const SignInForm = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const authCtx = useContext(authContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    let responseIsOk;
    //s://dada-chinese-rest-api.herokuapp.com
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value
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

      return response.json()
    }).then((data) => {
      if (!responseIsOk) {
        return setError(data.error);
      }
      authCtx.loginHandler(data.token, data.expiration);
      navigate('/');
    }).catch((err) => {
      console.log(err.message);
    })
  }

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        {error && <p>{error}</p>}
        <div className={styles.inputs}>
          <div className={styles.block}>
            <label>Email</label>
            <input type="text" ref={emailInputRef} />
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