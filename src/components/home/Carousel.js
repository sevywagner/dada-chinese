import styles from './css/carousel.module.css';
import { useEffect, useState } from 'react';

const Carousel = () => {
    const [pic, setPic] = useState(require('./../../pictures/carousel/pic1.jpg'));

    useEffect(() => {
        setTimeout(() => {
            if (pic === require('./../../pictures/carousel/pic1.jpg')) {
                setPic(require('./../../pictures/carousel/pic2.jpg'));
            } else {
                setPic(require('./../../pictures/carousel/pic1.jpg'));
            }
        }, 5000);
    }, [pic])

    return (
        <div className={styles.root}>
            <img src={pic} alt='Carousel' />
        </div>
    );
}

export default Carousel;