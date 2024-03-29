import { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useLoaderData } from "react-router";

import Button from "../../components/util/Button";
import styles from "./../css/new-blog.module.css";
import mainStyles from './../../components/main.module.css';
import formStyles from "./../../components/sign-in/css/sign-in-form.module.css";
import ImageUpload from "../../components/blog/ImageUpload";

const EditPostPage = () => {
  const [files, setFiles] = useState([null]);
  const navigate = useNavigate();
  const params = useParams();

  const titleRef = useRef();
  const contentRef = useRef();
  const videoUrlRef = useRef();

  const posts = useLoaderData();
  const targetPost = posts.find((p) => p._id === params.postId);

  const submitHandler = (event) => {
    event.preventDefault();

    let title;

    if (titleRef.current.value === "") {
      title = targetPost.title;
    } else {
      title = titleRef.current.value;
    }

    console.log(videoUrlRef.current.value);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("imageWebContentLinks", targetPost.imageWebContentLinks);
    for (const image of files) {
      formData.append('image', image);
    }
    formData.append('videoUrl', !videoUrlRef.current.value ? targetPost.videoUrl : videoUrlRef.current.value);
    formData.append("content", contentRef.current.value);
    formData.append("date", targetPost.date);
    formData.append("id", targetPost._id);

    let responseIsOk;

    fetch("https://dada-chinese-rest-api.herokuapp.com/edit-post", {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((result) => {
      if (!result.ok) {
        responseIsOk = false;
      } else {
        responseIsOk = true;
        navigate("/blog");
      }
      return result.json();
    }).then((data) => {
      if (responseIsOk) {
        console.log(data.message);
      } else {
        console.log(data.error);
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  const fileHandler = (event, num) => {
    setFiles((prevState) => {
      prevState[num - 1] = event.target.files[0];
      return prevState;
    });
  }

  const [amountOfImages, setAmountOfImages] = useState([1]);

  const addImageHandler = () => {
      setAmountOfImages((prevState) => [...prevState, prevState.length + 1]);
  }

  useEffect(() => {
      setFiles((prevState) => [...prevState, null]);
  }, [amountOfImages]);

  return (
    <div>
      <div className={styles.root}>
        <p className={mainStyles.title}>Edit Blog</p>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={formStyles.block}>
            <label>Title</label>
            <input type="text" ref={titleRef} placeholder={targetPost.title} />
          </div>
          <div className={formStyles.block}>
            <label>Image</label>
            {amountOfImages.map((num) => <ImageUpload key={num} onUpload={fileHandler} num={num} />)}
            <button type="button" onClick={addImageHandler}>Add image</button>
          </div>
          <div className={formStyles.block}>
            <label>Video Url</label>
            <input type="text" ref={videoUrlRef} />
          </div>
          <div className={formStyles.block}>
            <label>Content</label>
            <textarea
              className={styles.textarea}
              ref={contentRef}
              defaultValue={targetPost.content}
            ></textarea>
          </div>
          <div className={styles.center}>
            <Button type="submit">Add blog</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostPage;