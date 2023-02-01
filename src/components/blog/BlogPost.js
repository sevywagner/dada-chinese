import { useEffect, useState } from "react";
import { useParams } from "react-router";
import mainStyles from './../main.module.css';

const BlogPost = () => {
    const params = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        fetch('http://localhost:8080/posts', {
            method: 'GET'
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((blog) => {
            setPost(blog.posts.find((post) => post._id === params.postId));
        }).catch(err => console(err));
    }, []);

    return (
        <div>
            {post && <p className={mainStyles.title}>{post.title}</p>}
        </div>
    );
}

export default BlogPost;