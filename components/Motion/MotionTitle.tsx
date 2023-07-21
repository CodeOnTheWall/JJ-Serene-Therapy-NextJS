"use client";

import { motion, MotionProps } from "framer-motion";

interface MotionTitleProps extends MotionProps {
  y: number;
  duration: number;
  delay: number;
  className?: string;
  children: string;
}

export default function MotionTitle({
  y,
  duration,
  delay,
  className,
  children,
}: MotionTitleProps) {
  return (
    <motion.h1
      initial={{
        y: y,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
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
