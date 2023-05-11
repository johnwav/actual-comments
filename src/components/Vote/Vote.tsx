import { useContext, useEffect, useState } from "react";
import styles from "./Vote.module.css";
import { CommentsContext } from "../../Context/Comments";
import { IComments, IReply } from "../../@types/comment";

interface Props {
  score: number | undefined;
  id: IComments["id"] | undefined;
  isreply: boolean;
  replies: IReply | undefined;
  disabled: boolean;
}

const Vote = ({ score, id, isreply, replies, disabled }: Props) => {
  const [vote, setVote] = useState(score);
  const data = useContext(CommentsContext);
  const updateComment = (
    comments: IComments[] | undefined,
    id: IComments["id"] | undefined
  ) => {
    const foundComment = comments?.find((comment) => comment.id === id);
    if (foundComment) {
      const updatedScore = vote;
      const updatedComment = { ...foundComment, score: updatedScore };
      data?.setComments((prevComments: IComments[] | undefined) => {
        if (prevComments) {
          const updatedComments = prevComments.map((comment) =>
            comment.id === id ? updatedComment : comment
          );
          return updatedComments;
        }
        return prevComments;
      });
    }
  };

  const updateReply = () => {
    data?.setComments((prevComments: IComments[] | undefined) => {
      if (prevComments) {
        const updatedComments = prevComments.map((comment) => {
          const updatedReplies = comment.replies.map((reply: IReply) => {
            if (reply.id === replies?.id) {
              return { ...reply, score: vote };
            }
            return reply;
          });
          return { ...comment, replies: updatedReplies };
        });
        return updatedComments;
      }
      return prevComments;
    });
  };

  const increase = () => {
    if (disabled) return;
    else
      setVote((prev) => {
        if (prev) {
          return prev + 1;
        }
      });
  };

  const decrease = () => {
    if (disabled) return;
    else if (score) {
      setVote((prev) => {
        if (prev) {
          return prev === 1 ? 1 : prev - 1;
        }
      });
    }
  };

  useEffect(() => {
    if (!isreply) {
      updateComment(data?.comments, id);
    } else {
      updateReply();
    }
  }, [vote]);

  return (
    <div className={styles.voteContainer}>
      <button className={styles.button} onClick={increase}>
        <img src="/images/icon-plus.svg" alt="" />
      </button>
      <div className={styles.count}>{vote}</div>
      <button className={styles.button} onClick={decrease}>
        <img src="/images/icon-minus.svg" alt="" />
      </button>
    </div>
  );
};

export default Vote;
