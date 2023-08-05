"use client";

import { useState } from "react";

// For the calendar
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// all dl from shadcn, including react-hook-form as its built into shadcns form
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const cardiovascular = [
  {
    id: "na",
    label: "NA",
  },
  {
    id: "highBloodPressure",
    label: "High blood pressure",
  },
  {
    id: "lowBloodPressure",
    label: "Low blood pressure",
  },
  {
    id: "chronicCongestiveHeartFailure",
    label: "Chronic congestive heart failure",
  },
  {
    id: "heartAttack",
    label: "Heart attack",
  },
  {
    id: "stroke",
    label: "Stroke",
  },
  {
    id: "aneurysm",
    label: "Aneurysm",
  },
  {
    id: "bloodClots",
    label: "Blood Clots",
  },
  {
    id: "dvt",
    label: "DVT (Deep Vein Thrombosis)",
  },
  {
    id: "varicoseVeins",
    label: "Varicose veins",
  },
  {
    id: "heartDisease",
    label: "Heart disease",
  },
  {
    id: "paceMaker",
    label: "Pace Maker",
  },
  {
    id: "bruiseEasily",
    label: "Bruise easily",
  },
  {
    id: "raynauds",
    label: "Raynaud’s",
  },
  {
    id: "hemophilia",
    label: "Hemophilia",
  },
];

const respiratory = [
  {
    id: "na",
    label: "NA",
  },
  {
    id: "chronicCough",
    label: "Chronic cough",
  },
  {
    id: "shortnessOfBreath",
    label: "Shortness of breath",
  },
  {
    id: "asthma",
    label: "Asthma",
  },
  {
    id: "copd",
    label: "COPD",
  },
  {
    id: "bronchitis",
    label: "Bronchitis",
  },
  {
    id: "emphysema",
    label: "Emphysema",
  },
  {
    id: "sinusitis",
    label: "Sinusitis",
  },
];

const neurological = [
  {
    id: "na",
    label: "NA",
  },
  {
    id: "hypersensitivity",
    label: "Hypersensitivity",
  },
  {
    id: "dizziness",
    label: "Dizziness",
  },
  {
    id: "fainting",
    label: "Fainting",
  },
  {
    id: "parkinson",
    label: "Parkinson",
  },
  {
    id: "multipleSclerosis",
    label: "Multiple Sclerosis",
  },
  {
    id: "cerebralPalsy",
    label: "Cerebral Palsy",
  },
  {
    id: "bellsPalsy",
    label: "Bells Palsy",
  },
  {
    id: "spinalInjury",
    label: "Spinal Injury",
  },
];

const headNeck = [
  {
    id: "na",
    label: "NA",
  },
  {
    id: "headaches",
    label: "Headaches",
  },
  {
    id: "migraines",
    label: "Migraines",
  },
  {
    id: "concussion",
    label: "Concussion",
  },
  {
    id: "visionLoss",
    label: "Vision loss",
  },
  {
    id: "hearingLoss",
    label: "Hearing loss",
  },
  {
    id: "earProblems",
    label: "Ear problems",
  },
  {
    id: "correctiveLensesContacts",
    label: "Corrective lenses / contacts",
  },
];

const digestive = [
  {
    id: "na",
    label: "NA",
  },
  {
    id: "constipation",
    label: "Constipation",
  },
  {
    id: "irritableBowelSyndrome",
    label: "Irritable bowel syndrome",
  },
  {
    id: "inflammatoryBowelDisease",
    label: "Inflammatory bowel disease",
  },
  {
    id: "crohnsDisease",
    label: "Crohn’s Disease",
  },
  {
    id: "colostomyBag",
    label: "Colostomy Bag",
  },
];

const otherConditions = [
  {
    id: "na",
    label: "NA",
  },
  {
    id: "osteoporosis",
    label: "Osteoporosis",
  },
  {
    id: "arthritis",
    label: "Arthritis",
  },
  {
    id: "fibromyalgia",
    label: "Fibromyalgia",
  },
  {
    id: "diabetes",
    label: "Diabetes",
  },
  {
    id: "kidneyDiseaseUrinaryCondition",
    label: "Kidney Disease/Urinary Condition",
  },
  {
    id: "cancer",
    label: "Cancer",
  },
  {
    id: "hiv",
    label: "HIV",
  },
  {
    id: "nausea",
    label: "Nausea",
  },
  {
    id: "plantarWarts",
    label: "Plantar Warts",
  },
  {
    id: "hepatitis",
    label: "Hepatitis",
  },
  {
    id: "herpes",
    label: "Herpes",
  },
  {
    id: "skinConditions",
    label: "Skin Conditions",
  },
];

