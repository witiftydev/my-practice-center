import React from "react";
import HeroSection from "./component/HeroSection";
import Bento from "./component/Bento";

const page = () => {
  return (
    <div
      className="h-[1440px]"
      style={{
        paddingTop: "var(--navbar-height)",
      }}
    >
      <HeroSection />
      <Bento />
    </div>
  );
};

export default page;
