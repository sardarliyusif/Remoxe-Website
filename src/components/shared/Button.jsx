import React from "react";

export const Button = ({ content, bg, size, link, classes }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button
        className={`rounded-md ${classes} ${
          bg === "primary"
            ? "text-white border bg-primary hover:bg-white hover:text-primary hover:border-primary"
            : "text-primary border border-primary hover:bg-primary hover:text-white"
        } ${
          size === "small"
            ? "w-[120px] text-sm h-[40px] font-semibold"
            : size === "medium"
            ? "w-[180px] text-lg font-medium h-[54px]"
            : size === "view"
            ? "w-[180px] text-lg font-medium h-[54px]"
            : size === "large"
            ? "w-[250px] h-[54px] font-semibold"
            : size === "mobile-small"
            ? "w-[90px] text-[10px] font-medium h-[27px]"
            : size === "mobile-view"
            ? "w-[90px] h-[27px] text-[10px] font-medium"
            : size === "mobile-medium"
            ? "w-[125px] h-[27px] text-[10px] font-semibold"
            : ""
        }
        
        `}
      >
        {content}
      </button>
    </a>
  );
};
