// hooks/useHeight.ts

"use client";

import { useEffect, useState } from "react";

const useHeight = (height: number = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > height);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height]);

  return isScrolled;
};

export default useHeight;
