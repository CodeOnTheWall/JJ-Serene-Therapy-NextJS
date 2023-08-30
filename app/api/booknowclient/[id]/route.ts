import connectToDB from "@/utils/database";
import BookNowClient from "@/models/booknowclient";

// this is the Response to use when using in conjunction with typescript
// instead of Response.json
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
    console.log("[BOOKNOWCLIENT_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const {
    appointmentNotes,
    firstName,
    lastName,
    email,
    phone,
    address,
    sex,
    gender,
    dateOfBirth,
    personalHealthNumber,
    guardian,
    emergencyContact,
    emergencyContactPhone,
    occupation,
    employer,
    familyDoctor,
    referringProfessional,
    howDidYouHearAboutUs,
    referredTo,
    healthConcerns,
    whatIsMakingItBetter,
    whatIsMakingItWorse,
    currentMedications,
    knownAllergiesOrHypersensitivities,
    majorAccidentsOrSurgeries,
    familyHistory,
    activitiesSportsHobbies,
    treatmentExpectation,
    otherTherapyTreatment,
    cardiovascular,
    respiratory,
    neurological,
    headNeck,
    digestive,
    otherConditions,
    accuracyOfInformation,
    privacyAndSharingOfInformation,
    cancellationPolicy,
    lateArrivalPolicy,
    inappropriateBehaviourPolicy,
    treatmentConsentStatement,
    minorConsent,
    paymentPolicy,
    communicationConsent,
    signature,
  } = await req.json();

  const updatedFields = {
    appointmentNotes,
    firstName,
    lastName,
    email,
    phone,
    address,
    sex,
    gender,
    dateOfBirth,
    personalHealthNumber,
    guardian,
    emergencyContact,
    emergencyContactPhone,
    occupation,
    employer,
    familyDoctor,
    referringProfessional,
    howDidYouHearAboutUs,
    referredTo,
    healthConcerns,
    whatIsMakingItBetter,
    whatIsMakingItWorse,
    currentMedications,
    knownAllergiesOrHypersensitivities,
    majorAccidentsOrSurgeries,
    familyHistory,
    activitiesSportsHobbies,
    treatmentExpectation,
    otherTherapyTreatment,
    cardiovascular,
    respiratory,
    neurological,
    headNeck,
    digestive,
    otherConditions,
    accuracyOfInformation,
    privacyAndSharingOfInformation,
    cancellationPolicy,
    lateArrivalPolicy,
    inappropriateBehaviourPolicy,
    treatmentConsentStatement,
    minorConsent,
    paymentPolicy,
    communicationConsent,
    signature,
  };

  try {
    connectToDB();

    const updatedBookNowClient = await BookNowClient.findByIdAndUpdate(
      params.id,
      { $set: updatedFields }
    );

    return NextResponse.json(updatedBookNowClient);
  } catch (error) {
    console.log("[BOOKNOWCLIENT_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
// export async function PUT(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   const { appointmentNotes } = await req.json();

//   const updatedFields = {
//     appointmentNotes,
//   };

//   try {
//     connectToDB();

//     const updatedBookNowClient = await BookNowClient.findByIdAndUpdate(
//       params.id,
//       { appointmentNotes: appointmentNotes }
//     );
//     console.log(updatedBookNowClient);

//     return NextResponse.json(updatedBookNowClient);
//   } catch (error) {
//     console.log("[BOOKNOWCLIENT_PATCH]", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }
