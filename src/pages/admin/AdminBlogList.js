import { useLoaderData } from 'react-router';

import mainStyles from './../../components/main.module.css';
import styles from './../../components/blog/css/blog.module.css';
import BlogItem from '../../components/blog/BlogItem';

const EditBlog = () => {
    const posts = useLoaderData();

    return (
        <>
            <p className={mainStyles.title}>Edit Blog Entry</p>
            <div className={mainStyles.wrap}>
                <a className={styles.auth} href="https://dada-chinese-rest-api.herokuapp.com/auth/google">Authenticate yourself</a>
            </div>
            <div className={styles.root}>
                <div className={styles.list}>
                {posts.map((post) => (
                    <BlogItem
                        key={post._id}
                        id={post._id}
                        title={post.title}
                        imageWebContentLink={post.imageWebContentLink}
                        content={post.content}
                        date={post.date}
                        admin={true}
                    />
                ))}
                </div>
            </div>
        </>
    );
}

export default EditBlog;