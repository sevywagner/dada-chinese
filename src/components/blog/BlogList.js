import { useState, useEffect } from "react";
import styles from "./css/blog.module.css";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8080/posts', {
        method: 'GET'
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
    }).then((blogs) => {
      setLoading(false);
      setBlogPosts(blogs.posts)
    }).catch(err => console(err));
  }, []);

  return (
    <div className={styles.root}>
        <div className={styles.list}>
        {loading && <p>Loading...</p>}
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