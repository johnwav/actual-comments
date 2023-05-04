import styles from "./Comment.module.css";

const Comment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.voteContainer}></div>
      <div className={styles.commentInfo}>
        <header></header>
        <div className={styles.commentBody}></div>
      </div>
    </div>
  );
};

export default Comment;
