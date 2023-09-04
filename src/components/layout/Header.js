import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
  const cart = useSelector((state) => state.cart);

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
    if (localStorage.getItem('token')) {
      const tokenIsValid = authCtx.getTokenValidity();
      if (!tokenIsValid) {
        authCtx.logoutHandler();
      }
    } else {
      authCtx.logoutHandler();
    }
  }, [location.pathname]);

  return (
    <>
      <header className={styles.header}>
        <Link to='/'>
          <div className={styles.logo}>
            <img src={require('./../../pictures/logos/White Logo HD.png')} />
            <p className={styles['header-text']}>Dada Chinese</p>
          </div>
        </Link>
        <nav>
          <Link className={styles["nav-item"]} to="/">Home</Link>
          <div className={styles.subnav}>
            <Link className={styles["nav-item"]} to='/our-classes'>Our Classes</Link>
            <div className={styles['subnav-content']}>
              <Link className={styles["subnav-item"]} to='/our-classes'>Classes</Link>
              <Link className={styles["subnav-item"]} to="/our-teachers">Our Teachers</Link>
              <Link className={styles["subnav-item"]} to="/textbooks">Textbooks</Link>
            </div>
          </div>
          <Link className={styles["nav-item"]} to='/contact'>Contact</Link>
          <Link className={styles["nav-item"]} to="/blog">Blog</Link>
          {!authCtx.isLoggedIn && <Link className={styles["nav-item"]} to="/sign-up">Sign up</Link>}
          {!authCtx.isLoggedIn && <Link className={styles['sign-in']} to='/sign-in'>Sign in</Link>}
          {authCtx.isLoggedIn && <Link className={styles['nav-item']} to='/my-orders'>My Orders</Link>}
          {authCtx.isLoggedIn && <button onClick={logoutHandler} className={styles['sign-in']}>Logout</button>}
          <div className={styles['cart-wrap']}>
            <button onClick={cartToggle} className={styles.cart}>
              <img src={require('../../pictures/icons/cart.png')} />
            </button>
          </div>
        </nav>
        {cart.totalQuantity !== 0 && <div onClick={cartToggle} className={styles.quantity}>
          <p>{cart.totalQuantity}</p>
        </div>}
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
          <div className={styles['mobile-drawer-top']}>
            <button className={styles['in-nav-more']} onClick={drawerHandler}>
              <img height="100" src={require('./../../pictures/icons/more.png')} />
            </button>
            <div className={styles.centered}>
              <img src={require('./../../pictures/logos/White Logo with Text Vertical.png')} />
            </div>
            {cart.totalQuantity !== 0 && <div onClick={cartToggle} className={styles.quantity}>
              <p>{cart.totalQuantity}</p>
            </div>}
            <button onClick={cartToggle} className={styles.cart}>
              <img src={require('../../pictures/icons/cart.png')} />
            </button>
          </div>
          <Link className={styles["nav-item"]} to="/">Home</Link>
          <Link className={styles["nav-item"]} to='/our-classes'>Our Classes</Link>
          <Link className={styles["nav-item"]} to="/textbooks">Textbooks</Link>
          <Link className={styles["nav-item"]} to="/our-teachers">Our Teachers</Link>
          <Link className={styles["nav-item"]} to='/contact'>Contact</Link>
          <Link className={styles["nav-item"]} to="/blog">Blog</Link>
          {!authCtx.isLoggedIn && <Link className={styles["nav-item"]} to="/sign-up">Sign up</Link>}
          {!authCtx.isLoggedIn && <Link className={styles['nav-item']} to='/sign-in'>Sign in</Link>}
          {authCtx.isLoggedIn && <Link className={styles['nav-item']} to='/my-orders'>My Orders</Link>}
          {localStorage.getItem('token') && <div className={styles.wrap}>
            <button onClick={logoutHandler} className={styles['mobile-logout']}>Logout</button>
          </div>}
        </motion.nav>}
      </header>
      {showCart && <CartModal onClose={cartToggle} />}
    </>
  );
};

export default Header;