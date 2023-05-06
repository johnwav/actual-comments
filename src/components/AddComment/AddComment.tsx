import styles from "./AddComment.module.css";

interface Type {
  isReply: boolean;
}

const AddComment = ({isReply} : Type) => {


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
        cols={10}
        rows={3}
      ></textarea>
      <button className={styles.send}>{isReply? "REPLY" : "SEND"}</button>
    </div>
  );
};

export default AddComment;
