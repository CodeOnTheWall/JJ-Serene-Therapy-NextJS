// NextJS
import { redirect } from "next/navigation";
// NextAuth
import { options } from "../api/auth/[...nextauth]/options";
// use instead of getSession when calling from the server
import { getServerSession } from "next-auth/next";
// Components
import Layout from "@/components/LayoutWrapper";
import InquiringClientDataTable from "./(components)/InquiringClient/InquiringClientDataTable";
import BookNowClientDataTable from "./(components)/BookNowClient/BookNowClientDataTable";

// Models
import InquiringClient from "@/models/inquiringclient";
import BookNowClient from "@/models/booknowclient";
import connectToDB from "@/utils/database";

const inquiringClientDB = async () => {
  try {
    connectToDB();
    const inquiringClientRes = await InquiringClient.find({});
    return inquiringClientRes; // Return the query results
  } catch (error) {
    console.error(error);
    return [];
  }
};

const bookNowClientDB = async () => {
  try {
    connectToDB();
    const bookNowClientRes = await BookNowClient.find({});
    return bookNowClientRes; // Return the query results
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default async function Home() {
  const session = await getServerSession(options);

  // after login, the callback url would go back to /admin
  if (!session) {
    redirect(
      "/api/auth/signin?callbackUrl=/https://jj-serene-therapy-next-uuvvyh12r-codeonthewall.vercel.app/admin"
    );
  }

  const inquiringClientRes = await inquiringClientDB();
  const bookNowClientRes = await bookNowClientDB();

  interface InquiringClient {
    _id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
  }
  interface BookNowClient {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    sex: string;
    gender: string;
    dateOfBirth: string;
    personalHealthNumber: string;
    guardian: string;
    emergencyContact: string;
    emergencyContactPhone: string;
    occupation: string;
    employer: string;
    familyDoctor: string;
    referringProfessional: string;
    howDidYouHearAboutUs: string;
    referredTo: string;
    healthConcerns: string;
    whatIsMakingItBetter: string;
    whatIsMakingItWorse: string;
    currentMedications: string;
    knownAllergiesOrHypersensitivities: string;
    majorAccidentsOrSurgeries: string;
    familyHistory: string;
    activitiesSportsHobbies: string;
    treatmentExpectation: string;
    otherTherapyTreatment: string;
    cardiovascular: string[];
    respiratory: string[];
    neurological: string[];
    headNeck: string[];
    digestive: string[];
    otherConditions: string[];
    accuracyOfInformation: string;
    privacyAndSharingOfInformation: string;
    cancellationPolicy: string;
    lateArrivalPolicy: string;
    inappropriateBehaviourPolicy: string;
    treatmentConsentStatement: string;
    minorConsent: string;
    paymentPolicy: string;
    communicationConsent: string;
    signature: string;
    updatedAt: string;
    createdAt: string;
  }

  const formattedInquiringClient = inquiringClientRes.map(
    (inquiringClient: InquiringClient) => ({
      id: inquiringClient._id.toString(),
      firstName: inquiringClient.firstName,
      lastName: inquiringClient.lastName,
      phone: inquiringClient.phone,
      email: inquiringClient.email,
      subject: inquiringClient.subject,
      message: inquiringClient.message,
      createdAt: new Date(inquiringClient.createdAt).toLocaleDateString(
        "en-US"
      ),
    })
  );

  const formattedBookNowClient = bookNowClientRes.map(
    (bookNowClient: BookNowClient) => ({
      id: bookNowClient._id.toString(),
      firstName: bookNowClient.firstName,
      lastName: bookNowClient.lastName,
      email: bookNowClient.email,
      phone: bookNowClient.phone,
      address: bookNowClient.address,
      sex: bookNowClient.sex,
      gender: bookNowClient.gender,
      dateOfBirth: new Date(bookNowClient.dateOfBirth).toLocaleDateString(
        "en-us"
      ),
      personalHealthNumber: bookNowClient.personalHealthNumber,
      guardian: bookNowClient.guardian,
      emergencyContact: bookNowClient.emergencyContact,
      emergencyContactPhone: bookNowClient.emergencyContactPhone,
      occupation: bookNowClient.occupation,
      employer: bookNowClient.employer,
      familyDoctor: bookNowClient.familyDoctor,
      referringProfessional: bookNowClient.referringProfessional,
      howDidYouHearAboutUs: bookNowClient.howDidYouHearAboutUs,
      referredTo: bookNowClient.referredTo,
      healthConcerns: bookNowClient.healthConcerns,
      whatIsMakingItBetter: bookNowClient.whatIsMakingItBetter,
      whatIsMakingItWorse: bookNowClient.whatIsMakingItWorse,
      currentMedications: bookNowClient.currentMedications,
      knownAllergiesOrHypersensitivities:
        bookNowClient.knownAllergiesOrHypersensitivities,
      majorAccidentsOrSurgeries: bookNowClient.majorAccidentsOrSurgeries,
      familyHistory: bookNowClient.familyHistory,
      activitiesSportsHobbies: bookNowClient.activitiesSportsHobbies,
      treatmentExpectation: bookNowClient.treatmentExpectation,
      otherTherapyTreatment: bookNowClient.otherTherapyTreatment,
      cardiovascular: bookNowClient.cardiovascular,
      respiratory: bookNowClient.respiratory,
      neurological: bookNowClient.neurological,
      headNeck: bookNowClient.headNeck,
      digestive: bookNowClient.digestive,
      otherConditions: bookNowClient.otherConditions,
      accuracyOfInformation: new Date(
        bookNowClient.accuracyOfInformation
      ).toLocaleDateString("en-US"),
      privacyAndSharingOfInformation: new Date(
        bookNowClient.privacyAndSharingOfInformation
      ).toLocaleDateString("en-US"),
      cancellationPolicy: new Date(
        bookNowClient.cancellationPolicy
      ).toLocaleDateString("en-US"),
      lateArrivalPolicy: new Date(
        bookNowClient.lateArrivalPolicy
      ).toLocaleDateString("en-US"),
      inappropriateBehaviourPolicy: new Date(
        bookNowClient.inappropriateBehaviourPolicy
      ).toLocaleDateString("en-US"),
      treatmentConsentStatement: new Date(
        bookNowClient.treatmentConsentStatement
      ).toLocaleDateString("en-US"),
      minorConsent: new Date(bookNowClient.minorConsent).toLocaleDateString(
        "en-US"
      ),
      paymentPolicy: new Date(bookNowClient.paymentPolicy).toLocaleDateString(
        "en-US"
      ),
      communicationConsent: new Date(
        bookNowClient.communicationConsent
      ).toLocaleDateString("en-US"),
      signature: bookNowClient.signature,
      updatedAt: new Date(bookNowClient.updatedAt).toLocaleDateString("en-US"),
      createdAt: new Date(bookNowClient.createdAt).toLocaleDateString("en-US"),
    })
  );

  return (
    <Layout className=" flex-col items-center">
      <h1>Welcome {session.user?.name}!</h1>
      <InquiringClientDataTable
        InquiringClientData={formattedInquiringClient}
      />
      <BookNowClientDataTable BookNowClientData={formattedBookNowClient} />
    </Layout>
  );
}
