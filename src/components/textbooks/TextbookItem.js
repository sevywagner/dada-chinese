import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/redux/cart';
import styles from './css/textbook-item.module.css';
import { useContext, useState } from 'react';
import { authContext } from '../../store/context/auth-context';

const TextbookItem = () => {
    const [showText, setShowText] = useState(false);
    const dispatch = useDispatch();
    const authCtx = useContext(authContext);
    const cart = useSelector((state) => state.cart);
    const existingItem = cart.items.find((item) => item.id === 't1');

    const addToCartHandler = () => {
        if (localStorage.getItem('token')) {
            dispatch(cartActions.addItem({
                id: 't1',
                title: 'Mastering Chinese Vol. 1',
                price: 45.00,
                quantity: 1
            }));
        } else {
            dispatch(cartActions.addItemAsGuest({
                id: 't1',
                title: 'Mastering Chinese Vol. 1',
                price: 45.00,
                quantity: 1
            }));
        }
    }

    const textToggle = () => {
        setShowText((prevState) => !prevState);
    }

    return (
        <>
            <div className={styles.root}>
                <div className={styles.image}>
                    <img className={styles.one} src={require('./../../pictures/textbooks/会通封面1.jpeg')} />
                    <img className={styles.two} src={require('./../../pictures/textbooks/会通封面2.jpeg')} />
                </div>
                <div className={styles.data}>
                    <p className={styles.title}>Mastering Chinese Vol. 1</p>
                    {showText && <p className={styles.text}>
                        Mastering Chinese is one of the most prestigious Chinese language textbooks. This set of
                        textbooks is suitable for undergraduate and graduate students whose second language is
                        Chinese, as well as adult learners who have a strong interest in Chinese.
                        The materials contain a large number of diverse, interesting, and practical exercises and tasks
                        that are closely related to daily life. At the same time, the materials are accompanied by audio
                        and visual resources, which relieve teachers from the pressure of heavy lesson preparation. The
                        user experience is highly valued, and the opinions of international students were widely
                        collected. It has undergone more than three rounds of testing, with some parts of the
                        beginner&#39;s level even undergoing six rounds. Its main features are:
                        (1) adopting a three-in-one teaching model of &quot;function, situation, and task&quot; that uses a large
                        number of communication scenarios, pictures, and communicative tasks to bridge the gap
                        between simulated language use in class and real-life language use outside the classroom;
                        (2) using the textbook design of &quot;reading and writing lead, listening and speaking expand, and
                        comprehensive coordination&quot;;
                        (3) using the strengthening training method of &quot;learning and practicing simultaneously,
                        emphasizing precision and practicing more&quot;;
                        (4) using a teaching system that focuses on multiple levels of words, phrases, and sentences,
                        and values the teaching of morphemes with strong word-building ability, as well as the teaching
                        of chunks and discourse;
                        (5) using a textbook arrangement method that is closely aligned with the classroom and
                        responsive to the teaching pace, leading and following the entire process of classroom
                        &quot;teaching&quot; and &quot;learning&quot;, and meeting various needs of classroom teaching;
                        (6) equipped with a large amount of teaching content and materials that meet the needs of
                        students and teachers, providing great convenience for student learning and teacher
                        instruction.
                        这套教材适合第二语言为汉语的本科生、研究生以及对中文有浓厚兴趣的成人学生。
                        整套教材装帧精美，图文并茂。教学资源丰富。教材设计了大量形式多样、趣味性强、贴
                        近生活的练习和任务，同时配有音像资源，将一线教师从繁重的备课压力中解放出来。充
                        分尊重用户体验，广泛听取留学生意见，试用了3轮以上，初级部分甚至达到6轮。它的
                        主要特色是：（1）采用“功能·情景·任务”三位一体的汉语教学模式，借助大量交际情景、
                        图片和交际任务的设计，拉近课堂内语言仿真应用与课堂外语言真实应用的距离；（2）
                        采用“《读写》引领，《听说》拓展，全面配合”的教材设计；（3）采用“即学即练、精讲
                        多练”的强化训练方式；（4）采用语词句章多层次兼顾的教学体系，除传统的词汇教学和
                        句子教学外，重视构词能力强的语素的教学，重视语块教学和篇章教学；（5）采用“紧密
                        贴合课堂，与教学节奏相应”的教材编排方式，引领、跟进课堂“教”与“学”的全过程，满足

                        课堂教学的各种需求；（6）配备了大量切合需要、完整齐备的教学内容和材料，为学生
                        学习和教师教学提供了极大的方便。
                    </p>}
                    <p>$45.00</p>
                    <button onClick={textToggle} className={styles.more}>More Info</button>
                    <button className={styles.add} onClick={addToCartHandler}>Add to Cart</button>
                    {existingItem && localStorage.getItem('token') && <p>{existingItem.quantity} in cart</p>}
                </div>
            </div>
        </>
    );
}

export default TextbookItem;