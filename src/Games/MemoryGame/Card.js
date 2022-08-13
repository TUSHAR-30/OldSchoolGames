import React from "react";
import styles from "./MemoryGame.module.css";
function Card({ item }) {
  return (
    <div className={styles.card}>
      <img src={item.img} alt={item.id} />
    </div>
  );
}

export default Card;
