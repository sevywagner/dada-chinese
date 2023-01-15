import { Routes, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import Book from "../pages/Book";
import Home from "../pages/Home";
import Members from "../pages/Members";
import Plans from "../pages/Plans";
import Policy from "../pages/Policy";

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/book-online' element={<Book />} />
            <Route path='/plans' element={<Plans />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/members' element={<Members />} />
            <Route path='/policy' element={<Policy />} />
        </Routes>
    );
}

export default Routing;