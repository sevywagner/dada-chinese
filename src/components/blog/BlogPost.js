import { useEffect } from "react";
import { useParams } from "react-router";
import mainStyles from './../main.module.css';
import usePost from "../../hooks/use-posts";

const BlogPost = () => {
    const params = useParams();
    const { isLoading, blogPosts, fetchData } = usePost();

    useEffect(() => {
        fetchData();
    }, [])

    const targetPost = blogPosts.find((p) => p._id === params.postId);
    
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {targetPost && <div>
                <p className={mainStyles.title}>{targetPost.title}</p>
                <p className={mainStyles.pg}>{targetPost.content}</p>
            </div>}
        </div>
    );
}

export default BlogPost;