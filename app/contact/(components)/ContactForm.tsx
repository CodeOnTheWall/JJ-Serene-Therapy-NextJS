"use client";

import { useState } from "react";

import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// all dl from shadcn, including react-hook-form as its built into shadcns form
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

// zod schemas
const contactFormSchema = z.object({
  // must have name property that is a string with a min length of 1 char
  // if not this, the FormMessage is auto updated to reflect the zod validation
  firstName: z.string().min(1, {
    message: "First name must be at least 2 character",
  }),
  lastName: z.string().min(1, {
    message: "Last Name must be at least 2 characters",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits",
  }),
  subject: z.string().min(1, {
    message: "Subject must not be empty",
  }),
  message: z.string().min(1, {
    message: "Message must not be empty",
  }),
  email: z.string().email(),
});
// z.infer is used to extract the type info from a zod schema
// and the type to be extracted is typeof formSchema
// extract the inferred type
type ContactFormSchema = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isloading, setIsLoading] = useState(false);

  // 1. Define Form
  // methods on form i.e. form.handleSubmit are from the react-hook-form lib
  // all this is directly from shadcn form docs
  const contactForm = useForm<ContactFormSchema>({
    // resolver function from react-hook-lib allows integration with
    // external validation libs like zod
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // 2. Define Submit Handler
  const onSubmit = async (values: ContactFormSchema) => {
    try {
      setIsLoading(true);
      toast.success("Email opening up...", {
        duration: 4000,
      });

      window.location.href = `mailto:jjserenetherapy@hotmail.com?subject=${values.subject}
      &body=Hi, my name is ${values.firstName} ${values.lastName}. ${values.message}. I can be reached at ${values.phoneNumber} or ${values.email}`;

      await fetch("/api/clients", {
        method: "POST",
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          subject: values.subject,
          message: values.message,
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
      <Form {...contactForm}>
        <form
          onSubmit={contactForm.handleSubmit(onSubmit)}
          className=" space-y-2 w-full md:w-1/2"
        >
          <FormField
            control={contactForm.control}
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
            control={contactForm.control}
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
            control={contactForm.control}
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
            control={contactForm.control}
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
            control={contactForm.control}
            name="subject"
            // ctrl click to see the field prop from react-hook-form
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="Shoulder"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name="message"
            // ctrl click to see the field prop from react-hook-form
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    // disabled if loading
                    disabled={isloading}
                    placeholder="I hurt my shoulder during exercise"
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
