import styles from "./css/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to='/dada-chinese/'>
        <div className={styles.logo}>
          <img src={require('./../../pictures/logos/White Logo HD.png')} />
          <p className={styles['header-text']}>Dada Chinese</p>
        </div>
      </Link>
      <nav>
        <Link className={styles["nav-item"]} to="/dada-chinese">Home</Link>
        <div className={styles.subnav}>
          <Link className={styles["nav-item"]} to='/dada-chinese/our-classes'>Our Classes</Link>
          <div className={styles['subnav-content']}>
            <Link className={styles["subnav-item"]} to="/dada-chinese/plans">Plans & Pricing</Link>
            <Link className={styles["subnav-item"]} to="/dada-chinese/our-teachers">Our Teachers</Link>
          </div>
        </div>
        <Link className={styles["nav-item"]} to='/dada-chinese/contact'>Contact</Link>
        <Link className={styles["nav-item"]} to="/dada-chinese/blog">Blog</Link>
        <Link className={styles["nav-item"]} to="/dada-chinese/sign-up">Sign up</Link>
        <Link className={styles['sign-in']} to='/dada-chinese/sign-in'>Sign in</Link>
      </nav>
    </header>
  );
};

export default Header;