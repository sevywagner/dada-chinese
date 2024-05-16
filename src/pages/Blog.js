import mainStyles from './../components/main.module.css';
import BlogList from '../components/blog/BlogList';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogPosts = useLoaderData().reverse();
    console.log(blogPosts);

    return (
        <div>
            <p className={mainStyles.title}>Blog</p>
            <p className={mainStyles.subtitle}>Blog coming soon!</p>
            {/* <BlogList posts={blogPosts} /> */}
        </div>
    );
}

export default Blog;

export const loader = async () => {
    try {
        const response = await fetch('https://dada-chinese-rest-api.herokuapp.com/posts');
        if (!response.ok) {
            return;
        }
        const blog = await response.json();
        return blog.posts;
    } catch (err) {
        console.log(err);
    }
}