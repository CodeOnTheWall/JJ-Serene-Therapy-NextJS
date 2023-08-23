// Components
import CustomLink from "./CustomLink";
import { options } from "@/app/api/auth/[...nextauth]/options";
// use instead of getSession when calling from the server
import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import SignOut from "./SignOut";

interface MainNavProps {
  className?: string;
}

export default async function MainNav({ className }: MainNavProps) {
  const session = await getServerSession(options);

  if (session) {
    return <SignOut />;
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
    </nav>
  );
}
