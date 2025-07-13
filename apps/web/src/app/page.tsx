"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Separator } from "@kiroku/ui";
import SocialLoginButton from "@/features/auth/ui/SocialLoginButton";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { TermsNotice } from "@/shared/ui/TermsNotice";

export default function HomePage() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-violet-500 via-teal-500 to-cyan-500 bg-[length:300%_300%] animate-animated-gradient text-white">
      <section className="relative text-center p-8 max-w-3xl mx-auto min-h-[480px] flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_20%)]">
          Kiroku
        </h1>
        <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-xl">
          당신의 운동, 식단, 목표, 생각을 한 곳에서 기록하고 관리하세요.
          <br />
          가장 중요한 것에 집중할 수 있도록, Kiroku가 함께합니다.
        </p>

        <div style={{ minHeight: 56 }}>
          {!showOptions && (
            <motion.div
              key="start"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
              layout
            >
              <Button onClick={() => setShowOptions(true)}>
                지금 시작하기
              </Button>
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {showOptions && (
            <>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-10 bg-black/40"
              />
              <motion.div
                key="modal"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 32 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-20 flex items-center justify-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-2xl flex flex-col items-stretch w-[95vw] max-w-lg">
                  <div className="w-full flex items-center">
                    <Image
                      className="w-12 h-12"
                      src="/icons/logo/logo.png"
                      alt="Kiroku"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-full flex flex-col pl-1.5 text-left">
                    <h2 className="font-bold text-slate-800 mb-1 text-md">
                      나의 모든 것을 한 곳에서 관리하세요.
                    </h2>
                    <p className="text-slate-400 text-sm mb-4">
                      Kiroku 계정에 로그인
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <Image
                      src="/icons/image/login-cat.png"
                      alt="Login Cat"
                      width={150}
                      height={150}
                    />
                  </div>
                  <SocialLoginButton provider="google" className="mb-2">
                    Google로 로그인
                  </SocialLoginButton>
                  <SocialLoginButton provider="kakao" className="mb-4">
                    Kakao로 로그인
                  </SocialLoginButton>
                  <Separator orientation="horizontal" className="w-full mb-2" />
                  <Button
                    variant="link"
                    className="text-slate-400 hover:text-slate-700 hover:bg-transparent"
                  >
                    <Mail className="w-4 h-4 mr-1" />
                    이메일로 계속하기
                  </Button>
                  <TermsNotice />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
