import { useState } from 'react';
import styles from './css/qa.module.css';
import mainStyles from './../main.module.css';
import QaItem from './QaItem';

const Qa = () => {
    const [index, setIndex] = useState();

    const qa = [
        {
            q: 'How old does my child have to be to learn Chinese?',
            a: 'Children are natural language learners. They can start even before they were born. For learning at Dada Chinese, we recommend to start them from preschool, approximately 3 years old.',
        },
        {
            q: 'What does a typical class look like?',
            a: 'Each class is well designed by experienced Chinese teachers, featuring songs, children’s rhymes, jingles, fun games, classical stories, etc. We will have collaborative group activities, debating, public speaking training. Students will also gain confidence by learning Chinese culture. After class, children are more willing to express themselves clearly and effectively in Chinese.',
        },
        {
            q: 'How long does a class take?',
            a: 'Each class takes between 40-45 minutes except for one on one tutoring.',
        },
        {
            q: 'What curriculum or textbook do you use?',
            a: 'The curriculum is developed by Dada Chinese teaching experts from a variety of resources including prominent textbooks, videos, audios, physical activities and specific designed practices.',
        },
        {
            q: 'Does my child need to know Chinese before enrolling in your class?',
            a: 'We have classes for children in any level from zero knowledge to advanced Chinese proficiency.'
        }
    ];

    const questionChangeHandler = (event) => {
        setIndex(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className={styles.root}>
            <p className={mainStyles.title}>Faq</p>
            <div className={styles.items}>
                {qa.map((qAndA) => <QaItem key={qAndA.q} question={qAndA.q} answer={qAndA.a} />)}
            </div>
        </div>
    );
}

export default Qa;