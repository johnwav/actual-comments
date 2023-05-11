import styles from "./Replies.module.css";
import Vote from "../Vote/Vote";
import { useState } from "react";
import AddReply from "../AddReply/AddReply";
import { IComments, IReply } from "../../@types/comment";
import user from "../../data.json";
import { useContext } from "react";
import { CommentsContext } from "../../Context/Comments";

interface Props {
  data?: IReply | undefined;
  id: IReply["id"];
  edit: (id: IReply["id"] | undefined) => void;
}

const Replies = ({ data, id, edit }: Props) => {
  const source = useContext(CommentsContext);
  const [toggleReply, setToggleReply] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);

  const closeReply = (set: boolean) => {
    setToggleReply(set);
  };

  const handleDelete = () => {
    source?.setComments((prev: IComments[]) => {
      if (prev) {
        const Updatedcomments = prev.filter((comment) => {
          const updatedReplies = comment.replies.filter(
            (reply) => reply.id !== id
          );
          comment.replies = updatedReplies;
          return comment;
        });
        return Updatedcomments;
      }
    });
  };

  const handleEdit = () => {
    setToggleEdit(true);
    edit(data?.id);
  };

  return (
    <div className={styles.replybox}>
      <div className={styles.commentBox}>
        {toggleEdit ? (
          <AddReply
            id={data?.id}
            data={data}
            isReply={true}
            isEdit={true}
            setToggleReply={closeReply}
          />
        ) : (
          <>
            <div className={styles.line}></div>
            <div className={styles.container}>
              <Vote
                score={data?.score ? data.score : 0}
                id={data?.id ? data?.id : 1}
                isreply={true}
                replies={data}
                disabled={false}
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
                        <button
                          onClick={() => handleEdit()}
                          className={styles.button}
                        >
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
          </>
        )}
      </div>

      {toggleReply && (
        <div>
          <AddReply
            id={data?.id}
            data={data}
            isReply={true}
            setToggleReply={closeReply}
            isEdit={false}
          />
        </div>
      )}
    </div>
  );
};

export default Replies;
