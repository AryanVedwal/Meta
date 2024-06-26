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
      href: "/about",
    },
    {
      title: "features",
      href: "/#features",
    },
    {
      title: "Docs",
      href: "https://docs.ultronai.me/",
    },
    {
      title: "Pricing",
      href: "/",
    },
    {
      title: "contact",
      href: "#footer",
    },
  ];

  return (
    <>
      {/* mobile */}
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
        className="  h-[80px] xl:px-20 lg:px-12 md:px-8 sm:p-4 px-6 md:hidden flex items-center"
      >
        <div className=" max-w-[2560px] w-full mx-auto flex items-center justify-between">
          <div className=" font-bold sub-head la">
            <Link href={"/"}>MetaBrix</Link>
          </div>

          <div className="md:flex hidden gap-4 text-[1rem]">
            {navLinks.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.href}
                  className={`capitalize p-2 ${
                    i + 1 === navLinks.length
                      ? " bg-gradient-to-br from-lb to-yel rounded-md px-8"
                      : ""
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>

          <div className=" md:hidden block" onClick={() => setIsActive(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

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
          className="fixed top-0 right-10 h-full w-full bg-black z-50 md:hidden flex flex-col gap-4 text-[1rem] opacity-0"
        >
          <div
            className=" cursor-pointer flex items-end min-h-[10%] justify-end pt-4 px-8"
            onClick={() => setIsActive(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

          </div>
          <div className=" flex flex-col items-start justify-center gap-8 h-half pl-16 ">
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

      {/* mobile */}

      {/* large Screen */}
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
          delay: 5.6,
        }}
        className="  h-[80px] xl:px-20 lg:px-12 md:px-8 sm:p-4 px-6 md:flex hidden items-center"
      >
        <div className=" max-w-[2560px] w-full mx-auto flex items-center justify-between">
          <div className=" font-bold sub-head la">
            <Link href={"/"}>MetaBrix</Link>
          </div>

          <div className="md:flex hidden gap-4 text-[1rem]">
            {navLinks.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.href}
                  className={`capitalize p-2 ${
                    i + 1 === navLinks.length
                      ? " bg-gradient-to-br from-lb to-yel rounded-md px-8"
                      : ""
                  }`}
                >
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
      {/* large Screen */}
    </>
  );
}
