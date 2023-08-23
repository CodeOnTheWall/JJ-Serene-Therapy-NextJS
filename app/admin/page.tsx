// NextJS
import { redirect } from "next/navigation";
// NextAuth
import { options } from "../api/auth/[...nextauth]/options";
// use instead of getSession when calling from the server
import { getServerSession } from "next-auth/next";
// Components
import Layout from "@/components/LayoutWrapper";
import InquiringClientDataTable from "./(components)/InquiringClientDataTable";

export default async function Home() {
  const session = await getServerSession(options);

  // after login, the callback url would go back to /admin
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  const inquiringClientRes = await fetch(
    "http://localhost:3000/api/inquiringclient"
  );

  const inquiringClientResData = await inquiringClientRes.json();

  interface InquiringClient {
    _id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
  }

  const formattedInquiringClient = inquiringClientResData.map(
    (inquiringClient: InquiringClient) => ({
      id: inquiringClient._id,
      firstName: inquiringClient.firstName,
      lastName: inquiringClient.lastName,
      phone: inquiringClient.phone,
      email: inquiringClient.email,
      subject: inquiringClient.subject,
      message: inquiringClient.message,
      createdAt: inquiringClient.createdAt,
    })
  );

  return (
    <Layout className=" flex-col items-center">
      <h1>Welcome {session.user?.name}!</h1>
      <InquiringClientDataTable
        inquiringClientData={formattedInquiringClient}
      />
    </Layout>
  );
}
