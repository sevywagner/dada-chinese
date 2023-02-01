import { useState, useEffect } from "react";
import styles from "./css/blog.module.css";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/posts', {
        method: 'GET'
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
    }).then((blogs) => {
        setBlogPosts(blogs.posts)
    }).catch(err => console(err));
  }, []);

  return (
    <div className={styles.root}>
        <div className={styles.list}>
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