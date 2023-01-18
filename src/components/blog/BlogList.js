import styles from "./css/blog.module.css";
import BlogItem from "./BlogItem";
import posts from "./dummy-posts";

const BlogList = () => {
  return (
    <div className={styles.root}>
        <div className={styles.list}>
        {posts.map((post) => (
            <BlogItem
            key={post.id}
            id={post.id}
            title={post.title}
            imageUrl={post.imageUrl}
            content={post.content}
            date={post.date}
            />
        ))}
        </div>
    </div>
  );
};

export default BlogList;