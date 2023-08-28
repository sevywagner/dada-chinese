import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const UpdateClassTimes = () => {
    const classes = useLoaderData();
    
    const [amountOfTimes, setAmountOfTimes] = useState([1]);
    const [times, setTimes] = useState(['']);
    const [classItem, setClassItem] = useState(classes[0]);

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

    const submitHandler = () => {
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
            return response.json();
        }).then((data) => console.log(data)).catch((err) => {

        });
    }

    useEffect(() => {
        const newTimes = times;
        newTimes.push('');
        setTimes(newTimes);
    }, [amountOfTimes])

    return (
        <div>
            <select onChange={optionChangeHandler}>
                {classes.map((classItem) => <option value={classItem._id} key={classItem._id}>{classItem.className}</option>)}
            </select>
            {amountOfTimes.map((num) => <input key={num} onChange={inputChangeHandler.bind(null, [num])} />)}
            <button onClick={addTimeHandler}>Add a time</button>
            <button onClick={submitHandler}>Submit</button>
        </div>
    );
}

export const loader = async () => {
    try {
        const response = await fetch('https://dada-chinese-rest-api.herokuapp.com/class-times/get-class-times');
        const data = await response.json();
        return data.classTimes;
    } catch(err) {
        console.log(err);
    }
}

export default UpdateClassTimes;