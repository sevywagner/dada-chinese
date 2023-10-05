import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import formStyles from './../../components/contact/css/contact-form.module.css';
import Button from "../../components/util/Button";

const UpdateClassTimes = () => {
    const classes = useLoaderData();
    
    const [amountOfTimes, setAmountOfTimes] = useState([1]);
    const [times, setTimes] = useState(['']);
    const [classItem, setClassItem] = useState(classes[0]);
    const [result, setResult] = useState();

    const addTimeHandler = () => {
        setAmountOfTimes((prevState) => [...prevState, prevState.length + 1]);
    }

    const inputChangeHandler = (num, event) => {
        setTimes((prevState) => {
            prevState[num] = event.target.value;
            return prevState;
        });
    }

    const optionChangeHandler = (event) => {
        setClassItem(classes.find((c) => c._id === event.target.value));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let error = false;
        fetch('https://dada-chinese-rest-api.herokuapp.com/class-times/update-class-times', {
            method: 'POST',
            body: JSON.stringify({
                id: classItem._id,
                name: classItem.className,
                classTimes: times.filter((time) => time !== ''),
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((response) => {
            if (!response.ok) {
                error = true;
            }
            return response.json();
        }).then((data) => {
            setResult(error ? data.error : data.message);
        }).catch((err) => {
            setResult(err.message);
        });
    }

    useEffect(() => {
        setTimes((prevState) => [...prevState, '']);
    }, [amountOfTimes]);

    return (
        <>
            {result && <p>{result}</p>}
            <div className={formStyles.wrap}>
                <form className={formStyles['small-form']} onSubmit={submitHandler}>
                    <select onChange={optionChangeHandler}>
                        {classes.map((classItem) => <option value={classItem._id} key={classItem._id}>{classItem.className}</option>)}
                    </select>
                    {amountOfTimes.map((num) => <input key={num} onChange={inputChangeHandler.bind(null, [num])} />)}
                    <Button type="button" onClick={addTimeHandler}>Add a time</Button>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </>
    );
}

export const loader = async () => {
    try {
        const response = await fetch('https://dada-chinese-rest-api.herokuapp.com/class-times/get-class-times');
        const data = await response.json();
        data.classTimes.pop();
        return data.classTimes;
    } catch(err) {
        console.log(err);
    }
}

export default UpdateClassTimes;