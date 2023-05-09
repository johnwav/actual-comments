import styles from "./Replies.module.css";
import Vote from "../Vote/Vote";
import { useState } from "react";
import AddReply from "../AddReply/AddReply";
import { IReply } from "../../@types/comment";
import user from "../../data.json";

interface Props {
  data?: IReply;
  key: IReply["id"];
}

const Replies = ({ data, key }: Props) => {
  const [toggleReply, setToggleReply] = useState(false);

  const closeReply = (set: boolean) => {
    setToggleReply(set);
  };

  const handleDelete = () => {};

  return (
    <div className={styles.replybox}>
      <div className={styles.commentBox}>
        <div className={styles.line}></div>
        <div className={styles.container}>
          <Vote
            score={data?.score ? data.score : 0}
            id={data?.id ? data?.id : 1}
            isreply={true}
            replies={data}
          />
          <div className={styles.commentInfo}>
            <header>
              <div>
                <div className={styles.profileImage}>
                  <img src={data?.user.image.webp} alt="userimage" />
                </div>
                <div className={styles.username}>
                  {data?.user.username}
                  {user.currentUser.username === data?.user.username && (
                    <div className={styles.you}>you</div>
                  )}
                </div>
                <div className={styles.date}>{data?.createdAt} </div>
              </div>

              <div className={styles.buttonGrp}>
                {user?.currentUser?.username === data?.user.username ? (
                  <>
                    <button
                      className={styles.dlt}
                      onClick={() => handleDelete()}
                    >
                      <img src="/images/icon-delete.svg"></img> Delete
                    </button>
                    <button className={styles.button}>
                      <img src="/images/icon-edit.svg" /> Edit
                    </button>
                  </>
                ) : (
                  <button
                    className={styles.button}
                    onClick={() => setToggleReply((prev) => !prev)}
                  >
                    Reply
                    <img src="/images/icon-reply.svg" alt="" />
                  </button>
                )}
              </div>
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
          <AddReply isReply={true} setToggleReply={closeReply} />
        </div>
      )}
    </div>
  );
};

export default Replies;
