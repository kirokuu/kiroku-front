"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/use-login";
import { loginSchema, LoginDataForm } from "../lib/login-schemas";
import { LoginFormFields } from "./LoginFormFields";
import { Button } from "@kiroku/ui";

interface LoginFormProps {
  onNavigateToSignup: () => void;
  onNavigateBack: () => void;
}
export const LoginForm = ({
  onNavigateToSignup,
  onNavigateBack,
}: LoginFormProps) => {
  const form = useForm<LoginDataForm>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  const { login } = useLogin();

  const onSubmit = (data: LoginDataForm) => {
    login(data);
  };

  return (
    <main>
      <section>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <LoginFormFields form={form} />
          <Button
            type="button"
            variant="link"
            onClick={onNavigateToSignup}
            className="block text-center text-xs text-slate-500 hover:text-slate-700 mt-2 pl-1"
          >
            계정이 없으신가요?
          </Button>
        </form>
      </section>
    </main>
  );
};
