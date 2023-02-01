import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./css/header.module.css";
import { motion } from "framer-motion";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  const drawerHandler = () => {
    setShowNav((prevState) => !prevState);
  }

  useEffect(() => {
    setShowNav(false);
  }, [location.pathname]);

  return (
    <>
      <header className={styles.header}>
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


      <header className={styles['mobile-header']}>
        <button className={styles.more} onClick={drawerHandler}>
          <img src={require('./../../pictures/icons/more.png')} />
        </button>
        <p className={styles['header-text']}>Dada Chinese</p>
        {showNav && <motion.nav
          className={styles['mobile-nav']}
          initial={{transform: 'translateX(-50vh)'}}
          animate={{transform: 'translateX(0vh)'}}
          exit={{transform: 'translateX(-50vh)'}}
        >
          <button className={styles['more']} onClick={drawerHandler}>
            <img src={require('./../../pictures/icons/more.png')} />
          </button>
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
          <Link className={styles["nav-item"]} to='/dada-chinese/sign-in'>Sign in</Link>
        </motion.nav>}
      </header>
    </>
  );
};

export default Header;