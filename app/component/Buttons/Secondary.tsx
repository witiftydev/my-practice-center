import React from "react";

type SecondaryButtonProps = {
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

const Secondary = ({
  text = "Secondary Button",
  onClick,
  bgcolor = "bg-gray-500",
  textcolor = "text-white",
  hoverbgcolor = "hover:bg-gray-700",
  hovertextcolor = "hover:text-white",
  width = "w-auto",
  height = "h-auto",
  className = "",
}: SecondaryButtonProps) => {
  return (
    <button
      className={`rounded p-2 cursor-pointer ${bgcolor} ${textcolor} ${hoverbgcolor} ${hovertextcolor} ${width} ${height} ${className} transition-colors duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Secondary;
