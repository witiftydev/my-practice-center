"use client";
import React from "react";

type PrimaryButtonProps = {
  text?: string;
  onClick?: () => void;
  bgcolor?: string;
  textcolor?: string;
  hoverbgcolor?: string;
  hovertextcolor?: string;
  width?: string;
  height?: string;
  className?: string;
};

const Primary = ({
  text = "Primary Button",
  onClick,
  bgcolor = "bg-blue-500",
  textcolor = "text-white",
  hoverbgcolor = "hover:bg-blue-700",
  hovertextcolor = "hover:text-white",
  width = "w-auto",
  height = "h-auto",
  className = "",
}: PrimaryButtonProps) => {
  return (
    <button
      className={`rounded p-2 cursor-pointer ${bgcolor} ${textcolor} ${hoverbgcolor} ${hovertextcolor} ${width} ${height} ${className} transition-colors duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Primary;
