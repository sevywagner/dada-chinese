import TextbookItem from "../components/textbooks/TextbookItem";
import styles from './css/textbooks.module.css'
import mainStyles from './../components/main.module.css';

const Textbooks = () => {
  return (
    <div>
      <p className={mainStyles.title}>Textbooks</p>
      <div className={styles.books}>
        <TextbookItem />
      </div>
    </div>
  );
};

export default Textbooks;
