import mainStyles from './../components/main.module.css';
import BlogList from '../components/blog/BlogList';

const Blog = () => {
    return (
        <div>
            <p className={mainStyles.title}>Blog</p>
            <BlogList />
        </div>
    );
}

export default Blog;