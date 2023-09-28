import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/redux/cart';
import styles from './css/class-item.module.css';
import mainStyles from './../main.module.css';
import { PopupButton } from 'react-calendly';
import { useEffect, useState } from 'react';
import ClassTimeModal from './ClassTimeModal';

const ClassItem = (props) => {
    const dispatch = useDispatch();
    const [classTime, setClassTime] = useState();
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal((prevState) => !prevState);
    }

    const addToCartHandler = (time) => {
        dispatch(cartActions.addItem({ id: props.id, title: props.name, price: props.price, time, quantity: 1 }));
        toggleShowModal();
    }

    useEffect(() => {
        const getClassTimes = async () => {
            const response = await fetch('https://dada-chinese-rest-api.herokuapp.com/class-times/get-class-times');
            if (!response.ok) {
                alert("We're currently expiriencing some technincal difficulties. Please refresh the page.");
            }
            const data = await response.json();
            setClassTime(data.classTimes.find((classTime) => classTime._id === props.mongoId));
        }
        getClassTimes();
    }, [])

    return (
        <>
            {showModal && <ClassTimeModal classTimes={classTime.classTimes} onAddToCart={addToCartHandler} onBack={toggleShowModal} />}
            <div className={styles.wrap}>
                <div className={styles.item}>
                    <div className={styles.pic}>
                        <img src={require(`./../../pictures/classes/${props.imageUrl}`)} />
                    </div>
                    <p className={mainStyles.subtitle}>{props.name}
                    </p>
                    <div className={mainStyles.wrap}>
                        {props.book === 'calendly' && <PopupButton 
                            className={styles.book} 
                            text='Book a Class' 
                            url='https://calendly.com/bettywangjy/60min?month=2023-05' 
                            rootElement={document.getElementById('root')}
                            prefill={{
                                customAnswers: {
                                    a1: props.name
                                }
                            }}
                        />}
                        {props.book === 'calendly' && <>
                            <div className={styles['info__wrap']}>
                                <p className={styles.info}>
                                    i
                                </p>
                                <p className={styles['info__text']}>
                                    The price of an one-on-one class is determined by
                                    the level, location and frequency of the class. We will discuss during the free trial lesson. Please
                                    provide any information that might be helpful for the initial class.
                                </p>
                            </div>
                        </>}
                    </div>
                    {props.book === 'cart' && <button onClick={toggleShowModal} className={styles.book}>Add to Cart</button>}
                    <p className={styles.price}>${props.price} {props.book !== 'calendly' ? '/ month' : ' / class'}</p>
                    {/* {classTime && classTime.classTimes.map((classTime) => <p key={Math.random()}>{classTime}</p>)} */}
                    {props.book === 'cart' && <p className={styles['four-classes']}>(4 classes)</p>}
                    {props.subtitles.map((subtitle) => <p className={styles.subtitle} key={Math.random()}>{subtitle}</p>)}
                    <div className={styles.line}><hr /></div>
                    <div className={styles.data}>
                        {props.bulletPoints.map((bullet) => <li key={Math.random()}><img src={require('./../../pictures/icons/checkCircle.png')} />{bullet}</li>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClassItem;