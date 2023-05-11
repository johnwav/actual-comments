import { useState } from "react";
import { IComments, IReply } from "../../@types/comment";
import styles from "./AddReply.module.css";
import user from "../../data.json";
import { CommentsContext } from "../../Context/Comments";
import { useContext } from "react";
import Vote from "../Vote/Vote";

interface Props {
  setToggleReply: (toggle: boolean) => void;
  setToggleEdit: (toggle: boolean) => void;
  isReply: boolean;
  isEdit: boolean;
  id: IReply["id"] | undefined;
  data: IReply | undefined;
}

const AddReply = ({ setToggleReply, id, data, isEdit, setToggleEdit }: Props) => {
  const source = useContext(CommentsContext);
  const [inputContent, setInputContent] = useState("");
  const [inputEditContent, setInputEditContent] = useState(data?.content);

  const handleReply = () => {
    const foundComment = source?.comments.find((comment: IComments) => {
      return comment.replies.find((reply: IReply) => {
        return reply.id === id;
      });
    });
    const newReply: IReply = {
      id: Math.floor(Math.random() * 10000) + 1,
      content: inputContent,
      createdAt: "now",
      score: 1,
      user: user.currentUser,
      replyingTo: data?.user.username,
    };

    if (foundComment) {
      const updatedReplies = [...foundComment.replies, newReply];
      const updatedComment = { ...foundComment, replies: updatedReplies };
      source?.setComments((prev: IComments[] | undefined) => {
        if (prev) {
          const updatedComments = prev.map((comment) => {
            return comment.id === foundComment.id ? updatedComment : comment;
          });
          return updatedComments;
        }
        return prev;
      });
      setToggleReply(false);
    }
  };

  console.log(data?.content);

  const handleUpdate = () => {
    source?.setComments((prev: IComments[] | undefined) => {
      if (prev) {
        prev.map((comment) => {
          comment.replies.forEach((reply) => {
            if (reply.id === id) {
              reply.content = inputEditContent;
            }
          });
        });
        return prev;
      }
      return prev;
    });
    setToggleEdit(false)

  };



  return (
    <div className={styles.replybox}>
      <div className={styles.commentBox}>
        <div className={`${isEdit ? styles.line2 : styles.line}`}></div>
        <div className={`${isEdit ? styles.container2 : styles.container}`}>
          {isEdit ? (
            <>
              <Vote
                id={id}
                isreply={false}
                replies={data}
                score={data?.score}
                disabled={true}
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
                        <button className={styles.dlt} disabled>
                          <img src="/images/icon-delete.svg"></img> Delete
                        </button>
                        <button disabled className={styles.button}>
                          <img src="/images/icon-edit.svg" /> Edit
                        </button>
                      </>
                    ) : (
                      <button className={styles.button} disabled>
                        Reply
                        <img src="/images/icon-reply.svg" alt="" />
                      </button>
                    )}
                  </div>
                </header>
                <div className={styles.commentBody}>
                  <textarea
                    value={inputEditContent}
                    onChange={(e) => setInputEditContent(e.target.value)}
                    placeholder="Add a comment..."
                    className={styles.editArea}
                    name="comment"
                    id=""
                    cols={10}
                    rows={3}
                  ></textarea>
                  <button onClick={handleUpdate} className={styles.update}>
                    UPDATE
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.userImage}>
                <img src="/images/avatars/image-juliusomo.webp" alt="" />
              </div>
              <textarea
                onChange={(e) => setInputContent(e.target.value)}
                placeholder="Add a comment..."
                className={styles.input}
                name="comment"
                id=""
                cols={10}
                rows={3}
              ></textarea>

              <button onClick={handleReply} className={styles.send}>
                REPLY
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddReply;
