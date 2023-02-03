import { useParams } from "react-router";
import mainStyles from './../components/main.module.css';
import { useLoaderData } from "react-router";

const BlogPost = () => {
    const params = useParams();
    
    const posts = useLoaderData();
    const targetPost = posts.find((p) => p._id === params.postId);
    
    return (
        <div>
            <div>
                <p className={mainStyles.title}>{targetPost.title}</p>
                <p className={mainStyles.pg}>{targetPost.content}</p>
            </div>
        </div>
    );
}

export default BlogPost;