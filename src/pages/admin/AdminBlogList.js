import styles from './../../components/blog/css/blog.module.css';
import usePost from '../../hooks/use-posts';
import BlogItem from '../../components/blog/BlogItem';
import { useEffect } from 'react';

const EditBlog = () => {
    const { isLoading, blogPosts, fetchData } = usePost();

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={styles.root}>
            <div className={styles.list}>
            {isLoading && <p>Loading...</p>}
            {blogPosts && blogPosts.map((post) => (
                <BlogItem
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    imageUrl={post.imageUrl}
                    content={post.content}
                    date={post.date}
                    admin={true}
                />
            ))}
            </div>
        </div>
    );
}

export default EditBlog;