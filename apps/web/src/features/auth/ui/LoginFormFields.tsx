import { UseFormReturn } from "react-hook-form";
import { LoginDataForm } from "../lib/schemas";

interface LoginFormFieldsProps {
  form: UseFormReturn<LoginDataForm>;
}

export default function LoginFormFields({ form }: LoginFormFieldsProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      <div>
        <label htmlFor="email" className="sr-only">
          이메일
        </label>
        <input
          {...register("userId")}
          id="email"
          type="text"
          required
          className="relative block w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="이메일"
        />
        {errors.userId && (
          <p id="email-error" className="text-red-500 text-sm">
            {errors.userId.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          비밀번호
        </label>
        <input
          {...register("password")}
          id="password"
          type="password"
          required
          className="relative block w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="비밀번호"
        />
        {errors.password && (
          <p id="password-error" className="text-red-500 text-sm">
            {errors.password.message}
          </p>
        )}
      </div>
    </>
  );
}
