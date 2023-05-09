import styles from "./AddReply.module.css";

interface Props {
  setToggleReply: (toggle: boolean) => void;
  isReply: boolean
}

const AddReply = ({ setToggleReply, isReply }: Props) => {
  return (
    <div className={styles.replybox}>
      <div className={styles.commentBox}>
        <div className={styles.line}></div>
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
          <button onClick={() => setToggleReply(false)} className={styles.send}>
            REPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReply;
