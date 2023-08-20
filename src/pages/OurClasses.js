import ClassItem from "../components/classes/ClassItem";
import styles from "./css/our-classes.module.css";
import mainStyles from './../components/main.module.css';
import classes from "../components/classes/dummy-classes";
import QuoteSection from "../components/home/QuoteSection";

const OurClasses = () => {
  return (
    <>
      <p className={mainStyles.title}>Our Classes</p>
      <div className={styles.wrap}>
        <div className={styles.classes}>
          {classes.map((c) => (
            <ClassItem
              key={c.id}
              id={c.id}
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
    </>
  );
};

export default OurClasses;
