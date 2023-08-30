import connectToDB from "@/utils/database";
import InquiringClient from "@/models/inquiringclient";

import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    connectToDB();

    const deletedInquiringClient = await InquiringClient.findByIdAndDelete(
      params.id
    );

    return NextResponse.json(deletedInquiringClient);
  } catch (error) {
    console.log("[INQURINGCLIENT_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
