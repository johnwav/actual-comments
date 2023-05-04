import styles from "./AddComment.module.css";
const AddComment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userImage}>
        <img src="/images/avatars/image-juliusomo.webp" alt="" />
      </div>
      <textarea
        placeholder="Add a comment..."
        className={styles.input}
        name="comment"
        id=""
        cols={30}
        rows={4}
      ></textarea>
      <button className={styles.send}>SEND</button>
    </div>
  );
};

export default AddComment;
