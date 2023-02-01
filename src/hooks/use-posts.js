import { useState } from "react";

const usePost = async () => {
    const [posts, setPosts] = useState();

    fetch('http://localhost:8080/posts').then((response) => {
        if (response.ok) {
            return response.json()
        }
    }).then((blog) => {
        setPosts(blog.posts);
    }).catch(err => console.log(err));

    return {
        blogPosts: posts
    }
}

export default usePost;