import { Routes, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import Book from "../pages/Book";
import Home from "../pages/Home";
import Members from "../pages/Members";
import Plans from "../pages/Plans";
import Policy from "../pages/Policy";
import SignIn from "../pages/SignIn";

const Routing = () => {
    return (
        <Routes>
            <Route path='/dada-chinese/' element={<Home />} />
            <Route path='/dada-chinese/book-online' element={<Book />} />
            <Route path='/dada-chinese/plans' element={<Plans />} />
            <Route path='/dada-chinese/blog' element={<Blog />} />
            <Route path='/dada-chinese/members' element={<Members />} />
            <Route path='/dada-chinese/policy' element={<Policy />} />
            <Route path="/dada-chinese/sign-in" element={<SignIn />} />
        </Routes>
    );
}

export default Routing;