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
import MotionTitle from "@/components/Motion/MotionTitle";

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
    },
  });

  const cardiovascular = [
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
  ];

  const respiratoryOptions = [
    "Chronic cough",
    "Shortness of breath",
    "Asthma",
    "COPD",
    "Bronchitis",
    "Emphysema",
    "Sinusitis",
  ];

  const neurologicalOptions = [
    "Hypersensitivity",
    "Dizziness",
    "Fainting",
    "Parkinson",
    "Multiple Sclerosis",
    "Cerebral Palsy",
    "Bells Palsy",
    "Spinal Injury",
  ];

  const headNeckOptions = [
    "Headaches",
    "Migraines",
    "Concussion",
    "Vision loss",
    "Hearing loss",
    "Ear problems",
    "Corrective lenses / contacts",
  ];

  const digestiveOptions = [
    "Constipation",
    "Irritable bowel syndrome",
    "Inflammatory bowel disease",
    "Crohn’s Disease",
    "Colostomy Bag",
  ];

  const otherConditionsOptions = [
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
  ];

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
                    placeholder="list medications"
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
                    placeholder="medication, foods, oils, seasonal etc..."
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
                    placeholder="fractures, rods, pins, plates, shunts, implants etc"
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
                    placeholder="family history"
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
            name="otherTherapyTreatment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cardiovascular</FormLabel>
                <FormDescription>
                  Please select applicable from dropdown
                </FormDescription>
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
