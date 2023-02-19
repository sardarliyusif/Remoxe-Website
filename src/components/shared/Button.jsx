import React from "react";

export const Button = ({ content, bg, size, link, classes }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button
        // style={{ backgroundColor: `${bg === "primary" ? "#FF7348" : ""}` }}
        className={`rounded-md font-semibold  ${classes} ${
          bg === "primary"
            ? "text-white border bg-primary hover:bg-white hover:text-primary hover:border-primary"
            : "text-primary border border-primary hover:bg-primary hover:text-white"
        } ${
          size === "small"
            ? "px-[26px] py-3 text-sm"
            : size === "medium"
            ? "px-6 py-4 text-lg font-medium"
            : size === "view"
            ? "px-10 py-4 text-lg font-medium"
            : size === "large"
            ? "px-20 py-4"
            : size === "mobile-small"
            ? "p-2 text-[10px] font-medium"
            : size === "mobile-view"
            ? "py-2 px-[18px] text-[10px] font-medium"
            : size === "mobile-medium"
            ? "px-9 py-2"
            : ""
        }
        
        `}
      >
        {content}
      </button>
    </a>
  );
};
