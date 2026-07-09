import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactSchema, ContactInput } from "../schemas/contactSchema";

// RATIONALE: Separating form validation/submission logic from the Contact UI component. Uses React Hook Form for inputs and TanStack Query for async server state.
export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      project: "",
    },
  });

  const sendEmailMutation = useMutation({
    mutationFn: async (data: ContactInput) => {
      // Simulate API call to email server with a 1.5s delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return data;
    },
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = (data: ContactInput) => {
    sendEmailMutation.mutate(data);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting: sendEmailMutation.isPending,
    isSuccess: sendEmailMutation.isSuccess,
    isError: sendEmailMutation.isError,
    resetMutation: sendEmailMutation.reset,
  };
};
