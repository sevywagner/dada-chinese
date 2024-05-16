import { Link } from "react-router-dom";
import styles from "./css/footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.socials}>
          <a className={styles["footer-item"]} href="https://www.facebook.com/profile.php?id=61555402481266/">
            <img
              width="70"
              src={require("./../../pictures/icons/facebook.png")}
            />
          </a>
          <a className={styles["小红书"]} href="https://www.xiaohongshu.com/user/profile/5f2e167a0000000001003a13?xhsshare=CopyLink&appuid=5f2e167a0000000001003a13&apptime=1694792564">
            <img width="70" src={require("./../../pictures/icons/小红书.jpeg")} />
          </a>
          <a className={styles["footer-item"]} href="https://www.instagram.com/dadachineseofficial/">
            <img
              width="70"
              src={require("./../../pictures/icons/instagram.png")}
            />
          </a>
        </div>
        <p className={styles['foot-note']}>&copy; Dada Chinese - <a href='https://www.freeprivacypolicy.com/live/a8cceb12-6ee8-4b25-b741-58c16c605472'>Privacy Policy</a></p>
      </footer>
    </>
  );
};

export default Footer;
