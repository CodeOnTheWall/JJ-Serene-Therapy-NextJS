"use client";

import { useState } from "react";

// For the calendar
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import { toast } from "react-hot-toast";
import { useForm, useFieldArray } from "react-hook-form";
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
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits",
  }),
  email: z.string().email(),
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
    message: "Referring professional must be at least 2 characters",
  }),
  howDidYouHearAboutUs: z.string().min(2, {
    message: "How did you hear about us must be at least 2 characters",
  }),
  referredTo: z.string().min(2, {
    message: "Referred to must be at least 2 characters",
  }),
  dateAddedByClient: z.date().min(new Date(1900, 0, 1), {
    message: "Invalid date added by client",
  }),
  healthConcerns: z.string().min(2, {
    message: "Health concerns must be at least 2 characters",
  }),
  whatIsMakingItBetter: z.string().min(2, {
    message: "What is making it better must be at least 2 characters",
  }),
  whatIsMakingItWorse: z.string().min(2, {
    message: "What is making it worse must be at least 2 characters",
  }),
  currentMedications: z.array(
    z.object({
      medication: z.string().min(2, {
        message: "Medication must be at least 2 characters",
      }),
      conditionsTreated: z.string().min(2, {
        message: "Conditions treated must be at least 2 characters",
      }),
    })
  ),
});
// z.infer is used to extract the type info from a zod schema
// and the type to be extracted is typeof formSchema
// extract the inferred type
type BookNowFormSchema = z.infer<typeof bookNowFormSchema>;

export default function BookNowForm() {
  const [isloading, setIsLoading] = useState(false);
  const [currentMedications, setCurrentMedications] = useState([
    { medication: "", conditionsTreated: "" },
  ]);
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
      currentMedications: [{ medication: "", conditionsTreated: "" }],
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

  // for form arrays
  const { fields, append } = useFieldArray({
    name: "currentMedications",
    control: bookNowForm.control,
  });

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
                          "w-[240px] pl-3 text-left font-normal",
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
                <FormLabel>Referring Professional</FormLabel>
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
                <FormLabel>Health Concerns</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Health Concerns"
                    {...field}
                  />
                </FormControl>
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
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Osteopathy treatment"
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
                <FormLabel>What Is making it worse</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Sedentary lifestyle"
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
                <FormLabel>What Is making it worse</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Sedentary lifestyle"
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
