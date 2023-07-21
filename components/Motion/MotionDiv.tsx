"use client";

import { motion, MotionProps } from "framer-motion";

interface MotionDivProps extends MotionProps {
  x: number;
  y: number;
  duration: number;
  delay?: number;
  className?: string;
  children?: string;
  rotate?: number;
  scale?: number;
  useAnimate: boolean;
}

export default function MotionDiv({
  x,
  y,
  rotate,
  scale,
  duration,
  delay,
  useAnimate,
  className,
  children,
}: MotionDivProps) {
  const animationProps = useAnimate
    ? { animate: { x: 0, y: 0, opacity: 1, scale: 1, rotate: rotate } }
    : { whileInView: { x: 0, y: 0, opacity: 1 } };

  return (
    <motion.div
      initial={{
        x: x,
        y: y,
        opacity: 0,
        scale: scale,
      }}
      {...animationProps}
      transition={{ duration: duration, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
