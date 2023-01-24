import styles from "./css/carousel.module.css";
import mainStyles from "./../main.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Carousel = () => {
  const [pic, setPic] = useState(
    require("./../../pictures/carousel/pic1.jpeg")
  );
  const [counter, setCounter] = useState(2);

  useEffect(() => {
    setTimeout(() => {
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
    </div>
  );
};

export default Carousel;