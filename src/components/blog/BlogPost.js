import { useParams } from "react-router";
import posts from "./dummy-posts";
import mainStyles from './../main.module.css';

const BlogPost = () => {
    const params = useParams();
    const post = posts.find((post) => post.id === params.postId);

    return (
        <div>
            <p className={mainStyles.title}>{post.title}</p>
        </div>
    );
}

export default BlogPost;