"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignup } from "../hooks/use-signup";
import { signupSchema, SignupDataForm } from "../lib/signup-schemas";
import SignupFormFields from "./SignupFormFields";
import { Button } from "@kiroku/ui";

interface SignupFormProps {
  onNavigateBack: () => void;
}

export const SignupForm = ({ onNavigateBack }: SignupFormProps) => {
  const form = useForm<SignupDataForm>({
    resolver: zodResolver(signupSchema),
    mode: "onSubmit",
    defaultValues: {
      userId: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { signup, isLoading, isError } = useSignup();

  const onSubmit = (data: SignupDataForm) => {
    signup({
      userId: data.userId,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  };

  return (
    <main>
      <section>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <SignupFormFields form={form} />
          <div className="flex justify-center p-1">
            <Button type="submit" className="w-full mt-2">
              회원가입
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};
