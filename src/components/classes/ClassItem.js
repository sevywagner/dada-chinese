import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/redux/cart';
import styles from './css/class-item.module.css';
import mainStyles from './../main.module.css';
import { PopupButton } from 'react-calendly';

const ClassItem = (props) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        if (localStorage.getItem('token')) {
            dispatch(cartActions.addItem({ id: props.id, title: props.name, price: props.price, quantity: 1 }));
        } else {
            dispatch(cartActions.addItemAsGuest({ id: props.id, title: props.name, price: props.price, quantity: 1 }));
        }
    }

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.item}>
                    <div className={styles.pic}>
                        <img src={require(`./../../pictures/classes/${props.imageUrl}`)} />
                    </div>
                    <p className={mainStyles.subtitle}>{props.name}</p>
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
                            <p className={styles.info}>
                                i
                            </p>
                            <p className={styles['info__text']}>blah blah blah</p>
                        </>}
                    </div>
                    {props.book === 'cart' && <button onClick={addToCart} className={styles.book}>Purchase 1 Month</button>}
                    <p className={styles.price}>${props.price} {props.book !== 'calendly' ? '/ month' : ' / class'}</p>
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