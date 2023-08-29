import connectToDB from "@/utils/database";
import BookNowClient from "@/models/booknowclient";

import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    connectToDB();

    const deletedBookNowClient = await BookNowClient.findByIdAndDelete(
      params.id
    );

    return NextResponse.json(deletedBookNowClient);
  } catch (error) {
    console.log("[INQURINGCLIENT_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
