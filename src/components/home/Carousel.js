import styles from './css/carousel.module.css';
import mainStyles from './../main.module.css';
import { useEffect, useState } from 'react';

const Carousel = () => {
    const [pic, setPic] = useState(require('./../../pictures/carousel/pic1.jpeg'));
    const [counter, setCounter] = useState(2);
    const [image, setImage] = useState(<img src={pic} />);

    useEffect(() => {
        setTimeout(() => {
            if (counter == 6) {
                setCounter(0);
            }
            setPic(require(`./../../pictures/carousel/pic${counter}.jpeg`));
            setCounter((prevState) => prevState + 1);
            setImage(<img className={styles.animate} src={pic} />);
            setImage(<img src={pic} />);
        }, 5000);
    }, [pic])
    

    return (
        <div className={styles.root}>
            <div className={styles.carousel}>
                {image}
            </div>
        </div>
    );
}

export default Carousel;