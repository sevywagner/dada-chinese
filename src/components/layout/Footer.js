import { Link } from "react-router-dom";
import styles from "./css/footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.socials}>
          <a className={styles["footer-item"]} href="https://twitter.com">
            <img width="70" src={require("./../../pictures/icons/twitter.png")} />
          </a>
          <a className={styles["footer-item"]} href="https://facebook.com">
            <img
              width="70"
              src={require("./../../pictures/icons/facebook.png")}
            />
          </a>
          <a className={styles["footer-item"]} href="https://instagram.com">
            <img
              width="70"
              src={require("./../../pictures/icons/instagram.png")}
            />
          </a>
        </div>
        <p className={styles['foot-note']}>&copy; Dada Chinese - <Link to='/dada-chinese/policy'>Privacy Policy</Link></p>
      </footer>
    </>
  );
};

export default Footer;
