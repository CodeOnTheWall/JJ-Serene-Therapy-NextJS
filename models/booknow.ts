import { Schema, model, models } from "mongoose";

const BookNowSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  sex: { type: String, enum: ["Male", "Female", "Other"], required: true },
  gender: {
    type: String,
    enum: ["Male", "Female", "Non-binary", "Other"],
    required: true,
  },
  dateOfBirth: { type: Date, required: true },
  personalHealthNumber: { type: String, required: true },
  guardian: { type: String },
  emergencyContact: { type: String },
  occupation: { type: String },
  employer: { type: String },
  familyDoctor: { type: String },
  referringProfessional: { type: String },
  howDidYouHearAboutUs: { type: String },
  referredTo: { type: String },
  healthConcerns: { type: String },
  whatIsMakingItBetter: { type: String },
  whatIsMakingItWorse: { type: String },
  currentMedications: { type: String },
  knownAllergiesOrHypersensitivities: { type: String },
  majorAccidentsOrSurgeries: { type: String },
  familyHistory: { type: String },
  activitiesHobbies: { type: String },
  treatmentExpectation: { type: String },
  otherTherapyTreatment: { type: String },
  cardiovascular: {
    type: [
      {
        type: String,
        enum: [
          "High blood pressure",
          "Low blood pressure",
          "Chronic congestive heart failure",
          "Heart attack",
          "Stroke",
          "Aneurysm",
          "Blood Clots",
          "DVT (Deep Vein Thrombosis)",
          "Varicose veins",
          "Heart disease",
          "Pace Maker",
          "Bruise easily",
          "Raynaud’s",
          "Hemophilia",
        ],
      },
    ],
  },
  respiratory: {
    type: String,
    enum: [
      "Chronic cough",
      "Shortness of breath",
      "Asthma",
      "COPD",
      "Bronchitis",
      "Emphysema",
      "Sinusitis",
    ],
  },
  neurological: {
    type: String,
    enum: [
      "Hypersensitivity",
      "Dizziness",
      "Fainting",
      "Parkinson",
      "Multiple Sclerosis",
      "Cerebral Palsy",
      "Bells Palsy",
      "Spinal Injury",
    ],
  },
  headNeck: {
    type: String,
    enum: [
      "Headaches",
      "Migraines",
      "Concussion",
      "Vision loss",
      "Hearing loss",
      "Ear problems",
      "Corrective lenses / contacts",
    ],
  },
  digestive: {
    type: String,
    enum: [
      "Constipation",
      "Irritable bowel syndrome",
      "Inflammatory bowel disease",
      "Crohn’s Disease",
      "Colostomy Bag",
    ],
  },
  otherConditions: {
    type: String,
    enum: [
      "Osteoporosis",
      "Arthritis",
      "Fibromyalgia",
      "Diabetes",
      "Kidney Disease/Urinary Condition",
      "Cancer",
      "HIV",
      "Nausea",
      "Plantar Warts",
      "Hepatitis",
      "Herpes",
      "Skin Conditions",
    ],
  },
  accuracyOfInformation: { type: Date, required: true },
  privacyAndSharingOfInformation: {
    type: Date,
    default: null,
  },
  cancellationPolicy: {
    type: Date,
    default: null,
  },
  lateArrivalPolicy: {
    type: Date,
    default: null,
  },
  inappropriateBehaviourPolicy: {
    type: Date,
    default: null,
  },
  treatmentConsentStatement: {
    type: Date,
    default: null,
  },
  minorConsent: {
    type: Date,
    default: null,
  },
  paymentPolicy: {
    type: Date,
    default: null,
  },
  communicationConsent: {
    type: Date,
    default: null,
  },
  signature: {
    type: String,
    default: null,
  },
});

// this would be thr express way where the server is always up and running
// but in nextJS its only up when its needed/called
// const User = model("User", UserSchema);
// export default User;

// look into the models first, if not there (||), create new one
const BookNow = models.Client || model("Client", BookNowSchema);
export default BookNow;
