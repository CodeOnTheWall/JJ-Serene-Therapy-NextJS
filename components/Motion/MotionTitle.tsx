"use client";

import { motion, MotionProps } from "framer-motion";

interface MotionTitleProps extends MotionProps {
  y?: number;
  x?: number;
  duration: number;
  delay: number;
  className?: string;
  children: string;
  rotate?: number;
  rotatex?: number;
  rotatey?: number;
  rotatez?: number;
}

export default function MotionTitle({
  x,
  y,
  duration,
  delay,
  className,
  children,
  rotate,
  rotatex,
  rotatey,
  rotatez,
}: MotionTitleProps) {
  return (
    <motion.h1
      initial={{
        x: x,
        y: y,
        opacity: 0,
        rotate: rotate,
        rotateY: rotatey,
      }}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        rotateY: 0,
      }}
      transition={{
        duration: duration,
        delay: delay,
      }}
      className={`uppercase mx-3 md:tracking-[20px] text-[#7209b7] font-bold text-5xl ${className}`}
    >
      {children}
    </motion.h1>
  );
}
