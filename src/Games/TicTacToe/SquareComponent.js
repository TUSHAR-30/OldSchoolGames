import React from "react";
import styles from "./Tictactoe.module.css";

function SquareComponent(props) {
  const classes = props.className
    ? `${props.className} ${styles.square}`
    : `${styles.square}`;
  return (
    <span
      // style={{
      //   height: "100px",
      //   maxHeight: "10px",
      //   fontSize: "64px",
      //   textAlign: "center",
      //   color: "#1CDBF5",
      //   fontWeight: "bolder",
      //   padding: "30px",
      //   minWidth: "10px",
      //   borderRight: "15px solid #1CDBF5",
      //   borderBottom: "15px solid #1CDBF5",
      // }}
      className={classes}
    >
      X
    </span>
  );
}

export default SquareComponent;
