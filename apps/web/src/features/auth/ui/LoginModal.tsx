"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SocialLoginButton } from "./SocialLoginButton";
import { Separator, Button } from "@kiroku/ui";
import { Mail, X, ArrowLeft } from "lucide-react";
import { TermsNotice } from "@/shared/ui/TermsNotice";
import Image from "next/image";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

interface LoginModalProps {
  onClose: () => void;
}

// 화면 전환을 제어할 상태
type View = "social" | "emailLogin" | "signup";

export function LoginModal({ onClose }: LoginModalProps) {
  const [view, setView] = useState<View>("social");

  const handleBack = () => {
    if (view === "signup") {
      // 회원가입 화면에서는 -> 이메일 로그인 화면으로
      setView("emailLogin");
    } else if (view === "emailLogin") {
      // 이메일 로그인 화면에서는 -> 소셜 로그인 화면으로
      setView("social");
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const direction = view === "signup" ? 1 : -1;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl flex flex-col items-stretch w-[95vw] max-w-lg">
      {/* --- 상단 헤더 (공통) --- */}
      <div className="w-full flex items-center">
        <Image
          className="w-12 h-12"
          src="/icons/logo/logo.png"
          alt="Kiroku"
          width={100}
          height={100}
        />
        <Button
          variant="none"
          className="ml-auto w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full p-0"
          onClick={view === "social" ? onClose : handleBack}
          aria-label={view === "social" ? "Close" : "Back"}
        >
          {view === "social" ? (
            <X className="w-4 h-4" />
          ) : (
            <ArrowLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* --- 타이틀 (공통) --- */}
      <div className="w-full flex flex-col pl-1.5 text-left mb-4">
        <h2 className="font-bold text-slate-800 mb-1 text-md">
          나의 모든 것을 한 곳에서 관리하세요.
        </h2>
        <p className="text-slate-400 text-sm">
          {view === "signup"
            ? "새로운 Kiroku 계정 만들기"
            : "Kiroku 계정에 로그인"}
        </p>
      </div>

      {/* --- 컨텐츠 전환 영역 --- */}
      <div className="relative min-h-[240px] overflow-x-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {view === "social" && (
            <motion.div
              key="social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center"
            >
              <Image
                src="/icons/image/login-cat.png"
                alt="Login Cat"
                width={150}
                height={150}
                className="mb-4"
              />
              <SocialLoginButton provider="google" className="mb-2 w-full">
                Google로 로그인
              </SocialLoginButton>
              <SocialLoginButton provider="kakao" className="mb-4 w-full">
                Kakao로 로그인
              </SocialLoginButton>
              <Separator orientation="horizontal" className="w-full mb-2" />
              <Button
                variant="link"
                className="text-slate-400 hover:text-slate-700 hover:bg-transparent"
                onClick={() => setView("emailLogin")}
              >
                <Mail className="w-4 h-4 mr-1" />
                이메일로 계속하기
              </Button>
            </motion.div>
          )}

          {view === "emailLogin" && (
            <motion.div
              key="emailLogin"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute w-full"
            >
              <LoginForm
                onNavigateToSignup={() => setView("signup")}
                onNavigateBack={handleBack}
              />
            </motion.div>
          )}

          {view === "signup" && (
            <motion.div
              key="signup"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute w-full"
            >
              <SignupForm onNavigateBack={handleBack} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- 약관 안내 (공통) --- */}
      <footer className="mt-4">
        <TermsNotice />
      </footer>
    </div>
  );
}

export default LoginModal;
