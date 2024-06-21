"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const navLinks = [
    {
      title: "home",
      href: "/",
    },
    {
      title: "about",
      href: "/",
    },
    {
      title: "features",
      href: "/",
    },
    {
      title: "Docs",
      href: "/",
    },
    {
      title: "Pricing",
      href: "/",
    },
    {
      title: "contact",
      href: "/",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -90,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        type: "tween",
        delay: 0.1,
      }}
      className="  h-[80px] xl:px-20 lg:px-12 md:px-8 sm:p-4 px-6 flex items-center"
    >
      <div className=" max-w-[2560px] w-full mx-auto flex items-center justify-between">
        <div className=" font-bold sub-head la">
          <Link href={"/"}>METABRIX</Link>
        </div>

        <div className="md:flex hidden gap-4 text-[1rem]">
          {navLinks.map((link, i) => {
            return (
              <Link key={i} href={link.href} className=" capitalize">
                {link.title}
              </Link>
            );
          })}
        </div>

        <div className=" md:hidden block" onClick={() => setIsActive(true)}>
          Menu
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          right: "-100%",
        }}
        animate={{
          opacity: isActive ? 1 : 0,
          right: isActive ? "0%" : "-100%",
        }}
        transition={{
          type: "tween",
        }}
        className="fixed top-0 right-0 h-full w-full bg-db z-50 md:hidden flex flex-col gap-4 text-[1rem] opacity-0"
      >
        <div
          className=" cursor-pointer flex items-end min-h-[10%] justify-end pt-4 px-8"
          onClick={() => setIsActive(false)}
        >
          Close
        </div>
        <div className=" flex flex-col items-center justify-center gap-4 h-full ">
          {navLinks.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.href}
                className=" capitalize"
                onClick={() => setIsActive(false)}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
