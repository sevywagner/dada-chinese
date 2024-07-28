import ClassItem from "../components/classes/ClassItem";
import styles from "./css/our-classes.module.css";
import mainStyles from './../components/main.module.css';
import classes from "../components/classes/dummy-classes";
import QuoteSection from "../components/home/QuoteSection";
import { useEffect } from "react";
import { useLocation } from "react-router";

const OurClasses = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className={styles.root}>
      <p className={mainStyles.title}>Our Classes</p>
      <div className={styles.wrap}>
        <div className={styles.classes}>
          {classes.map((c) => (
            <ClassItem
              key={c.id}
              id={c.id}
              mongoId={c.mongoId}
              linkPath={`/our-classes/${c.id}`}
              name={c.name}
              subtitles={c.subtitles}
              imageUrl={c.imageUrl}
              price={c.price}
              bulletPoints={c.bulletPoints}
              book={c.book}
            />
          ))}
        </div>
      </div>
      <QuoteSection />
    </div>
  );
};

export default OurClasses;
