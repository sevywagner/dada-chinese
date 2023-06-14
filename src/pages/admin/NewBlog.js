import { useRef, useState } from "react";
import { useNavigate } from "react-router";

import Button from "../../components/util/Button";
import styles from "./../css/new-blog.module.css";
import formStyles from "./../../components/sign-in/css/sign-in-form.module.css";
import mainStyles from './../../components/main.module.css';

const NewBlog = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const titleRef = useRef();
  const contentRef = useRef();
  const videoUrlRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', titleRef.current.value);
    formData.append('content', contentRef.current.value);
    formData.append('image', file);
    formData.append('videoUrl', videoUrlRef.current.value);
    formData.append('date', new Date().toDateString());

    let hasError = false;

    fetch("https://dada-chinese-rest-api.herokuapp.com/posts", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: 'Bearer ' +  localStorage.getItem('token')
      },
    }).then((result) => {
      if (!result.ok) {
        hasError = true;
      }

      return result.json();
    }).then((data) => {
      if (hasError) {
        setError(data.error);
      } else {
        console.log(data.message);
        navigate('/dada-chinese/blog');
      }
    }).catch((err) => console.log(err));
  };

  const fileHandler = (event) => {
    setFile(event.target.files[0]);
  }

  console.log(file);

  return (
    <div className={styles.root}>
      <p className={mainStyles.title}>New Blog Entry</p>
      <a href="https://dada-chinese-rest-api.herokuapp.com/auth/google">Authenticate yourself</a>
      {error && <p className={mainStyles.error}>{error}</p>}
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={formStyles.block}>
          <label>Title</label>
          <input type="text" ref={titleRef} />
        </div>
        <div className={formStyles.block}>
          <label>Image</label>
          <input type="file" onChange={fileHandler.bind(this)} />
        </div>
        <div className={formStyles.block}>
          <label>Video Url</label>
          <input type="text" ref={videoUrlRef} />
        </div>
        <div className={formStyles.block}>
          <label>Content</label>
          <textarea className={styles.textarea} ref={contentRef}></textarea>
        </div>
        <div className={styles.center}>
            <Button type="submit">Add blog</Button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
