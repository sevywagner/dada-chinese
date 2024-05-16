import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";

import Button from "../../components/util/Button";
import styles from "./../css/new-blog.module.css";
import formStyles from "./../../components/sign-in/css/sign-in-form.module.css";
import mainStyles from './../../components/main.module.css';
import ImageUpload from "../../components/blog/ImageUpload";

const NewBlog = () => {
  const [files, setFiles] = useState([null]);
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
    for (const image of files) {
      formData.append('image', image);
    }
    formData.append('videoUrl', videoUrlRef.current.value);
    formData.append('date', new Date().toDateString());

    let hasError = false;

    fetch("http://localhost:8080/posts", {
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
      console.log(data);
      if (hasError) {
        setError(data.error);
      } else {
        navigate('/blog');
      }
    }).catch((err) => console.log(err));
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
          {amountOfImages.map((num) => <ImageUpload key={num} onUpload={fileHandler} num={num} />)}
        </div>
        <button type="button" onClick={addImageHandler}>Add another image</button>
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