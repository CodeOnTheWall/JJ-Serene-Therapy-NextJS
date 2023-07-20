"use client";
// split method finds each space and creates an array of individual words
// mapping over each word to create a span, &nbsp; creates a non-breaking space between
// each word, so the words dont cause a new line

import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <div
      className="w-full mx-auto py-2 items-center justify-center text-center overflow-hidden
     sm:p-0"
    >
      <motion.h1
        className={`${className} w-full title font-bold capitalize text-8xl text-black/90
        lg:text-6xl md:text-5xl `}
        // telling the variants to use initial from quote, and animate from quote
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className=" inline-block "
            variants={singleWord}
            // bg-gradient-to-l bg-purple-200 via-purple-700 to-purple-200 text-transparent bg-clip-text animate-gradient-x
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
