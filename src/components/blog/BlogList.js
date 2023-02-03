import styles from "./css/blog.module.css";
import BlogItem from "./BlogItem";

const BlogList = ({ posts }) => {
  return (
    <div className={styles.root}>
        <div className={styles.list}>
        {posts && posts.map((post) => (
            <BlogItem
              key={post._id}
              id={post._id}
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