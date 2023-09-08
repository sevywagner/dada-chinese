import ReactDOM from 'react-dom';
import styles from './css/class-times.module.css';
import Button from '../util/Button';

const Modal = ({ classTimes, onAddToCart, onBack }) => {
    return (
        <div className={styles.root}>
            <div className={styles.list}>
                <p className={styles.title}>Available times</p>
                {classTimes.map((classTime) => (
                    <button 
                        className={styles.button}
                        key={classTime} 
                        onClick={onAddToCart.bind(null, classTime)}
                    >
                            {classTime}
                    </button>
                ))}
                <div className={styles['back-wrap']}>
                    <Button onClick={onBack}>Back</Button>
                </div>
            </div>
        </div>
    );
}

const Overlay = () => {
    return (
        <div className={styles.overlay}></div>
    );
}

const ClassTimeModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Modal classTimes={props.classTimes} onAddToCart={props.onAddToCart} onBack={props.onBack} />, document.getElementById('modal-root'))}
            {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay-root'))}
        </>
    );
}

export default ClassTimeModal;