// zod schemas
const bookNowFormSchema = z.object({
  // must have name property that is a string with a min length of 1 char
  // if not this, the FormMessage is auto updated to reflect the zod validation
  firstName: z.string().min(1, {
    message: "First name must be at least 2 characters",
  }),
  lastName: z.string().min(1, {
    message: "Last Name must be at least 2 characters",
  }),
  email: z.string().email(),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters",
  }),
  sex: z.string({
    required_error: "Please select a Sex",
  }),
  gender: z.string({
    required_error: "Please select a Gender",
  }),
  dateOfBirth: z.date({
    required_error: "A date of birth is required.",
  }),
  personalHealthNumber: z.string().min(5, {
    message: "Personal Health Number must be at least 5 characters",
  }),
  guardian: z.string().min(2, {
    message: "Guardian must be at least 2 characters",
  }),
  emergencyContact: z.string().min(2, {
    message: "Emergency contact must be at least 2 characters",
  }),
  occupation: z.string().min(2, {
    message: "Occupation must be at least 2 characters",
  }),
  employer: z.string().min(2, {
    message: "Employer must be at least 2 characters",
  }),
  familyDoctor: z.string().min(2, {
    message: "Family doctor must be at least 2 characters",
  }),
  referringProfessional: z.string().min(2, {
    message: "Please put NA if not applicable",
  }),
  howDidYouHearAboutUs: z.string().min(2, {
    message: "How did you hear about us must be at least 2 characters",
  }),
  referredTo: z.string().min(2, {
    message: "Referred to must be at least 2 characters",
  }),
  healthConcerns: z
    .string()
    .min(10, {
      message: "Health concerns must be at least 10 characters.",
    })
    .max(160, {
      message: "Health concerns must not be longer than 150 characters.",
    }),
  whatIsMakingItBetter: z
    .string()
    .min(2, {
      message: "What is making it better must be at least 2 characters.",
    })
    .max(160, {
      message:
        "What is making it better must not be longer than 150 characters.",
    }),
  whatIsMakingItWorse: z
    .string()
    .min(2, {
      message: "What is making it worse must be at least 2 characters.",
    })
    .max(160, {
      message:
        "What is making it worse must not be longer than 150 characters.",
    }),
  currentMedications: z
    .string()
    .min(2, {
      message: "Please put NA if not applicable",
    })
    .max(160, {
      message:
        "Current medications and conditions treated must not be longer than 150 characters.",
    }),
  knownAllergiesOrHypersensitivities: z
    .string()
    .min(2, {
      message: "Please put NA if not applicable",
    })
    .max(160, {
      message:
        "Known allergies or hypersensitivies must not be longer than 150 characters.",
    }),
  majorAccidentsOrSurgeries: z
    .string()
    .min(2, {
      message: "Please put NA if not applicable",
    })
    .max(160, {
      message:
        "Major accidents or surgeries must not be longer than 150 characters.",
    }),
  familyHistory: z
    .string()
    .min(2, {
      message: "Please put NA if not applicable",
    })
    .max(160, {
      message: "Family history must not be longer than 150 characters.",
    }),
  activitiesSportsHobbies: z
    .string()
    .min(2, {
      message: "Please put NA if not applicable",
    })
    .max(160, {
      message:
        "Activities/sports/hobbies must not be longer than 150 characters.",
    }),
  treatmentExpectation: z
    .string()
    .min(2, {
      message: "Treatment expecation must be longer than 2 characters",
    })
    .max(160, {
      message: "Treatment expecation must not be longer than 150 characters.",
    }),
  otherTherapyTreatment: z
    .string()
    .min(2, {
      message: "Please put NA if not applicable",
    })
    .max(160, {
      message:
        "Other therapy treatments must not be longer than 150 characters.",
    }),
  cardiovascular: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "Please put NA if none apply",
    }),
  respiratory: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "Please put NA if none apply",
    }),
  neurological: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "Please put NA if none apply",
    }),
  headNeck: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Please put NA if none apply",
  }),
  digestive: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Please put NA if none apply",
  }),
  otherConditions: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "Please put NA if none apply",
    }),
  accuracyOfInformation: z.date({
    required_error: "Date required",
  }),
  privacyAndSharingOfInformation: z.date({
    required_error: "Date required",
  }),
  cancellationPolicy: z.date({
    required_error: "Date required",
  }),
  lateArrivalPolicy: z.date({
    required_error: "Date required",
  }),
  inappropriateBehaviourPolicy: z.date({
    required_error: "Date required",
  }),
  treatmentConsentStatement: z.date({
    required_error: "Date required",
  }),
  minorConsent: z.date({
    required_error: "Date required",
  }),
  paymentPolicy: z.date({
    required_error: "Date required",
  }),
  communicationConsent: z.date({
    required_error: "Date required",
  }),
  signature: z.date({
    required_error: "Date required",
  }),
});
// z.infer is used to extract the type info from a zod schema
// and the type to be extracted is typeof formSchema
// extract the inferred type
type BookNowFormSchema = z.infer<typeof bookNowFormSchema>;

