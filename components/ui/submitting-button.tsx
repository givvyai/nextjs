"use client";
import { Button } from "@/components/ui/button";
//@ts-ignore
import { useFormStatus } from "react-dom";
import { Spinner } from "@/components/spinner";

export const SubmitButton = (props?: any) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" {...props}>
      {pending ? <Spinner className="text-white" size="lg" /> : "Submit"}
    </Button>
  );
};
