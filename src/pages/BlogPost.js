import { useParams } from "react-router";
import mainStyles from "./../components/main.module.css";
import styles from './css/blog-post.module.css';
import { useLoaderData } from "react-router";

const BlogPost = () => {
  const params = useParams();

  const posts = useLoaderData();
  const targetPost = posts.find((p) => p._id === params.postId);

  return (
    <div className={styles.root}>
      <div className={styles.post}>
        <div className={styles['title-wrap']}>
          <img src={targetPost.imageWebContentLinks[0]} />
        </div>
        <div className={styles.data}>
          <p className={styles.date}>{targetPost.date}</p>
          <p>{targetPost.title}</p>
          <p className={styles.pg}>{targetPost.content}</p>
        </div>
      </div>
      {targetPost.videoUrl && <div className={styles.video}>
          <p className={styles.subtitle}>Videos</p>
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
      {targetPost.imageWebContentLinks.length > 1 && <div className={styles.images}>
        <p className={styles.subtitle}>Related Images</p>
        {targetPost.imageWebContentLinks.map((image, index) => {
          if (index == 0) {
            return;
          } else {
            return <img key={index} src={image} />
          }
        })}
      </div>}
    </div>
  );
};

export default BlogPost;
