import { z } from "zod";

export const loginSchema = z.object({
  userId: z
    .string()
    .min(1, "이메일을 입력해주세요.")
    .email("이메일 형식이 올바르지 않습니다."),
  password: z
    .string()
    .min(1, "비밀번호를 입력해주세요.")
    .min(8, "비밀번호는 8자 이상이어야 합니다."),
});

export type LoginDataForm = z.infer<typeof loginSchema>;
