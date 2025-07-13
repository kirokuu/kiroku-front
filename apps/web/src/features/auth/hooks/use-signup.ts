import axiosInstance from "@/lib/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

interface SignupData {
  userId: string;
  password: string;
  confirmPassword: string;
}

const signupUser = async (data: SignupData) => {
  const response = await axiosInstance.post("/signup/basic", data);
  return response.data;
};

export const useSignup = () => {
  const {
    mutate: signup,
    isPending: isLoading,
    isError,
  } = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      toast.success("회원가입 성공");
    },
    onError: () => {
      toast.error("회원가입 실패");
    },
  });

  return { signup, isLoading, isError };
};
