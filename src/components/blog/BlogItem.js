import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './css/blog.module.css';
import mainStyles from './../main.module.css'

const BlogItem = (props) => {
    const [result, setResult] = useState();
    const [file, setFile] = useState();
    const navigate = useNavigate();

    const dateStringArray = props.date.split(' ');

    const adminDeletePostHandler = () => {
        const sure = prompt('Are you sure? (yes / no)');

        if (sure === 'no' || !sure) {
            return;
        }

        fetch('http://localhost:8080/delete-post', {
            method: 'DELETE',
            body: JSON.stringify({ postId: props.id }),
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((data) => {
            navigate('/dada-chinese/blog');
        }).catch((err) => {
            console.log(err);
            setResult(err.message);
        })
    }

    return (
        <>
            {result && <p>{result}</p>}
            <Link className={styles.link} to={props.admin ? `/dada-chinese/edit-post/${props.id}` : `/dada-chinese/blog-post/${props.id}`}>
                <div className={styles.item}>
                    <div className={styles.left}>
                        <img src={props.imageWebContentLink} alt="blog" />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.date}>
                            <p>{dateStringArray[1]} {dateStringArray[2]} {dateStringArray[3]}</p>
                        </div>
                        <div>
                            <p className={mainStyles.subtitle}>{props.title}</p>
                        </div>
                    </div>
                </div>
            </Link>
            {props.admin && <div className={styles.delete}>
                <button className={styles['delete-button']} onClick={adminDeletePostHandler}>
                    Delete Post
                </button>
            </div>}
        </>
    );
}

export default BlogItem;