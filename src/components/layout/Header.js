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
        <div className={styles.subnav}>
          <Link className={styles["nav-item"]} to='/book-online'>Book Online</Link>
          <div className={styles['subnav-content']}>
            <Link className={styles["subnav-item"]} to="/plans">
              Plans & Pricing
            </Link>
          </div>
        </div>
        <Link className={styles["nav-item"]} to="/blog">
          Blog
        </Link>
        <Link className={styles["nav-item"]} to="/members">
          Members
        </Link>
        <Link className={styles['sign-in']} to='/sign-in'>Sign in</Link>
      </nav>
    </header>
  );
};

export default Header;
