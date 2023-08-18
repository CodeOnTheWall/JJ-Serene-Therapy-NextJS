import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";
// use instead of getSession when calling from the server
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(options);

  // after login, the callback url would go back to /admin
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <>
      {session ? (
        <h1>{session?.user?.name}</h1>
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  );
}
