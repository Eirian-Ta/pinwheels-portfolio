import { ShowMoreBtnProps } from "@/app/lib/interfaces";
import React from "react";

function ShowMoreBtn({ isShowingMore, setIsShowingMore }: ShowMoreBtnProps) {
  const toggleShowingMore = () => {
    setIsShowingMore(!isShowingMore);
  };

  return (
    <button className="showMoreBtn" onClick={toggleShowingMore}>
      <i className={`arrowIcon ${isShowingMore ? "arrowUp" : "arrowDown"}`}></i>
    </button>
  );
}

export default ShowMoreBtn;
