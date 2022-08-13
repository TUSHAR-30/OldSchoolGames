import React from "react";
import styles from "./MemoryGame.module.css";
function Card({ item, id, handleClick }) {
  const itemClass = item.stat ? item.stat : "";
  return (
    <div
      className={styles.card}
      id={styles[`${itemClass}`]}
      onClick={() => handleClick(id)}
    >
      <img src={item.img} alt={item.id} />
    </div>
  );
}

export default Card;
