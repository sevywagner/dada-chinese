import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
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

const router = createBrowserRouter([
    {
      path: '/dada-chinese',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'plans',
          element: <Plans />
        },
        //----- blog -----
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'blog-post/:postId',
          element: <BlogPost />
        },
        {
          path: 'new-blog',
          element: <NewBlog />
        },
        {
          path: 'admin-blog',
          element: <AdminBlogList />
        },
        {
          path: 'edit-post/:postId',
          element: <EditPostPage />
        },
        {
          path: 'admin',
          element: <Admin />
        },
        // ...
        {
          path: 'members',
          element: <Members />
        },
        {
          path: 'policy',
          element: <Policy />
        },
        //----- Sign in/up -----
        {
          path: 'sign-in',
          element: <SignIn mode='login' />
        },
        {
          path: 'sign-up',
          element: <SignIn mode='register' />
        },
  
        {
          path: 'our-classes',
          element: <OurClasses />
        },
        {
          path: 'our-classes/:classId',
          element: <OurClassesDetail />
        },
        //----- Teachers -----
        {
          path: 'our-teachers',
          element: <OurTeachers />
        },
        {
          path: 'our-teachers/:teacherName',
          element: <Teacher />
        }
      ]
    },
    {
      path: '/',
      errorElement: <Error />,
    }
]);

export default router;