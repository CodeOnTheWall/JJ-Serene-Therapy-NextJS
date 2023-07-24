import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className: String;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <main
      className={`${className}  flex w-full min-h-screen p-12 md:p-16 lg:p-24`}
    >
      {children}
    </main>
  );
}
