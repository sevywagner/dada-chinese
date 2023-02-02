import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import usePost from "../../hooks/use-posts";

import Button from "../../components/util/Button";
import styles from "./../css/new-blog.module.css";
import formStyles from "./../../components/sign-in/css/sign-in-form.module.css";

const EditPostPage = () => {
    const titleRef = useRef();
    const contentRef = useRef();
    const imageUrlRef = useRef();
    const navigate = useNavigate();
    
    const params = useParams();
    const { isLoading, blogPosts, fetchData } = usePost();
    
    const targetPost = blogPosts.find((p) => p._id === params.postId);
    
    const submitHandler = (event) => {
        event.preventDefault();

        let title;
        let imageUrl;

        if (titleRef.current.value === '') {
            title = targetPost.title;
        } else {
            title = titleRef.current.value;
        }
        
        if (imageUrlRef.current.value === '') {
            imageUrl = targetPost.imageUrl;
        } else {
            imageUrl = imageUrlRef.current.value;
        }

        fetch('http://localhost:8080/edit-post', {
            method: 'POST',
            body: JSON.stringify({
                title,
                imageUrl,
                content: contentRef.current.value,
                date: targetPost.date,
                id: targetPost._id
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((result) => {
            console.log(result);
            navigate('/dada-chinese/blog');
        });
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {targetPost && (
                <div className={styles.root}>
                    <form onSubmit={submitHandler}>
                        <div className={formStyles.block}>
                            <label>Title</label>
                            <input type="text" ref={titleRef} placeholder={targetPost.title} />
                        </div>
                        <div className={formStyles.block}>
                            <label>Image URL</label>
                            <input type="text" ref={imageUrlRef} placeholder={targetPost.imageUrl} />
                        </div>
                        <div className={formStyles.block}>
                            <label>Content</label>
                            <textarea className={styles.textarea} ref={contentRef} defaultValue={targetPost.content}></textarea>
                        </div>
                        <div className={styles.center}>
                            <Button type="submit">Add blog</Button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default EditPostPage;