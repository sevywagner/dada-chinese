import { useRef } from "react";
import { useNavigate } from "react-router";

const Admin = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();

        if (usernameRef.current.value !== 'sevywagner') {
            return;
        }

        if (passwordRef.current.value === '12345678') {
            navigate('/dada-chinese/new-blog');
        } else {
            return;
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input type="text" name="username" ref={usernameRef} />
                <input type="text" name="password" ref={passwordRef} />
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default Admin;