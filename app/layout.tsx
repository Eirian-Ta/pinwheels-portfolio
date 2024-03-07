// app/layout.jsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/global.css";
import { ThemeProvider } from "./ui/HeadNav/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      < ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
