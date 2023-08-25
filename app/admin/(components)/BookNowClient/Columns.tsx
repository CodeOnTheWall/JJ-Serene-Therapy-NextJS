"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./CellAction";

// Data table from shadcn
// this is step 1 Column Definitions
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BookNowClientColumn = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
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
};

// header is what is shown
export const Columns: ColumnDef<BookNowClientColumn>[] = [
  {
    id: "actions",
    // row represents a row of data in the data table, and row.original
    // provides access to the original data object associated with
    // that row. These properties are used in the code to pass the
    // row's original data to the CellAction component for further
    // processing or rendering.
    // the original data object is the BillboardColumn type
    cell: ({ row }) => <CellAction data={row.original} />,
  },
  {
    // accessorKeys correspond to the key in the data object (inquiringClientData)
    // that contains the value for that column
    // hence firstName etc are types of the inquiringClientData
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
    header: "How did you hear about us?",
  },
  {
    accessorKey: "referredTo",
    header: "Referred to",
  },
  {
    accessorKey: "healthConcerns",
    header: "Health concerns",
  },
  {
    accessorKey: "whatIsMakingItBetter",
    header: "What is making it better?",
  },
  {
    accessorKey: "whatIsMakingItWorse",
    header: "What is making it worse?",
  },
  {
    accessorKey: "currentMedications",
    header: "Current medications",
  },
  {
    accessorKey: "knownAllergiesOrHypersensitivities",
    header: "Known allergies or hypersensitivities",
  },
  {
    accessorKey: "majorAccidentsOrSurgeries",
    header: "Major accidents or surgeries",
  },
  {
    accessorKey: "familyHistory",
    header: "Family history",
  },
  {
    accessorKey: "activitiesSportsHobbies",
    header: "Activities/Sports/Hobbies",
  },
  {
    accessorKey: "treatmentExpectation",
    header: "Treatment expectation",
  },
  {
    accessorKey: "otherTherapyTreatment",
    header: "Other therapy treatment",
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
    header: "HeadNeck",
  },
  {
    accessorKey: "digestive",
    header: "Digestive",
  },
  {
    accessorKey: "otherConditions",
    header: "Other conditions",
  },
  {
    accessorKey: "accuracyOfInformation",
    header: "Accuracy of information",
  },
  {
    accessorKey: "privacyAndSharingOfInformation",
    header: "Privacy and sharing of information",
  },
  {
    accessorKey: "cancellationPolicy",
    header: "Cancellation policy",
  },
  {
    accessorKey: "lateArrivalPolicy",
    header: "Late arrival policy",
  },
  {
    accessorKey: "inappropriateBehaviourPolicy",
    header: "Inappropriate behaviour policy",
  },
  {
    accessorKey: "treatmentConsentStatement",
    header: "Treatment consent statement",
  },
  {
    accessorKey: "minorConsent",
    header: "Minor consent",
  },
  {
    accessorKey: "paymentPolicy",
    header: "Payment policy",
  },
  {
    accessorKey: "communicationConsent",
    header: "Communication consent",
  },
  {
    accessorKey: "signature",
    header: "Signature",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated at",
  },
  {
    accessorKey: "createdAt",
    header: "Created at",
  },
];
