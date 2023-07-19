"use client";

import { motion, MotionProps } from "framer-motion";

interface MotionDivProps extends MotionProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MotionDiv({
  children,
  className,
  ...rest
}: MotionDivProps) {
  return (
    <motion.div className={className} {...rest}>
      {children}
    </motion.div>
  );
}
