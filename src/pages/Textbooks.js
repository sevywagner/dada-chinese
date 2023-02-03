import TextbookItem from "../components/textbooks/TextbookItem";
import textbooks from "../components/textbooks/textbook-data";
import styles from './css/textbooks.module.css'
import mainStyles from './../components/main.module.css';

const Textbooks = () => {
  return (
    <div>
      <p className={mainStyles.title}>Textbooks</p>
      <div className={styles.books}>
        {textbooks.map((textbook) => (
          <TextbookItem
            key={textbook.id}
            id={textbook.id}
            title={textbook.title}
            description={textbook.description}
            price={textbook.price}
            imageUrl={textbook.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Textbooks;
