"use client";

import { Toaster } from "react-hot-toast";

export function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      containerStyle={{
        top: 20,
      }}
      toastOptions={{
        duration: 4000,
        style: {
          background: "white",
          color: "#374151",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          padding: "16px 20px",
          fontSize: "14px",
          fontWeight: "500",
          maxWidth: "400px",
          minHeight: "auto",
          wordBreak: "keep-all",
        },
        success: {
          duration: 3000,
          style: {
            background: "#f0fdf4",
            color: "#166534",
            border: "1px solid #bbf7d0",
          },
          iconTheme: {
            primary: "#16a34a",
            secondary: "#f0fdf4",
          },
        },
        error: {
          duration: 5000,
          style: {
            background: "#fef2f2",
            color: "#991b1b",
            border: "1px solid #fecaca",
            lineHeight: "1.5",
          },
          iconTheme: {
            primary: "#dc2626",
            secondary: "#fef2f2",
          },
        },
        loading: {
          style: {
            background: "#f8fafc",
            color: "#475569",
            border: "1px solid #e2e8f0",
          },
          iconTheme: {
            primary: "#6366f1",
            secondary: "#f8fafc",
          },
        },
      }}
    />
  );
}
