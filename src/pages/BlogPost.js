import { useParams } from "react-router";
import mainStyles from "./../components/main.module.css";
import styles from './css/blog-post.module.css';
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
        {!targetPost.videoUrl && <div className={styles.video}>
            <div className={styles['video-padding']}>
                <iframe
                    width="560"
                    height="315"
                    src={targetPost.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>}
      </div>
    </div>
  );
};

export default BlogPost;
