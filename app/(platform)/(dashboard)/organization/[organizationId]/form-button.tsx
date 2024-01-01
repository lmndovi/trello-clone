import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

export const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="flex items-center" disabled={pending} type="submit">
      Submit
    </Button>
  );
};
