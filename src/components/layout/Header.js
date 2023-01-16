import styles from "./css/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <p className={styles['header-text']}>Dada Chinese</p>
      <nav>
        <Link className={styles["nav-item"]} to="/dada-chinese">
          Home
        </Link>
        <div className={styles.subnav}>
          <Link className={styles["nav-item"]} to='/dada-chinese/book-online'>Book Online</Link>
          <div className={styles['subnav-content']}>
            <Link className={styles["subnav-item"]} to="/dada-chinese/plans">
              Plans & Pricing
            </Link>
          </div>
        </div>
        <Link className={styles["nav-item"]} to="/dada-chinese/blog">
          Blog
        </Link>
        <Link className={styles["nav-item"]} to="/dada-chinese/members">
          Members
        </Link>
        <Link className={styles['sign-in']} to='/dada-chinese/sign-in'>Sign in</Link>
      </nav>
    </header>
  );
};

export default Header;