export default function BookNowForm() {
  const [isloading, setIsLoading] = useState(false);

  // 1. Define Form
  // methods on form i.e. form.handleSubmit are from the react-hook-form lib
  // all this is directly from shadcn form docs
  const bookNowForm = useForm<BookNowFormSchema>({
    // resolver function from react-hook-lib allows integration with
    // external validation libs like zod
    resolver: zodResolver(bookNowFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      address: "",
      personalHealthNumber: "",
      guardian: "",
      emergencyContact: "",
      occupation: "",
      employer: "",
      familyDoctor: "",
      referringProfessional: "",
      howDidYouHearAboutUs: "",
      referredTo: "",
      healthConcerns: "",
      whatIsMakingItBetter: "",
      whatIsMakingItWorse: "",
      currentMedications: "",
      knownAllergiesOrHypersensitivities: "",
      majorAccidentsOrSurgeries: "",
      familyHistory: "",
      activitiesSportsHobbies: "",
      treatmentExpectation: "",
      otherTherapyTreatment: "",
      cardiovascular: ["NA"],
      neurological: ["NA"],
      headNeck: ["NA"],
      digestive: ["NA"],
      otherConditions: ["NA"],
    },
  });

  // 2. Define Submit Handler
  const onSubmit = async (values: BookNowFormSchema) => {
    try {
      setIsLoading(true);

      await fetch("/api/booknow", {
        method: "POST",
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
        }),
      });
    } catch (error) {
      console.log("here", error);
      toast.error(`Something went wrong, error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...bookNowForm}>
        <form
          onSubmit={bookNowForm.handleSubmit(onSubmit)}
          className=" space-y-2 w-full md:w-1/2"
        >
          <FormField
            control={bookNowForm.control}
            name="firstName"
            // ctrl click to see the field prop from react-hook-form
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Steve"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="lastName"
            // ctrl click to see the field prop from react-hook-form
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Carell"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="email"
            // ctrl click to see the field prop from react-hook-form
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="JimHalpert@gmail.com"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="phoneNumber"
            // ctrl click to see the field prop from react-hook-form
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="7802225555"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="address"
            // ctrl click to see the field prop from react-hook-form
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="123 Blueberry Lane"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="sex"
            // ctrl click to see the field prop from react-hook-form
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sex</FormLabel>
                <FormMessage />
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Sex" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="gender"
            // ctrl click to see the field prop from react-hook-form
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormMessage />
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                    <SelectItem value="Non-binary">Non-Binary</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="personalHealthNumber"
            // ctrl click to see the field prop from react-hook-form
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personal Health Number</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="12345-0000"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="guardian"
            // ctrl click to see the field prop from react-hook-form
            render={({ field }) => (
              <FormItem>
                <FormLabel>Guardian</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Michael Scott"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={bookNowForm.control}
            name="emergencyContact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Emergency Contact</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Michael Scott"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="occupation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Occupation</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Dunder Mifflin Manager"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="employer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employer</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Dunder Mifflin"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="familyDoctor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Family Doctor</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Dr. Brown"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="referringProfessional"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name of Referring Professional</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Referring Professional"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="howDidYouHearAboutUs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How Did You Hear About Us?</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Through a friend"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="referredTo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Who were you referred to?</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Jason Khaled"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="healthConcerns"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Health concerns/Reason for scheduled visit:
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Shoulder and hips are bothering me"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="whatIsMakingItBetter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What Is making it better?</FormLabel>
                <FormMessage />
                <FormControl>
                  <Textarea
                    placeholder="Osteopathy treatments"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="whatIsMakingItWorse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What Is making it worse?</FormLabel>
                <FormMessage />
                <FormControl>
                  <Textarea
                    placeholder="Being sedentary"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="currentMedications"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Current medications and conditions treated
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Textarea
                    placeholder="List medications"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="knownAllergiesOrHypersensitivities"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Known allergies or hypersensitivies</FormLabel>
                <FormMessage />
                <FormControl>
                  <Textarea
                    placeholder="Medication, foods, oils, seasonal etc..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="majorAccidentsOrSurgeries"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Major accidents or surgeries</FormLabel>
                <FormDescription>Please also include date</FormDescription>
                <FormMessage />
                <FormControl>
                  <Textarea
                    placeholder="Fractures, rods, pins, plates, shunts, implants etc"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="familyHistory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Family history</FormLabel>
                <FormMessage />
                <FormControl>
                  <Textarea
                    placeholder="Family history"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="activitiesSportsHobbies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Activities/sports/hobbies</FormLabel>
                <FormMessage />
                <FormControl>
                  <Textarea
                    placeholder="Jiu Jitsu"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="treatmentExpectation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Treatment expectation</FormLabel>
                <FormMessage />
                <FormControl>
                  <Textarea
                    placeholder="To have more pain free range of motion"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="otherTherapyTreatment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other therapy/treatment in last 3 months</FormLabel>
                <FormMessage />
                <FormControl>
                  <Textarea
                    placeholder="Massage/Chiropractor/Physiotherapy/Manual Osteopath/Acupuncture"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <h1>Past medical history:</h1>
          <FormField
            control={bookNowForm.control}
            name="cardiovascular"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Cardiovascular</FormLabel>
                  <FormDescription>
                    Select the options that apply or put NA
                  </FormDescription>
                </div>
                {cardiovascular.map((option) => (
                  <FormField
                    key={option.id}
                    control={bookNowForm.control}
                    name="cardiovascular"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={option.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, option.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== option.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="respiratory"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Respiratory</FormLabel>
                  <FormDescription>
                    Select the options that apply or put NA
                  </FormDescription>
                </div>
                {respiratory.map((option) => (
                  <FormField
                    key={option.id}
                    control={bookNowForm.control}
                    name="respiratory"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={option.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, option.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== option.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="neurological"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Neurological</FormLabel>
                  <FormDescription>
                    Select the options that apply or put NA
                  </FormDescription>
                </div>
                {neurological.map((option) => (
                  <FormField
                    key={option.id}
                    control={bookNowForm.control}
                    name="neurological"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={option.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, option.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== option.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="headNeck"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Head/Neck</FormLabel>
                  <FormDescription>
                    Select the options that apply or put NA
                  </FormDescription>
                </div>
                {headNeck.map((option) => (
                  <FormField
                    key={option.id}
                    control={bookNowForm.control}
                    name="headNeck"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={option.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, option.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== option.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="digestive"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Digestive</FormLabel>
                  <FormDescription>
                    Select the options that apply or put NA
                  </FormDescription>
                </div>
                {digestive.map((option) => (
                  <FormField
                    key={option.id}
                    control={bookNowForm.control}
                    name="digestive"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={option.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, option.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== option.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="otherConditions"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Other Conditions</FormLabel>
                  <FormDescription>
                    Select the options that apply or put NA
                  </FormDescription>
                </div>
                {otherConditions.map((option) => (
                  <FormField
                    key={option.id}
                    control={bookNowForm.control}
                    name="otherConditions"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={option.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, option.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== option.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <h1>
            Please put Today&apos;s Date for each Policy indicating that you
            agree to each Policy
          </h1>
          <FormField
            control={bookNowForm.control}
            name="accuracyOfInformation"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Accuracy of Information</FormLabel>
                <FormDescription>
                  I certify that the above medical information is correct to my
                  knowledge.
                </FormDescription>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="privacyAndSharingOfInformation"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Privacy and Sharing of Information</FormLabel>
                <FormDescription>
                  I authorize the clinic and its associated health professionals
                  to collect my personal and medical information as documented
                  above. In addition, I authorize the clinic and its associated
                  health professionals to communicate with my family doctor
                  and/or referring doctor as deemed necessary for my beneficial
                  treatment. I also understand that my personal and medical
                  information is confidential and will only be disclosed to
                  third parties with my permission.
                </FormDescription>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="cancellationPolicy"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Cancellation Policy</FormLabel>
                <FormDescription>
                  Please arrive 5 minutes prior to your appointment to allow
                  time for any required paperwork as well as answer intake
                  questions your therapist may have. Arriving after your
                  appointment time may result in lost time from your treatment
                  as we are unable to exceed that reserved time without
                  affecting the next client session. Full service fees will be
                  charged even when sessions are shortened due to late arrival.
                </FormDescription>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="lateArrivalPolicy"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Late Arrival Policy</FormLabel>
                <FormDescription>
                  Please arrive 5 minutes prior to your appointment to allow
                  time for any required paperwork as well as answer intake
                  questions your therapist may have. Arriving after your
                  appointment time may result in lost time from your treatment
                  as we are unable to exceed that reserved time without
                  affecting the next client session. Full service fees will be
                  charged even when sessions are shortened due to late arrival.
                </FormDescription>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="inappropriateBehaviourPolicy"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Inappropriate Behaviour Policy</FormLabel>
                <FormDescription>
                  Our manual therapies are for relaxation & therapeutic purposes
                  only. There is absolutely no sexual component to treatment
                  whatsoever. Any insinuation, joke, gesture, conversations or
                  request will result in immediate termination of the session
                  and a refusal of any and all future services. Full service
                  fees will be charged regardless the length of the session.
                </FormDescription>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="treatmentConsentStatement"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Treatment Consent Statement</FormLabel>
                <FormDescription>
                  I understand that services are provided for stress reduction,
                  relaxation, relief from muscular tension and improvement of
                  circulation & energy flow. If I experience pain or discomfort
                  during my session, I will immediately inform my therapist so
                  that pressure/strokes or any other aspect of the treatment can
                  be adjusted to to my level of comfort/satisfaction. While
                  rare, some clients may experience short-term aggravation of
                  symptoms or bruising as a result of the treatment given. I
                  understand that the services offered are not a substitute for
                  medical care. I affirm that I have notified the therapist of
                  all medical conditions and injuries. I agree to inform the
                  therapist of any changes in my health. I understand that there
                  shall be no liability on the therapist’s part should I forget
                  to do so. By signing this release, I hereby waive and release
                  the therapist and Urban Massage & Wellness Inc. from any and
                  all liability, past, present & future relating to manual
                  osteopathy & massage therapies including (but not limited to)
                  myofascial cupping, hot stone treatments, Rapid NFR & fascial
                  stretch therapy.
                </FormDescription>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="minorConsent"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>
                  Minor Consent (Pertains to clients 17 & under only)
                </FormLabel>
                <FormDescription>
                  I have competed the intake form for the above mentioned minor
                  and informed the therapist of any and all relevant medical
                  history and concerns. I understand the scope of manual therapy
                  and that it is not meant to diagnose, treat or cure any
                  conditions and is not a replacement for standard medical care.
                  I give permission for my minor child to receive treatment(s)
                  at Urban Massage & Wellness and agree to all of the above
                  terms.
                </FormDescription>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="paymentPolicy"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Payment Policy</FormLabel>
                <FormDescription>
                  Payment is due at time of treatment. In the event my claim(s)
                  are declined or come back as pending by the insurer/plan
                  administrator, I understand that I remain responsible for the
                  payment to the provider for any services rendered and/or
                  supplies provided.
                </FormDescription>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <FormField
            control={bookNowForm.control}
            name="communicationConsent"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Communication Consent</FormLabel>
                <FormDescription>
                  I understand that the therapist is an Independent Contractor
                  and I consent to them contacting me directly, by the methods
                  for which I have provided my contact information, in regards
                  to matters related to my appointments, including booking,
                  cancellations, or rescheduling, and my treatment plan,
                  including follow-ups and additional support.
                </FormDescription>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          {/* disable buttons if loading */}
          <div className=" flex justify-center !mt-4">
            <Button disabled={isloading} type="submit">
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
