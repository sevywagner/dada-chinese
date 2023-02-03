import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./layout/Layout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Members from "../pages/Members";
import OurClasses from "../pages/OurClasses";
import OurClassesDetail from "../pages/OurClassesDetail";
import OurTeachers from "../pages/OurTeachers";
import Textbooks from "../pages/Textbooks";
import Policy from "../pages/Policy";
import SignIn from "../pages/SignIn";
import Teacher from "../pages/Teacher";
import Error from "../pages/Error";
import Admin from "../pages/admin/Admin";
import NewBlog from "../pages/admin/NewBlog";

const Blog = lazy(() => import('../pages/Blog'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const EditPostPage = lazy(() => import('../pages/admin/EditPostPage'));
const AdminBlogList = lazy(() => import('../pages/admin/AdminBlogList'));

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
          path: 'textbooks',
          element: <Textbooks />
        },
        //----- blog -----
        {
          path: 'blog',
          element: <Suspense><Blog /></Suspense>,
          loader: () => import('./../pages/Blog').then(module => module.loader())
        },
        {
          path: 'blog-post/:postId',
          element: <Suspense><BlogPost /></Suspense>,
          loader: () => import('./../pages/Blog').then(module => module.loader())
        },
        {
          path: 'new-blog',
          element: <NewBlog />
        },
        {
          path: 'admin-blog',
          element: <Suspense><AdminBlogList /></Suspense>,
          loader: () => import('./../pages/Blog').then(module => module.loader())
        },
        {
          path: 'edit-post/:postId',
          element: <Suspense><EditPostPage /></Suspense>,
          loader: () => import('./../pages/Blog').then(module => module.loader())
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