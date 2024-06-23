"use client";

import { useState, useEffect } from "react";
import AnimatedLandscape from "./ui/Home/AnimatedLandscape";

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState<string>("");

  useEffect(() => {
    return () => {};
  }, []);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <>
      <div className="w-full container mx-auto">
        <div className=" flex flex-col items-center justify-center">
          <AnimatedLandscape
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
        </div>
      </div>
    </>

    // </main>
  );
}
