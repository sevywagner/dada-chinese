import { useEffect, useState } from "react";
import { useParams } from "react-router";
import mainStyles from './../main.module.css';

const BlogPost = () => {
    const params = useParams();
    const [post, setPost] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8080/posts', {
            method: 'GET'
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((blog) => {
            setLoading(false);
            setPost(blog.posts.find((post) => post._id === params.postId));
        }).catch(err => console(err));
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {post && <div>
                <p className={mainStyles.title}>{post.title}</p>
                <p className={mainStyles.pg}>{post.content}</p>
            </div>}
        </div>
    );
}

export default BlogPost;