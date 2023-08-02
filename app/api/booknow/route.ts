import connectToDB from "@/utils/database";
import Client from "@/models/client";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // req.json parses the json to js
    const { firstName, lastName, phoneNumber, email, subject, message } =
      await req.json();

    if (!firstName) {
      return new NextResponse("First name is required", { status: 400 });
    }
    if (!lastName) {
      return new NextResponse("Last name is required", { status: 400 });
    }
    if (!phoneNumber) {
      return new NextResponse("Phone number is required", { status: 400 });
    }
    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }
    if (!subject) {
      return new NextResponse("Subject is required", { status: 400 });
    }
    if (!message) {
      return new NextResponse("Message is required", { status: 400 });
    }
    // reminder this is a lambda func, meaning only connects when need to
    // and dies when process completes
    await connectToDB();

    const newContactClient = new Client({
      firstName,
      lastName,
      phoneNumber,
      email,
      subject,
      message,
    });

    await newContactClient.save();
    console.log(newContactClient);

    // send json response
    // dont include a status or will throw error
    // this would be the way without NextResponse
    // return new Response(JSON.stringify(newPrompt), { status: 201 });
    return NextResponse.json(newContactClient);
  } catch (error) {
    // use new when used with an error message
    return new NextResponse("Failed to create a new Contact Client", {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const contactClients = await Client.find({});

    if (!contactClients) {
      return new NextResponse("No Contact Clients yet", { status: 404 });
    }

    return NextResponse.json(contactClients);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}