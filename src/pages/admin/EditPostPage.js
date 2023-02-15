import { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useLoaderData } from "react-router";

import Button from "../../components/util/Button";
import styles from "./../css/new-blog.module.css";
import formStyles from "./../../components/sign-in/css/sign-in-form.module.css";

const EditPostPage = () => {
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const params = useParams();

  const titleRef = useRef();
  const contentRef = useRef();

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

    const formData = new FormData();
    formData.append("title", title);
    if (file) {
        formData.append("image", file);
    } else {
        formData.append("imageUrl", targetPost.imageUrl);
    }
    formData.append("content", contentRef.current.value);
    formData.append("date", targetPost.date);
    formData.append("id", targetPost._id);

    fetch("https://dada-chinese-rest-api.herokuapp.com/edit-post", {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((result) => {
      console.log(result);
      navigate("/dada-chinese/blog");
    });
  };

  const fileHandler = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <div className={styles.root}>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={formStyles.block}>
            <label>Title</label>
            <input type="text" ref={titleRef} placeholder={targetPost.title} />
          </div>
          <div className={formStyles.block}>
            <label>Image</label>
            <input type="file" onChange={fileHandler.bind(this)} />
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
