import React, { useState } from "react";
import Card from "./Card";
import styles from "./MemoryGame.module.css";

function Cards() {
  const [items, setItems] = useState([
    {
      id: 1,
      img: "./memoryGameImg/dhoni.jpg",

      stat: "",
    },
    {
      id: 1,
      img: "./memoryGameImg/dhoni.jpg",

      stat: "",
    },
    {
      id: 2,
      img: "./memoryGameImg/jadeja.jpg",

      stat: "",
    },
    {
      id: 2,
      img: "./memoryGameImg/jadeja.jpg",

      stat: "",
    },
    {
      id: 3,
      img: "./memoryGameImg/kl.jpg",

      stat: "",
    },
    {
      id: 3,
      img: "./memoryGameImg/kl.jpg",

      stat: "",
    },
    {
      id: 4,
      img: "./memoryGameImg/Virat.jpg",

      stat: "",
    },
    {
      id: 4,
      img: "./memoryGameImg/Virat.jpg",

      stat: "",
    },
    {
      id: 5,
      img: "./memoryGameImg/Yuvraj.jpg",

      stat: "",
    },
    {
      id: 5,
      img: "./memoryGameImg/Yuvraj.jpg",

      stat: "",
    },
    {
      id: 6,
      img: "./memoryGameImg/duplesis.jpg",

      stat: "",
    },
    {
      id: 6,
      img: "./memoryGameImg/duplesis.jpg",

      stat: "",
    },
    // {
    //   id: 7,
    //   img: "./memoryGameImg/abd.jpg",

    //   stat: "",
    // },
    // {
    //   id: 7,
    //   img: "./memoryGameImg/abd.jpg",

    //   stat: "",
    // },
    // {
    //   id: 8,
    //   img: "./memoryGameImg/Rohit.jpg",
    //   stat: "",
    // },
    // {
    //   id: 8,
    //   img: "./memoryGameImg/Rohit.jpg",
    //   stat: "",
    // },
  ]);
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

export default Cards;
