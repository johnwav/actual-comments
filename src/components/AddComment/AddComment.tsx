import { ChangeEvent, useState } from "react";
import styles from "./AddComment.module.css";
import { useContext } from "react";
import { CommentsContext } from "../../Context/Comments";
import CurrentUser from "../../data.json";
import { IComments, IReply } from "../../@types/comment";

interface Props {
  isReply: boolean;
  id: IComments["id"];
  setToggleReply: (set: boolean) => void;
}

const AddComment = ({ isReply, id, setToggleReply }: Props) => {
  const data = useContext(CommentsContext);
  let currentUser = CurrentUser.currentUser;
  const [inputContent, setInputContent] = useState("");
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputContent(event.target.value);
  };

  const handleSend = (id: IComments["id"]) => {
    if (!isReply) {
      const newComment: IComments = {
        id: Math.floor(Math.random() * 10000) + 1,
        content: inputContent,
        createdAt: "2 days ago",
        score: 2,
        user: currentUser,
        replies: [],
      };
      data?.setComments([...data.comments, newComment]);
    } else {
      const foundComment = data?.comments.find((comment) => comment.id === id);
      const replyingTo = foundComment?.user.username;

      const newReply: IReply = {
        id: Math.floor(Math.random() * 10000) + 1,
        // content: "@" + replyingTo + " " + inputContent,
        content: inputContent,
        createdAt: "Now",
        score: 1,
        user: currentUser,
        replyingTo: replyingTo,
      };

      if (foundComment) {
        const updatedReplies = [...foundComment.replies, newReply];
        const updatedComment = { ...foundComment, replies: updatedReplies };

        data?.setComments((prevComments: IComments[] | undefined) => {
          if (prevComments) {
            const updatedComments = prevComments.map((comment) =>
              comment.id === id ? updatedComment : comment
            );
            return updatedComments;
          }
          return prevComments;
        });
        setToggleReply(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.userImage}>
        <img src="/images/avatars/image-juliusomo.webp" alt="" />
      </div>
      <textarea
        onChange={handleChange}
        placeholder="Add a comment..."
        className={styles.input}
        name="comment"
        cols={10}
        rows={3}
      ></textarea>
      <button onClick={() => handleSend(id)} className={styles.send}>
        {isReply ? "REPLY" : "SEND"}
      </button>
    </div>
  );
};

export default AddComment;
