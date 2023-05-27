import ClassItem from "../components/classes/ClassItem";
import styles from "./css/our-classes.module.css";
import classes from "../components/classes/dummy-classes";
import QuoteSection from "../components/home/QuoteSection";

const OurClasses = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.classes}>
          {classes.map((c) => (
            <ClassItem
              key={c.id}
              linkPath={`/dada-chinese/our-classes/${c.id}`}
              name={c.name}
              subtitles={c.subtitles}
              imageUrl={c.imageUrl}
              price={c.price}
              bulletPoints={c.bulletPoints}
            />
          ))}
        </div>
      </div>
      <QuoteSection />
    </>
  );
};

export default OurClasses;