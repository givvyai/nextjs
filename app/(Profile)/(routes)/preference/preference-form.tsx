"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";

const PreferenceFormSchema = z.object({
  age: z
    .number()
    .positive({ message: "Age must be a positive number." })

    .max(150, { message: "Age must be less than or equal to 150." }),
  gender: z.enum(["male", "female"], {
    required_error: "Please select a gender.",
  }),
  preferredGiftType: z.enum(["tangible", "experiences", "any"], {
    required_error: "Please select your preferred gift type.",
  }),

  hobbyInterest: z.string(),
  occupation: z.string(),
  briefDescription: z.string(),
});

type PreferenceFormValues = z.infer<typeof PreferenceFormSchema>;

// Default values can be set as needed
const defaultValues: Partial<PreferenceFormValues> = {
  age: 25,
  gender: "male",
  preferredGiftType: "any",
  hobbyInterest: "",
  occupation: "",
  briefDescription: "",
};

export function PreferenceForm() {
  const form = useForm<PreferenceFormValues>({
    resolver: zodResolver(PreferenceFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: PreferenceFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <h3 className="my-2 text-lg font-semibold">Preference</h3>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Your age" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferredGiftType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Gift Type</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="tangible">Tangible gift</SelectItem>
                    <SelectItem value="experiences">Experiences</SelectItem>
                    <SelectItem value="any">Any</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hobbyInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hobby and Interest</FormLabel>
              <FormControl>
                <Input placeholder="Your hobbies and interests" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Occupation</FormLabel>
              <FormControl>
                <Input placeholder="Your occupation" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="briefDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brief Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="A brief description about yourself"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save Preference</Button>
      </form>
    </Form>
  );
}
