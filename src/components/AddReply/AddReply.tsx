import { useState } from "react";
import { IComments, IReply } from "../../@types/comment";
import styles from "./AddReply.module.css";
import user from "../../data.json";
import { CommentsContext } from "../../Context/Comments";
import { useContext } from "react";

interface Props {
  setToggleReply: (toggle: boolean) => void;
  isReply: boolean;
  id: IReply["id"] | undefined;
  data: IReply | undefined;
}

const AddReply = ({ setToggleReply, id, data }: Props) => {
  const source = useContext(CommentsContext);
  const [inputContent, setInputContent] = useState("");

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
  return (
    <div className={styles.replybox}>
      <div className={styles.commentBox}>
        <div className={styles.line}></div>
        <div className={styles.container}>
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
        </div>
      </div>
    </div>
  );
};

export default AddReply;
