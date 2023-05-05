import Vote from "../Vote/Vote";
import styles from "./Comment.module.css";

interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

interface Props {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User
  replies?: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: User
  }
}

const Comment = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <Vote />
      <div className={styles.commentInfo}>
        <header>
          <div>
            <div className={styles.profileImage}>
              <img src={data.user.image.webp} alt="userimage" />
            </div>
            <div className={styles.username}>{data.user.username}</div>

            <div className={styles.date}>{data.createdAt}</div>
          </div>
          <button className={styles.button}>
            <img src="/images/icon-reply.svg" alt="" />
            Reply
          </button>
        </header>
        <div className={styles.commentBody}>{data.content}</div>
      </div>
    </div>
  );
};

export default Comment;
