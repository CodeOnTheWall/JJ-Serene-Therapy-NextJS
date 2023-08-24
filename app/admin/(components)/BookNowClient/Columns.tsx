"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./CellAction";

// Data table from shadcn
// this is step 1 Column Definitions
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BookNowClientColumn = {
  id: string;
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
  createdAt: Date;
  updatedAt: Date;
};

// header is what is shown
export const Columns: ColumnDef<BookNowClientColumn>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "sex",
    header: "Sex",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "dateOfBirth",
    header: "Date of Birth",
  },
  {
    accessorKey: "personalHealthNumber",
    header: "Personal Health Number",
  },
  {
    accessorKey: "guardian",
    header: "Guardian",
  },
  {
    accessorKey: "emergencyContact",
    header: "Emergency Contact",
  },
  {
    accessorKey: "emergencyContactPhone",
    header: "Emergency Contact Phone",
  },
  {
    accessorKey: "occupation",
    header: "Occupation",
  },
  {
    accessorKey: "employer",
    header: "Employer",
  },
  {
    accessorKey: "familyDoctor",
    header: "Family Doctor",
  },
  {
    accessorKey: "referringProfessional",
    header: "Referring Professional",
  },
  {
    accessorKey: "howDidYouHearAboutUs",
    header: "How Did You Hear About Us",
  },
  {
    accessorKey: "referredTo",
    header: "Referred To",
  },
  {
    accessorKey: "healthConcerns",
    header: "Health Concerns",
  },
  {
    accessorKey: "whatIsMakingItBetter",
    header: "What Is Making It Better",
  },
  {
    accessorKey: "whatIsMakingItWorse",
    header: "What Is Making It Worse",
  },
  {
    accessorKey: "currentMedications",
    header: "Current Medications",
  },
  {
    accessorKey: "knownAllergiesOrHypersensitivities",
    header: "Known Allergies or Hypersensitivities",
  },
  {
    accessorKey: "majorAccidentsOrSurgeries",
    header: "Major Accidents or Surgeries",
  },
  {
    accessorKey: "familyHistory",
    header: "Family History",
  },
  {
    accessorKey: "activitiesSportsHobbies",
    header: "Activities/Sports/Hobbies",
  },
  {
    accessorKey: "treatmentExpectation",
    header: "Treatment Expectation",
  },
  {
    accessorKey: "otherTherapyTreatment",
    header: "Other Therapy Treatment",
  },
  {
    accessorKey: "cardiovascular",
    header: "Cardiovascular",
  },
  {
    accessorKey: "respiratory",
    header: "Respiratory",
  },
  {
    accessorKey: "neurological",
    header: "Neurological",
  },
  {
    accessorKey: "headNeck",
    header: "Head/Neck",
  },
  {
    accessorKey: "digestive",
    header: "Digestive",
  },
  {
    accessorKey: "otherConditions",
    header: "Other Conditions",
  },
  {
    accessorKey: "accuracyOfInformation",
    header: "Accuracy of Information",
  },
  {
    accessorKey: "privacyAndSharingOfInformation",
    header: "Privacy and Sharing of Information",
  },
  {
    accessorKey: "cancellationPolicy",
    header: "Cancellation Policy",
  },
  {
    accessorKey: "lateArrivalPolicy",
    header: "Late Arrival Policy",
  },
  {
    accessorKey: "inappropriateBehaviourPolicy",
    header: "Inappropriate Behaviour Policy",
  },
  {
    accessorKey: "treatmentConsentStatement",
    header: "Treatment Consent Statement",
  },
  {
    accessorKey: "minorConsent",
    header: "Minor Consent",
  },
  {
    accessorKey: "paymentPolicy",
    header: "Payment Policy",
  },
  {
    accessorKey: "communicationConsent",
    header: "Communication Consent",
  },
  {
    accessorKey: "signature",
    header: "Signature",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
