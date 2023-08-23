import connectToDB from "@/utils/database";
import BookNowClient from "@/models/booknowclient";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // req.json parses the JSON to JS
    const {
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

    if (!firstName) {
      return new NextResponse("First name is required", { status: 400 });
    }
    if (!lastName) {
      return new NextResponse("Last name is required", { status: 400 });
    }
    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }
    if (!phone) {
      return new NextResponse("Phone number is required", { status: 400 });
    }
    if (!address) {
      return new NextResponse("Address is required", { status: 400 });
    }
    if (!sex) {
      return new NextResponse("Sex is required", { status: 400 });
    }
    if (!gender) {
      return new NextResponse("Gender is required", { status: 400 });
    }
    if (!dateOfBirth) {
      return new NextResponse("Date of Birth is required", { status: 400 });
    }
    // reminder this is a lambda func, meaning only connects when need to
    // and dies when process completes
    await connectToDB();

    const newBookNowClient = new BookNowClient({
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
    });

    await newBookNowClient.save();
    // console.log(newBookNowClient);

    // send json response
    // dont include a status or will throw error
    // this would be the way without NextResponse
    // return new Response(JSON.stringify(newPrompt), { status: 201 });
    return NextResponse.json(newBookNowClient);
  } catch (error) {
    console.log(error, "here");
    // use new when used with an error message
    return new NextResponse("Failed to create a new Contact Client", {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    await connectToDB();

    const BookNowClients = await BookNowClient.find({});

    // returning new NextResponse is only for errors
    if (!BookNowClients) {
      return new NextResponse("No Contact Clients yet", { status: 404 });
    }

    return NextResponse.json(BookNowClients);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
