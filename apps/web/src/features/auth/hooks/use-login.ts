import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios-instance";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
interface LoginData {
  userId: string;
  password: string;
}

interface LoginResponse {
  code: string;
  result: {
    accessToken: string;
    refreshToken: string;
  };
}

const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const response = await axiosInstance.post("/login/basic", data);
  return response.data;
};

export const useLogin = () => {
  const router = useRouter();
  const {
    mutate: login,
    isPending: isLoading,
    isError,
    error,
  } = useMutation<LoginResponse, Error, LoginData>({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("로그인 성공", data);
      localStorage.setItem("accessToken", data.result.accessToken);
      localStorage.setItem("refreshToken", data.result.refreshToken);
      router.push("/home");
    },
    onError: (error) => {
      console.log("로그인 실패", error);
      toast.error(
        `로그인에 실패했습니다.
         아이디 또는 비밀번호를 확인해주세요.`
      );
    },
  });

  return { login, isLoading, isError, error };
};
