import styles from "./Replies.module.css";
import Vote from "../Vote/Vote";

const Replies = () => {
  return (
    <div className={styles.commentBox}>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <Vote score={0} />
        <div className={styles.commentInfo}>
          <header>
            <div>
              <div className={styles.profileImage}>
                <img
                  src="/images/avatars/image-ramsesmiron.webp"
                  alt="userimage"
                />
              </div>
              <div className={styles.username}>username</div>
              <div className={styles.date}>2 weeks ago</div>
            </div>

            <button
              className={styles.button}
              //   onClick={() => setToggleReply((prev) => !prev)}
            >
              <img src="/images/icon-reply.svg" alt="" />
              Reply
            </button>
          </header>
          <div className={styles.commentBody}>content</div>
        </div>
      </div>

      {/* {toggleReply && (
        <div>
          <AddComment isReply={true} />
        </div>
      )} */}
    </div>
  );
};

export default Replies;
