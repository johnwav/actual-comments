import { useState } from "react";
import styles from "./Vote.module.css";

const Vote = () => {
  const [vote, setVote] = useState<number>(0);

  const increase = () => {
    setVote((prev) => prev + 1);
  };
  const decrease = () => {
    setVote((prev) => (prev === 1 ? 1 : prev - 1));
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
