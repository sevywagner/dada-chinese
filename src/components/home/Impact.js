import mainStyles from './../main.module.css';
import styles from './css/impact.module.css';

const Impact = () => {
    return (
        <div className={styles.root}>
            <div className={mainStyles['half-width-block']}>
                <div className={styles.left}>
                    <div>
                        <div className={mainStyles.wrap}>
                            <div className={styles.wrap}>
                                <img src={require('./../../pictures/icons/person.png')} />
                                <p className={mainStyles.subtitle}>Go at Your Own Pace</p>
                            </div>
                            <div className={styles.wrap}>
                                <img src={require('./../../pictures/icons/ribbon.png')} />
                                <p className={mainStyles.subtitle}>Achieve Personal Goals</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={mainStyles.wrap}>
                            <div className={styles.wrap}>
                                <img src={require('./../../pictures/icons/check.png')} />
                                <p className={mainStyles.subtitle}>Improve Performance</p>
                            </div>
                            <div className={styles.wrap}>
                                <img src={require('./../../pictures/icons/person.png')} />
                                <p className={mainStyles.subtitle}>Go at Your Own Pace</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={mainStyles['half-width-block']}>
                <div className={styles['image-wrap']}>
                    <img src={require('./../../pictures/download.jpeg')} />
                </div>
            </div>
        </div>
    );
}

export default Impact;