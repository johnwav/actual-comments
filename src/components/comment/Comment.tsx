import { useState } from "react";
import Vote from "../Vote/Vote";
import styles from "./Comment.module.css";
import AddComment from "../AddComment/AddComment";
import Replies from "../Replies/Replies";
import { IComments } from "../../@types/comment";

interface Props {
  comments: IComments;
  id: IComments["id"];
}

const Comment = ({ comments, id }: Props) => {
  const [toggleReply, setToggleReply] = useState(false);

  const closeReply = (set: boolean) => {
    setToggleReply(set);
  };

  const edit = () => {};

  return (
    <div className={styles.commentBox}>
      <div className={styles.container}>
        <Vote
          score={comments.score}
          id={id}
          isreply={false}
          replies={undefined}
          disabled={false}
        />
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
      {toggleReply && (
        <div>
          <AddComment setToggleReply={closeReply} id={id} isReply={true} />
        </div>
      )}

      {comments.replies
        ?.sort((a, b) => b.score - a.score)
        .map((reply) => (
          <div className={styles.replies}>
            <Replies edit={edit} id={reply.id} data={reply} />
          </div>
        ))}
    </div>
  );
};

export default Comment;
