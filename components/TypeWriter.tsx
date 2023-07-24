"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  const [text, count] = useTypewriter({
    words: [
      "My Name is Jason Al Kountar",
      "I am pleased to meet you",
      "Here is a little information about myself:",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <>
      <span>{text}</span>
      <Cursor cursorColor="#7209b7" />
    </>
  );
}
