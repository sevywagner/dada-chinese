import { useEffect, useRef, useState } from "react";
import Button from "../components/util/Button";
import styles from "./css/new-blog.module.css";
import formStyles from "./../components/sign-in/css/sign-in-form.module.css";

const NewBlog = () => {
  const titleRef = useRef();
  const contentRef = useRef();
  const imageUrlRef = useRef();
  const dateRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify({
        title: titleRef.current.value,
        content: contentRef.current.value,
        imageUrl: imageUrlRef.current.value,
        date: new Date(dateRef.current.value).toDateString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.root}>
      <form onSubmit={submitHandler}>
        <div className={formStyles.block}>
          <label>Title</label>
          <input type="text" ref={titleRef} />
        </div>
        <div className={formStyles.block}>
          <label>Image URL</label>
          <input type="text" ref={imageUrlRef} />
        </div>
        <div className={formStyles.block}>
          <label>Date</label>
          <input type="date" ref={dateRef} />
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
