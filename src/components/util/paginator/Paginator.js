import styles from './paginator.module.css';
import mainStyles from './../../main.module.css';

const Paginator = (props) => {
    const nextArrow = (props.currentPage > 1) ? <button className={styles.control} onClick={props.onPrevious}><img src={require('./../../../pictures/icons/leftArrow.png')} /></button> : <div className={styles.control}></div>;
    const previousArrow = (props.currentPage < props.lastPage) ? <button className={styles.control} onClick={props.onNext}><img src={require('./../../../pictures/icons/rightArrow.png')} /></button> : <div className={styles.control}></div>;


    return (
        <div className={styles.root}>
            {props.children}
            <div className={styles['control__wrap']}>
                {nextArrow}
                <p>{props.currentPage} / {props.lastPage}</p>
                {previousArrow}
            </div>
        </div>
    );
}

export default Paginator;