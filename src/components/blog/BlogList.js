import { useState, useEffect } from "react";
import styles from "./css/blog.module.css";
import BlogItem from "./BlogItem";
import usePost from "../../hooks/use-posts";

const BlogList = () => {
  const [loading, setLoading] = useState(false);
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
            />
        ))}
        </div>
    </div>
  );
};

export default BlogList;