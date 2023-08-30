"use client";

import { signOut } from "next-auth/react";

interface SignOutProps {
  className?: string;
}

export default function SignOut({ className }: SignOutProps) {
  return (
    <nav
      className={`hidden sm:flex items-center space-x-4 lg:space-x-6 ${className}`}
    >
      <button
        className="be"
        onClick={() =>
          signOut({
            callbackUrl:
              "https://jj-serene-therapy-next-uuvvyh12r-codeonthewall.vercel.app/",
          })
        }
      >
        Sign Out
      </button>
    </nav>
  );
}
