import { useState } from "react";
import styles from "./Vote.module.css";
// import { CommentsContext } from "../../Context/Comments";

interface Score {
  score: number;
}

const Vote = ({ score }: Score) => {
  const [vote, setVote] = useState(score);
  // const data = useContext(CommentsContext);

  const increase = () => {
    setVote((prev) => prev + 1);
  };
  const decrease = () => {
    if (score) {
      setVote((prev) => (prev === 1 ? 1 : prev - 1));
    }
  };

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
