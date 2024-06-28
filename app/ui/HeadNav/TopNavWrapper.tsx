"use client";

import { useState, useEffect } from "react";
import TopNav from "./TopNav";

export default function TopNavWrapper() {
  const [currentTheme, setCurrentTheme] = useState<string>("");

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="w-full container mx-auto">
        <div className=" flex flex-col items-center justify-center">
          <TopNav
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
        </div>
      </div>
    </>
  );
}
