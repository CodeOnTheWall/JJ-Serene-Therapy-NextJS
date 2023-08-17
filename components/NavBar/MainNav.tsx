"use client";

// Components
import CustomLink from "./CustomLink";
import { useSession, signIn, signOut } from "next-auth/react";

interface MainNavProps {
  className?: string;
}

export default function MainNav({ className }: MainNavProps) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <nav>
          <button onClick={() => signOut()}>Sign out</button>
        </nav>
      </>
    );
  }

  return (
    <nav
      className={`hidden sm:flex items-center space-x-4 lg:space-x-6 ${className}`}
    >
      <CustomLink href="/" title="Home" />
      <CustomLink href="/treatments" title="Treatments" />
      <CustomLink href="/background" title="Background" />
      <CustomLink href="/contact" title="Contact" />
      <CustomLink href="/booknow" title="Book Now" />
      <CustomLink href="/admin" title="Admin" />
      <button onClick={() => signIn()}>Sign in</button>
    </nav>
  );
}
