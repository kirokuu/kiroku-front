import React from "react";
import Image from "next/image";
import { Button } from "@kiroku/ui";
import { OAUTH_URLS } from "../config/oauth";

type SocialProvider = "google" | "kakao";
interface SocialLoginButtonProps {
  provider: SocialProvider;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}
export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  onClick,
  className = "",
  children,
}) => {
  const defaultText =
    provider === "google" ? "Google로 로그인" : "Kakao로 로그인";

  const baseStyle =
    "w-full flex items-center justify-center gap-3 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

  const providerStyles = {
    google:
      "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-indigo-500",
    kakao:
      "bg-yellow-400 border-transparent text-gray-800 hover:bg-yellow-500 focus:ring-yellow-400",
  };

  const providerStyle = providerStyles[provider];

  const iconPath =
    provider === "google"
      ? "/icons/social-icons/google_logo.svg"
      : "/icons/social-icons/kakao_logo.svg";

  return (
    <Button
      onClick={() => {
        window.location.href = OAUTH_URLS[provider];
      }}
      className={`${baseStyle} ${providerStyle} ${className}`}
      type="button"
    >
      <Image
        src={iconPath}
        alt={`${provider} logo`}
        width={20}
        height={20}
        className="object-contain"
      />
      <span>{children || defaultText}</span>
    </Button>
  );
};
