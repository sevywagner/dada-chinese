import { useState } from 'react';
import styles from './css/qa.module.css';

const Qa = () => {
    const [index, setIndex] = useState();

    const answers = [
        'Children are natural language learners. They can start even before they were born. For learning at Dada Chinese, we recommend to start them from preschool, approximately 3 years old.',
        'Each class is well designed by experienced Chinese teachers, featuring songs, children’s rhymes, jingles, fun games, classical stories, etc. We will have collaborative group activities, debating, public speaking training. Students will also gain confidence by learning Chinese culture. After class, children are more willing to express themselves clearly and effectively in Chinese.',
        'Each class takes between 40-45 minutes except for one on one tutoring.',
        'The curriculum is developed by Dada Chinese teaching experts from a variety of resources including prominent textbooks, videos, audios, physical activities and specific designed practices.',
        'We have classes for children in any level from zero knowledge to advanced Chinese proficiency.'
    ];

    const questionChangeHandler = (event) => {
        setIndex(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className={styles.root}>
            <select className={styles.select} onChange={questionChangeHandler}>
                <option>Questions?</option>
                <option value={0}>How old does my child have to be to learn Chinese?</option>
                <option value={1}>What does a typical class look like?</option>
                <option value={2}>How long does a class take?</option>
                <option value={3}>What curriculum or textbook do you use?</option>
                <option value={4}>Does my child need to know Chinese before enrolling in your class?</option>
            </select>

            {index && <p className={styles.answer}>{answers[index]}</p>}
        </div>
    );
}

export default Qa;