import type { Metadata } from "next";
import "./globals.css";
import { QueryClientWrapper } from "@/providers/query-client-provider";
import { ToastProvider } from "@/providers/toast-provider";
export const metadata: Metadata = {
  title: "Kiroku",
  description: "기록",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientWrapper>{children}</QueryClientWrapper>
        <ToastProvider />
      </body>
    </html>
  );
}
