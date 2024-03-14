"use client";

import React from "react";
import { ArrowUpIconBold } from "../Icons";

const BackToTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="backToTopBtn" onClick={scrollToTop}>
      <ArrowUpIconBold />
    </button>
  );
};

export default BackToTopBtn;
