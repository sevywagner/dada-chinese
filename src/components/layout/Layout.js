import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Outlet />
            {children && children}
            <Footer />
        </>
    );
}

export default Layout;