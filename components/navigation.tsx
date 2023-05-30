"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const pages = ["home", "about", "experience", "skills", "projects"];
  const path = usePathname();
  const activeLinkStyle = "text-4xl opacity-100 text-baby-blue";
  const inactiveLinkStyleDesktop =
    "text-3xl opacity-70 hover:opacity-100 hover:text-4xl transition-all duration-200";
  const ianctiveLinkStyleMobile = "text-4xl opacity-100 text-white";

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setMobileNav(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col">
      {/* mobile button */}
      <div className="transparent-highlight flex p-8 xsm:p-16 lg:hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-200 justify-center">
        <button
          className="h-14 w-14 rounded-md border-4 border-white flex flex-col justify-evenly items-center"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <span className="h-1 w-8/12 bg-white rounded-md"></span>
          <span className="h-1 w-8/12 bg-white rounded-md"></span>
          <span className="h-1 w-8/12 bg-white rounded-md"></span>
        </button>
      </div>
      {/* mobile navigation */}
      {/* disable Colorzilla chrome extension to avoid console error */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.95 }}
        transition={{ duration: 0.5 }}
        className={`${
          mobileNav ? "fixed h-full z-10 w-full bg-black" : "hidden"
        }`}
        onClick={() => setMobileNav(false)}
      >
        <div className="h-full flex flex-col justify-evenly items-center">
          {pages.map((page, i) => (
            <Link
              href={page === "home" ? "" : page}
              className={`px-5 mx-5 cursor-pointer flex justify-center items-center h-16 ${
                path === "/" + page
                  ? activeLinkStyle
                  : path === "/" && page === "home"
                  ? activeLinkStyle
                  : ianctiveLinkStyleMobile
              }`}
              key={i}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </div>
      </motion.div>
      {/* desktop navigation */}
      <div className="p-16 hidden lg:flex max-w-full justify-center">
        {pages.map((page, i) => (
          <Link
            href={page === "home" ? "" : page}
            className={`px-5 mx-5 cursor-pointer flex justify-center items-center h-16 ${
              path === "/" + page
                ? activeLinkStyle
                : path === "/" && page === "home"
                ? activeLinkStyle
                : inactiveLinkStyleDesktop
            }`}
            key={i}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
}
