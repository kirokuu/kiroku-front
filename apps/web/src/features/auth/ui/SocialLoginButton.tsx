import React from "react";

type SocialProvider = "google" | "kakao";
interface SocialLoginButtonProps {
  provider: SocialProvider;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}
const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  onClick,
  className = "",
  children,
}) => {
  const defaultText =
    provider === "google" ? "Google로 로그인" : "Kakao로 로그인";
  return (
    <button onClick={onClick} className={className}>
      <span>{children || defaultText}</span>
    </button>
  );
};

export default SocialLoginButton;
