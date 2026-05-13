import React from "react";
import HeroSection from "./component/HeroSection";
import Bento from "./component/Bento";
import HeroBento from "./component/HeroBento";
import Services from "./component/Services";

const page = () => {
  return (
    <>
      <HeroSection />
      <Bento />
      <HeroBento />
      <Services />
    </>
  );
};

export default page;
