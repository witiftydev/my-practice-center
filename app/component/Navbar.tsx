"use client";

import React, { useEffect, useRef } from "react";
import Primary from "./Buttons/Primary";
import Secondary from "./Buttons/Secondary";
import useHeight from "@/hooks/useHeight";

const Navbar = () => {
  const isScrolled = useHeight(120);

  // navbar ref
  const navRef = useRef<HTMLDivElement>(null);

  // dynamically set navbar height
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;

        // set CSS variable globally
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`,
        );
      }
    };

    updateNavbarHeight();

    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center px-4 md:px-6 lg:px-10 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg py-3 text-black"
          : "bg-black py-5 text-white"
      }`}
    >
      {/* Logo */}
      <div className="text-xl md:text-2xl font-bold">MPC</div>

      {/* Links */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:opacity-70 transition">
          Home
        </a>

        <a href="#" className="hover:opacity-70 transition">
          About
        </a>

        <a href="#" className="hover:opacity-70 transition">
          Contact
        </a>
      </div>

      {/* Buttons */}
      <div className="flex space-x-3">
        <Primary
          text="Get Started"
          width="w-28 md:w-32"
          height="h-10"
          onClick={() => alert("Clicked")}
        />

        <Secondary text="Register" />
      </div>
    </div>
  );
};

export default Navbar;
