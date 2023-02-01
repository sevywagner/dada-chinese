import styles from './css/blog.module.css';
import mainStyles from './../main.module.css'
import { Link } from 'react-router-dom';

const BlogItem = (props) => {
    return (
        <Link className={styles.link} to={`/dada-chinese/blog-post/${props.id}`}>
            <div className={styles.item}>
                <div className={styles.left}>
                    <img src={props.imageUrl} />
                </div>
                <div className={styles.right}>
                    <div className={styles.date}>
                        <p>{props.date}</p>
                    </div>
                    <div>
                        <p className={mainStyles.subtitle}>{props.title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BlogItem;