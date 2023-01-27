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
        <p>&copy; Dada Chinese</p>
      </footer>
    </>
  );
};

export default Footer;
