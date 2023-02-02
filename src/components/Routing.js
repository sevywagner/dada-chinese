import { Routes, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Members from "../pages/Members";
import OurClasses from "../pages/OurClasses";
import OurClassesDetail from "../pages/OurClassesDetail";
import OurTeachers from "../pages/OurTeachers";
import Plans from "../pages/Plans";
import Policy from "../pages/Policy";
import SignIn from "../pages/SignIn";
import Teacher from "../pages/Teacher";
import BlogPost from "./blog/BlogPost";
import Error from "../pages/Error";
import Admin from "../pages/admin/Admin";
import NewBlog from "../pages/admin/NewBlog";
import AdminBlogList from "../pages/admin/AdminBlogList";
import EditPostPage from "../pages/admin/EditPostPage";

const Routing = () => {
    return (
        <Routes>
            <Route path='/dada-chinese/' element={<Home />} />
            <Route path='/dada-chinese/contact' element={<Contact />} />
            <Route path='/dada-chinese/plans' element={<Plans />} />

            <Route path='/dada-chinese/blog' element={<Blog />} />
            <Route path='/dada-chinese/blog-post/:postId' element={<BlogPost />} />
            <Route path='/dada-chinese/new-blog' element={<NewBlog />} />
            <Route path='/dada-chinese/admin-blog' element={<AdminBlogList />} />
            <Route path='/dada-chinese/edit-post/:postId' element={<EditPostPage />} />

            <Route path='/dada-chinese/members' element={<Members />} />
            <Route path='/dada-chinese/policy' element={<Policy />} />

            <Route path='/dada-chinese/sign-in' element={<SignIn mode='login' />} />
            <Route path='/dada-chinese/sign-up' element={<SignIn mode='register' />} />

            <Route path='/dada-chinese/our-classes' element={<OurClasses />} />
            <Route path='/dada-chinese/our-classes/:classId' element={<OurClassesDetail />} />

            <Route path='/dada-chinese/our-teachers' element={<OurTeachers />} />
            <Route path='/dada-chinese/our-teachers/:teacherName' element={<Teacher />} />

            <Route path='/dada-chinese/admin' element={<Admin />} />

            <Route path='/*' element={<Error />} />
        </Routes>
    );
}

export default Routing;