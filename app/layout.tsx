// app/layout.jsx

import { GoogleAnalytics } from "@next/third-parties/google";
import dotenv from "dotenv";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/global.css";
import { ThemeProvider } from "./ui/HeadNav/ThemeProvider";

// Load variables from .env file
dotenv.config();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eirian Ta",
  description: "Pinwheels Land",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      {/* <body className="bg-white dark:bg-black min-h-[100dvh]"> */}
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
    </html>
  );
}
