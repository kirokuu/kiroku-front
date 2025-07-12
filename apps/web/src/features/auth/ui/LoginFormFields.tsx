import { UseFormReturn } from "react-hook-form";
import { LoginDataForm } from "../lib/schemas";
import { Input } from "@kiroku/ui";

interface LoginFormFieldsProps {
  form: UseFormReturn<LoginDataForm>;
}

export default function LoginFormFields({ form }: LoginFormFieldsProps) {
  const { register } = form;
  const { errors } = form.formState;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Input
          label="이메일"
          error={errors.userId?.message}
          {...register("userId")}
          id="email"
          type="text"
          required
          placeholder="이메일"
        />
      </div>

      <div className="space-y-2">
        <Input
          label="비밀번호"
          error={errors.password?.message}
          {...register("password")}
          id="password"
          type="password"
          required
          placeholder="비밀번호"
        />
      </div>
    </div>
  );
}
