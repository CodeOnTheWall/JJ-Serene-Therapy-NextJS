"use client";

import { SessionProvider } from "next-auth/react";

interface NextAuthProviderProps {
  children?: any;
  session?: any;
}

// higher order component, meaning we will wrap other components with it
export default function NextAuthProvider({
  children,
  session,
}: NextAuthProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
