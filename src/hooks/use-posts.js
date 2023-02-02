import { useState, useCallback } from "react";

const usePost = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:8080/posts');
            if (!response.ok) {
                return;
            }
            const blog = await response.json();
            setIsLoading(false);
            setPosts(blog.posts);
        } catch (err) {
            console.log(err);
        }
    }, []);

    return {
        isLoading,
        blogPosts: posts,
        fetchData
    }
}

export default usePost;