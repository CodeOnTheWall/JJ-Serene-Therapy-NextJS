import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className: String;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <main
      className={`${className}  flex h-full w-full p-32 md:p-24 lg:p-16 sm:p-12`}
    >
      {children}
    </main>
  );
}
