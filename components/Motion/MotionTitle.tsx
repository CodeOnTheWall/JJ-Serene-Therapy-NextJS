"use client";

import { motion, MotionProps } from "framer-motion";

interface MotionTitleProps extends MotionProps {
  y?: number;
  x?: number;
  duration: number;
  delay: number;
  className?: string;
  children: string;
  useAnimate?: boolean;
}

export default function MotionTitle({
  x,
  y,
  duration,
  delay,
  className,
  children,
  useAnimate,
}: MotionTitleProps) {
  const animationProps = useAnimate
    ? { animate: { x: 0, y: 0, opacity: 1 } }
    : { whileInView: { x: 0, y: 0, opacity: 1 } };

  return (
    <motion.h1
      initial={{
        x: x,
        y: y,
        opacity: 0,
      }}
      {...animationProps}
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
