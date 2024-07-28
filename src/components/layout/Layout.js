import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import styles from './css/layout.module.css';
import Action from "./Action";

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <>
            <Header />
            <div className={styles.outlet}>
                <Outlet />
                {children && children}
            </div>
            {(!location.pathname.includes('class') && location.pathname !== '/sign-up' && !location.pathname.includes('reset') && location.pathname !== '/sign-in' && location.pathname !== '/checkout' && !location.pathname.includes('order')) && <Action />}
            <Footer />
        </>
    );
}

export default Layout;