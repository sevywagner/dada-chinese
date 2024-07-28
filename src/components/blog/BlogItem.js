import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './css/blog.module.css';
import mainStyles from './../main.module.css'

const BlogItem = (props) => {
    const [result, setResult] = useState();
    const navigate = useNavigate();

    const dateStringArray = props.date.split(' ');

    const adminDeletePostHandler = () => {
        const sure = prompt('Are you sure? (yes / no)');

        if (sure === 'no' || !sure) {
            return;
        }

        fetch('https://dada-chinese-rest-api.herokuapp.com/delete-post', {
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
            navigate('/blog');
        }).catch((err) => {
            console.log(err);
            setResult(err.message);
        })
    }

    return (
        <>
            {result && <p>{result}</p>}
            <Link className={styles.link} to={props.admin ? `/edit-post/${props.id}` : `/blog-post/${props.id}`}>
                <div className={styles.item}>
                    <div className={styles.left}>
                        {/* <img src={props.imageWebContentLink} alt="blog" /> */}
                        <img src="https://drive.google.com/thumbnail?id=0B6wwyazyzml-OGQ3VUo0Z2thdmc&sz=w1000" alt="Page Image"></img>
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