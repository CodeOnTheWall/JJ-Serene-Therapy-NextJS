import BookNowClient from "@/models/booknowclient";
import BookNowForm from "./(components)/BookNowForm";

interface BookNowClientFormPageProps {
  params: {
    booknowId: string;
  };
}

// params always available on server side, and we have booknowId since
// we are inside [booknowId]

interface BookNowClient {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  sex: string;
  gender: string;
  dateOfBirth: Date;
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
  accuracyOfInformation: Date;
  privacyAndSharingOfInformation: Date;
  cancellationPolicy: Date;
  lateArrivalPolicy: Date;
  inappropriateBehaviourPolicy: Date;
  treatmentConsentStatement: Date;
  minorConsent: Date;
  paymentPolicy: Date;
  communicationConsent: Date;
  signature: string;
  updatedAt: Date;
  createdAt: Date;
}

export default async function BookNowClientFormPage({
  params,
}: BookNowClientFormPageProps) {
  const bookNowClientRes = await BookNowClient.findById({
    _id: params.booknowId,
  });

  const bookNowClient = {
    id: bookNowClientRes._id.toString(),
    appointmentNotes: bookNowClientRes.appointmentNotes,
    firstName: bookNowClientRes.firstName,
    lastName: bookNowClientRes.lastName,
    email: bookNowClientRes.email,
    phone: bookNowClientRes.phone,
    address: bookNowClientRes.address,
    sex: bookNowClientRes.sex,
    gender: bookNowClientRes.gender,
    dateOfBirth: bookNowClientRes.dateOfBirth,
    personalHealthNumber: bookNowClientRes.personalHealthNumber,
    guardian: bookNowClientRes.guardian,
    emergencyContact: bookNowClientRes.emergencyContact,
    emergencyContactPhone: bookNowClientRes.emergencyContactPhone,
    occupation: bookNowClientRes.occupation,
    employer: bookNowClientRes.employer,
    familyDoctor: bookNowClientRes.familyDoctor,
    referringProfessional: bookNowClientRes.referringProfessional,
    howDidYouHearAboutUs: bookNowClientRes.howDidYouHearAboutUs,
    referredTo: bookNowClientRes.referredTo,
    healthConcerns: bookNowClientRes.healthConcerns,
    whatIsMakingItBetter: bookNowClientRes.whatIsMakingItBetter,
    whatIsMakingItWorse: bookNowClientRes.whatIsMakingItWorse,
    currentMedications: bookNowClientRes.currentMedications,
    knownAllergiesOrHypersensitivities:
      bookNowClientRes.knownAllergiesOrHypersensitivities,
    majorAccidentsOrSurgeries: bookNowClientRes.majorAccidentsOrSurgeries,
    familyHistory: bookNowClientRes.familyHistory,
    activitiesSportsHobbies: bookNowClientRes.activitiesSportsHobbies,
    treatmentExpectation: bookNowClientRes.treatmentExpectation,
    otherTherapyTreatment: bookNowClientRes.otherTherapyTreatment,
    cardiovascular: bookNowClientRes.cardiovascular,
    respiratory: bookNowClientRes.respiratory,
    neurological: bookNowClientRes.neurological,
    headNeck: bookNowClientRes.headNeck,
    digestive: bookNowClientRes.digestive,
    otherConditions: bookNowClientRes.otherConditions,
    accuracyOfInformation: bookNowClientRes.accuracyOfInformation,
    privacyAndSharingOfInformation:
      bookNowClientRes.privacyAndSharingOfInformation,
    cancellationPolicy: bookNowClientRes.cancellationPolicy,
    lateArrivalPolicy: bookNowClientRes.lateArrivalPolicy,
    inappropriateBehaviourPolicy: bookNowClientRes.inappropriateBehaviourPolicy,
    treatmentConsentStatement: bookNowClientRes.treatmentConsentStatement,
    minorConsent: bookNowClientRes.minorConsent,
    paymentPolicy: bookNowClientRes.paymentPolicy,
    communicationConsent: bookNowClientRes.communicationConsent,
    signature: bookNowClientRes.signature,
    updatedAt: bookNowClientRes.updatedAt,
    createdAt: bookNowClientRes.createdAt,
  };

  return (
    <div className=" flex-col">
      <div className=" flex-1 space-y-4 p-8 pt-6">
        <BookNowForm bookNowClient={bookNowClient} />
      </div>
    </div>
  );
}
