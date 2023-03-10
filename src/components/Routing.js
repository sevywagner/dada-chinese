import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./layout/Layout";
import Members from "../pages/Members";
import OurClasses from "../pages/OurClasses";
import OurClassesDetail from "../pages/OurClassesDetail";
import OurTeachers from "../pages/OurTeachers";
import Textbooks from "../pages/Textbooks";
import Policy from "../pages/Policy";
import Teacher from "../pages/Teacher";
import Error from "../pages/Error";
import Admin from "../pages/admin/Admin";
import FAQ from "../pages/FAQ";
import ResetPassword from "../pages/ResetPassword";
import Checkout from "../pages/Checkout";
import OrderConfirmation from "../pages/OrderConfirmation";

const Home = lazy(() => import('../pages/Home'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const EditPostPage = lazy(() => import('../pages/admin/EditPostPage'));
const AdminBlogList = lazy(() => import('../pages/admin/AdminBlogList'));
const NewBlog = lazy(() => import('../pages/admin/NewBlog'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Contact = lazy(() => import('../pages/Contact'));

const router = createBrowserRouter([
    {
      path: '/dada-chinese',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Suspense><Home /></Suspense>
        },
        {
          path: 'contact',
          element: <Suspense><Contact /></Suspense>
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
          element: <Suspense><NewBlog /></Suspense>
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
          element: <Suspense><SignIn mode='login' /></Suspense>
        },
        {
          path: 'sign-up',
          element: <Suspense><SignIn mode='register' /></Suspense>
        },
        {
          path: 'reset-password',
          element: <ResetPassword mode="email" />,
        },
        {
          path: 'reset-password/:token',
          element: <ResetPassword mode="password" />
        },
        //------ Classes ------
        {
          path: 'our-classes',
          element: <OurClasses />
        },
        {
          path: 'our-classes/:classId',
          element: <OurClassesDetail />
        },
        {
          path: 'faq',
          element: <FAQ />
        },
        //----- Teachers -----
        {
          path: 'our-teachers',
          element: <OurTeachers />
        },
        {
          path: 'our-teachers/:teacherName',
          element: <Teacher />
        },
        //----- Cart -----
        {
          path: 'checkout',
          element: <Checkout />
        },
        {
          path: 'order-confirmation',
          element: <OrderConfirmation />
        }
      ]
    },
    {
      path: '/',
      errorElement: <Error />,
    }
]);

export default router;