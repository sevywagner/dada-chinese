import styles from "./css/carousel.module.css";
import mainStyles from "./../main.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Carousel = () => {
  let carouselTimer;
  const [pic, setPic] = useState(
    require("./../../pictures/carousel/pic1.jpeg")
  );
  const [counter, setCounter] = useState(2);

  const nextHandler = () => {
    if (carouselTimer) {
      clearTimeout(carouselTimer);
    }

    if (counter === 6) {
      setCounter(1);
    } else {
      setCounter((prevState) => prevState + 1);
    }

    setPic(require(`./../../pictures/carousel/pic${counter}.jpeg`));
  }

  const prevHandler = () => {

  }

  useEffect(() => {
    carouselTimer = setTimeout(() => {
      setPic(require(`./../../pictures/carousel/pic${counter}.jpeg`));
      if (counter === 6) {
        setCounter(1);
      } else {
        setCounter((prevState) => prevState + 1);
      }
    }, 5000);
  }, [pic]);

  return (
    <div className={styles.root}>
        <div className={styles.carousel}>
          <motion.div
            key={counter}
            initial={{ transform: "translateX(50vh)", opacity: 0 }}
            animate={{ transform: "translateX(0vh)", opacity: 1 }}
            exit={{ transform: "translateX(-30vh)" }}
          >
            <img src={pic} />
          </motion.div>
      </div>
      <div className={styles['control-wrap']}>
        <button className={styles.control} onClick={prevHandler}>
            <img width="40" src={require('./../../pictures/icons/leftArrow.png')} />
        </button>
        <button className={styles.control} onClick={nextHandler}>
          <img width="40" src={require('./../../pictures/icons/rightArrow.png')} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;