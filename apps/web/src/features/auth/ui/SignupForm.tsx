"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/use-login";
import { signupSchema, SignupDataForm } from "../lib/signup-schemas";
import SignupFormFields from "./SignupFormFields";
import SocialLoginButton from "./SocialLoginButton";
import { Button } from "@kiroku/ui";
import Link from "next/link";

export default function SignupForm() {
  const form = useForm<SignupDataForm>({
    resolver: zodResolver(signupSchema),
    mode: "onSubmit",
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  const { login, isLoading } = useLogin();

  const onSubmit = (data: SignupDataForm) => {
    login(data);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <section className="max-w-md w-full space-y-8">
        <header>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            로그인
          </h1>
        </header>

        <form className="mt-8 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset className="space-y-3">
            <legend className="sr-only">로그인 정보 입력</legend>
            <SignupFormFields form={form} />
          </fieldset>

          <footer>
            <Button
              type="submit"
              disabled={isLoading}
              aria-describedby="submit-status"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </Button>
            <Link
              href="/signup"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              회원가입
            </Link>
            {isLoading && (
              <span id="submit-status" className="sr-only">
                로그인 처리 중입니다.
              </span>
            )}
          </footer>
        </form>

        <aside className="space-y-3">
          <SocialLoginButton provider="google">구글로 로그인</SocialLoginButton>
          <SocialLoginButton provider="kakao">
            카카오로 로그인
          </SocialLoginButton>
        </aside>
      </section>
    </main>
  );
}
