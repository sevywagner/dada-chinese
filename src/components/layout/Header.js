import { useState, useEffect, ReactDOM } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./css/header.module.css";
import { motion } from "framer-motion";
import CartModal from "../cart/CartModal";
import { useContext } from "react";
import { authContext } from "../../store/context/auth-context";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const authCtx = useContext(authContext);
  const location = useLocation();

  const drawerHandler = () => {
    setShowNav((prevState) => !prevState);
  }

  const cartToggle = () => {
    setShowCart((prevState) => !prevState);
  }

  const logoutHandler = () => {
    authCtx.logoutHandler();
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
              <Link className={styles["subnav-item"]} to="/dada-chinese/our-teachers">Our Teachers</Link>
              <Link className={styles["subnav-item"]} to="/dada-chinese/textbooks">Textbooks</Link>
              <Link className={styles["subnav-item"]} to="/dada-chinese/faq">FAQ</Link>
            </div>
          </div>
          <Link className={styles["nav-item"]} to='/dada-chinese/contact'>Contact</Link>
          <Link className={styles["nav-item"]} to="/dada-chinese/blog">Blog</Link>
          {!authCtx.isLoggedIn && <Link className={styles["nav-item"]} to="/dada-chinese/sign-up">Sign up</Link>}
          {!authCtx.isLoggedIn && <Link className={styles['sign-in']} to='/dada-chinese/sign-in'>Sign in</Link>}
          {authCtx.isLoggedIn && <button onClick={logoutHandler} className={styles['sign-in']}>Logout</button>}
          {localStorage.getItem('token') && <button onClick={cartToggle} className={styles.cart}>
            <img src={require('../../pictures/icons/cart.png')} />
          </button>}
        </nav>
      </header>


      <header className={styles['mobile-header']}>
        <div className={styles.centered}>
          <button className={styles.more} onClick={drawerHandler}>
            <img height="100" src={require('./../../pictures/icons/more.png')} />
          </button>
          <img src={require('./../../pictures/logos/White Logo with Text Vertical.png')} />
        </div>
        {showNav && <motion.nav
          className={styles['mobile-nav']}
          initial={{transform: 'translateX(-50vh)'}}
          animate={{transform: 'translateX(0vh)'}}
          exit={{transform: 'translateX(-50vh)'}}
        >
          <button className={styles['in-nav-more']} onClick={drawerHandler}>
            <img height="100" src={require('./../../pictures/icons/more.png')} />
          </button>
          <Link className={styles["nav-item"]} to="/dada-chinese">Home</Link>
          <Link className={styles["nav-item"]} to='/dada-chinese/our-classes'>Our Classes</Link>
          <Link className={styles["nav-item"]} to="/dada-chinese/textbooks">Textbooks</Link>
          <Link className={styles["nav-item"]} to="/dada-chinese/our-teachers">Our Teachers</Link>
          <Link className={styles["nav-item"]} to='/dada-chinese/contact'>Contact</Link>
          <Link className={styles["nav-item"]} to="/dada-chinese/blog">Blog</Link>
          <Link className={styles["nav-item"]} to="/dada-chinese/sign-up">Sign up</Link>
          <Link className={styles["nav-item"]} to='/dada-chinese/sign-in'>Sign in</Link>
        </motion.nav>}
      </header>
      {showCart && <CartModal onClose={cartToggle} />}
    </>
  );
};

export default Header;