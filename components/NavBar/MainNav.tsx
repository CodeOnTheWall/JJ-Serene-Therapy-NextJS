// Next-Auth
import { options } from "@/app/api/auth/[...nextauth]/options";
// use instead of getSession when calling from the server
import { getServerSession } from "next-auth/next";

// Components
import CustomLink from "./CustomLink";
import SignOut from "./SignOut";

export default async function MainNav() {
  const session = await getServerSession(options);

  return (
    <nav className="hidden sm:flex items-center space-x-4 lg:space-x-6">
      <CustomLink href="/" title="Home" />
      <CustomLink href="/treatments" title="Treatments" />
      <CustomLink href="/background" title="Background" />
      <CustomLink href="/contact" title="Contact" />
      <CustomLink href="/booknow" title="Book Now" />
      <CustomLink href="/admin" title="Admin" />
      {session && <SignOut />}
    </nav>
  );
}
