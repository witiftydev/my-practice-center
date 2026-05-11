import React from "react";
import HeroSection from "./component/HeroSection";

const page = () => {
  return (
    <div
      className="h-[1440px]"
      style={{
        paddingTop: "var(--navbar-height)",
      }}
    >
      <HeroSection />
    </div>
  );
};

export default page;
