import { useState } from "react";

const useInput = (validateData) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    let isValid = validateData(enteredValue);
    let hasError = !isValid && isTouched;

    const blurHandler = () => {
        setIsTouched(true);
    }

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }


    return {
        value: enteredValue,
        isValid,
        hasError,
        blurHandler,
        valueChangeHandler,
        reset
    }
}

export default useInput;