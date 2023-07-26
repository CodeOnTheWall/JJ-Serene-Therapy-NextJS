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
  phoneNumber: z.number().min(10, {
    message: "Phone number must be at least 10 digits",
  }),
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
    },
  });

  // 2. Define Submit Handler
  const onSubmit = async (values: ContactFormSchema) => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/clients", {
        method: "POST",
        body: JSON.stringify({
          firstName: values.firstName,
        }),
      });

      const responseData = await response.json();
      // toast.success(`E-commerce store ${responseData.name} created`);
      // router.push(`/${responseData.id}`);
      // other method that has less bugs since it causes a full page reload
      // with method below, the modal goes away
      window.location.assign(`/${responseData.id}`);
    } catch (error) {
      toast.error(`Something went wrong, error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...contactForm}>
      <form onSubmit={contactForm.handleSubmit(onSubmit)}>
        <FormField
          control={contactForm.control}
          name="firstName"
          // ctrl click to see the field prop from react-hook-form
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  // disabled if loading
                  disabled={isloading}
                  placeholder="Steve"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
              <FormControl>
                <Input
                  // disabled if loading
                  disabled={isloading}
                  placeholder="Carell"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
              <FormControl>
                <Input
                  // disabled if loading
                  disabled={isloading}
                  placeholder="7802225555"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className=" pt-6 space-x-2 flex items-center justify-end w-full">
          {/* disable buttons if loading */}
          <Button disabled={isloading} variant="outline">
            Cancel
          </Button>
          <Button disabled={isloading} type="submit">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
