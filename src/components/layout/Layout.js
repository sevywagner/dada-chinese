import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import styles from './css/layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={styles.outlet}>
                <Outlet />
                {children && children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;