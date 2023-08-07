import { Schema, model, models } from "mongoose";

const BookNowClientSchema = new Schema({
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
  emergencyContactPhone: { type: String },
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
  activitiesSportsHobbies: { type: String },
  treatmentExpectation: { type: String },
  otherTherapyTreatment: { type: String },
  cardiovascular: {
    // array of objects
    type: [
      {
        type: String,
        enum: [
          "NA",
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
    // array of objects
    type: [
      {
        type: String,
        enum: [
          "NA",
          "Chronic cough",
          "Shortness of breath",
          "Asthma",
          "COPD",
          "Bronchitis",
          "Emphysema",
          "Sinusitis",
        ],
      },
    ],
  },
  neurological: {
    type: [
      {
        type: String,
        enum: [
          "NA",
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
    ],
  },
  headNeck: {
    type: [
      {
        type: String,
        enum: [
          "NA",
          "Headaches",
          "Migraines",
          "Concussion",
          "Vision loss",
          "Hearing loss",
          "Ear problems",
          "Corrective lenses / contacts",
        ],
      },
    ],
  },

  digestive: {
    type: [
      {
        type: String,
        enum: [
          "NA",
          "Constipation",
          "Irritable bowel syndrome",
          "Inflammatory bowel disease",
          "Crohn’s Disease",
          "Colostomy Bag",
        ],
      },
    ],
  },
  // otherConditions field is an array, and each element in the array is an object.
  // Each object contains a type property, which is a string. The string value must
  // be one of the allowed values specified in the enum array, ensuring that the data
  // stored in the otherConditions field can only be one of the predefined
  // conditions. For example, when you save data to the otherConditions field,
  // you can provide an array of strings, and each string should match one of the
  // allowed values from the enum array.
  otherConditions: {
    type: [
      {
        type: String,
        enum: [
          "NA",
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
const BookNowClient =
  models.BookNowClient || model("BookNowClient", BookNowClientSchema);
export default BookNowClient;
