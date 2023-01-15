import styles from "./css/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <p className={styles['header-text']}>Dada Chinese</p>
      <nav>
        <Link className={styles["nav-item"]} to="/">
          Home
        </Link>
        <Link className={styles["nav-item"]} to="/book-online">
          Book Online
        </Link>
        <Link className={styles["nav-item"]} to="/plans">
          Plans & Pricing
        </Link>
        <Link className={styles["nav-item"]} to="/blog">
          Blog
        </Link>
        <Link className={styles["nav-item"]} to="/members">
          Members
        </Link>
        <Link className={styles["nav-item"]} to="/policy">
          Site Policy
        </Link>
        <div className={styles.subnav}>
            <p className={styles["nav-item"]}>More</p>
            <div className={styles['subnav-content']}>
                <Link className={styles["subnav-item"]} to="/resources">
                    Resources
                </Link>
                <Link className={styles["subnav-item"]} to="/support">
                    Support
                </Link>
                <Link className={styles["subnav-item"]} to="/forum">
                    Forum
                </Link>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
