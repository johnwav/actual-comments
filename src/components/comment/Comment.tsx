import Vote from "../Vote/Vote";
import styles from "./Comment.module.css";


// interface Data  {
//   name: string
// }


const Comment = (data: string) => {
  return (
    <div className={styles.container}>
      <Vote />
      <div className={styles.commentInfo}>
        <header>
          <div>
            <div className={styles.profileImage}>
              <img src="/images/avatars/image-amyrobson.png" alt="" />
            </div>
            <div className={styles.username}>amyrobson</div>

            <div className={styles.date}>1 month ago</div>
          </div>
          <button className={styles.button}>
            <img src="/images/icon-reply.svg" alt="" />
            Reply
          </button>
        </header>
        <div className={styles.commentBody}>
          {data}
        </div>
      </div>
    </div>
  );
};

export default Comment;
