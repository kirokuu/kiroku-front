"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@kiroku/ui";
import { LoginModal } from "@/features/auth/ui/LoginModal";

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
                <LoginModal onClose={() => setShowOptions(false)} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
