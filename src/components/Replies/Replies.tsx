import styles from "./Replies.module.css";
import Vote from "../Vote/Vote";
import { useState } from "react";
import AddReply from "../AddReply/AddReply";
import { IReply } from "../../@types/comment";

interface Props {
  data?: IReply;
}

const Replies = ({ data }: Props) => {
  const [toggleReply, setToggleReply] = useState(false);
  return (
    <div className={styles.replybox}>
      <div className={styles.commentBox}>
        <div className={styles.line}></div>
        <div className={styles.container}>
          <Vote score={data?.score ? data.score : 0} />
          <div className={styles.commentInfo}>
            <header>
              <div>
                <div className={styles.profileImage}>
                  <img src={data?.user.image.webp} alt="userimage" />
                </div>
                <div className={styles.username}>{data?.user.username}</div>
                <div className={styles.date}>{data?.createdAt} </div>
              </div>

              <button
                className={styles.button}
                onClick={() => setToggleReply((prev) => !prev)}
              >
                <img src="/images/icon-reply.svg" alt="" />
                Reply
              </button>
            </header>
            <div className={styles.commentBody}>
              <span>@{data?.replyingTo} </span>
              {data?.content}
            </div>
          </div>
        </div>
      </div>

      {toggleReply && (
        <div>
          <AddReply />
        </div>
      )}
    </div>
  );
};

export default Replies;
