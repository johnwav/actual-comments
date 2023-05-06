import { useState } from "react";
import Vote from "../Vote/Vote";
import styles from "./Comment.module.css";
// import Replies from "../Replies/Replies";
import AddComment from "../AddComment/AddComment";
import Replies from "../Replies/Replies";

interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo?: string;
    user: User;
  }[];
}

interface Props {
  comments: Comment;
}

const Comment = ({ comments }: Props) => {
  const [toggleReply, setToggleReply] = useState(false);

  return (
    <div className={styles.commentBox}>
      <div className={styles.container}>
        <Vote score={comments.score} />
        <div className={styles.commentInfo}>
          <header>
            <div>
              <div className={styles.profileImage}>
                <img src={comments.user.image.webp} alt="userimage" />
              </div>
              <div className={styles.username}>{comments.user.username}</div>

              <div className={styles.date}>{comments.createdAt}</div>
            </div>
            <button
              className={styles.button}
              onClick={() => setToggleReply((prev) => !prev)}
            >
              <img src="/images/icon-reply.svg" alt="" />
              Reply
            </button>
          </header>
          <div className={styles.commentBody}>{comments.content}</div>
        </div>
      </div>

      <div className={styles.replies}>
        <Replies />
      </div>

      {toggleReply && (
        <div>
          <AddComment isReply={true} />
        </div>
      )}
    </div>
  );
};

export default Comment;
