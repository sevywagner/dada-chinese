import ClassItem from "../components/classes/ClassItem";
import styles from "./css/our-classes.module.css";
import classes from "../components/classes/dummy-classes";

const OurClasses = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.classes}>
        {classes.map((c) => (
          <ClassItem
            key={c.id}
            linkPath={`/dada-chinese/our-classes/${c.id}`}
            name={c.name}
            imageUrl={c.imageUrl}
            price={c.price}
          />
        ))}
      </div>
    </div>
  );
};

export default OurClasses;
