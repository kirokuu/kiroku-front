import { UseFormReturn } from "react-hook-form";
import { SignupDataForm } from "../lib/signup-schemas";
import { Input } from "@kiroku/ui";

interface SignupFormFieldsProps {
  form: UseFormReturn<SignupDataForm>;
}

export default function SignupFormFields({ form }: SignupFormFieldsProps) {
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

      <div className="space-y-2">
        <Input
          label="비밀번호 확인"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
          id="confirmPassword"
          type="password"
          required
          placeholder="비밀번호"
        />
      </div>

      <div className="space-y-2">
        <Input
          label="	닉네임"
          error={errors.name?.message}
          {...register("name")}
          id="nickname"
          type="text"
          required
          placeholder="닉네임"
        />
      </div>
    </div>
  );
}
