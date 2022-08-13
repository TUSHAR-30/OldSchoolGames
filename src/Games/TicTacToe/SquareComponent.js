import React from "react";
import styles from "./Tictactoe.module.css";

function SquareComponent(props) {
  const classes = props.className
    ? `${props.className} ${styles.square}`
    : `${styles.square}`;
  return (
    <span className={classes} onClick={props.onClick}>
      {props.state}
    </span>
  );
}

export default SquareComponent;
