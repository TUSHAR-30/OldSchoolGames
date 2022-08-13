import React from "react";
import styles from "./Tictactoe.module.css";

function SquareComponent(props) {
  const classes = props.className
    ? `${props.className} ${styles.square}`
    : `${styles.square}`;
  return (
    <span
      className={classes}
      style={
        props.state === "" ? { paddingLeft: "35px", paddingRight: "35px" } : {}
      }
      // style={{ border: "1px solid red", padding: "30px" }}
      onClick={props.onClick}
    >
      {props.state === "" ? `­­\u00ad` : props.state}
    </span>
  );
}

export default SquareComponent;
