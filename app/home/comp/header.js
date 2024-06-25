"use client";
import React from "react";
import Corner from "@/components/other/corner";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 80px)",
      }}
      className="lg:flex justify-between items-center xl:px-20 lg:px-12 md:px-8 sm:p-4 p-0 max-w-[1660px] mx-auto"
    >
      <div className="flex flex-col justify-center gap-4 lg:p-4 sm:px-12 px-4 py-2 lg:w-fit w-full lg:mx-0 mx-auto sm:min-h-fit min-h-[640px] relative overflow-hidden">
        <motion.div
          initial={{
            opacity: 1,
            scale: 0,
            x: "50%",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: "50%",
          }}
          transition={{
            delay: 1.5,
            duration: 0.25,
          }}
          className="md:hidden flex border-2 absolute top-20 right-0 h-[75px] aspect-square rounded-full"
        />
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.5,
            duration: 0.25,
          }}
          style={{
            lineHeight: 0.9,
          }}
          className="main-head font-bold la bg-clip-text text-transparent bg-gradient-to-br from-lb to-yel uppercase"
        >
          Super <br /> Charge
        </motion.h1>

        <motion.h5
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.75,
            duration: 0.25,
          }}
          className="sub-head md:pl-[12px] pl-[8px] mb-2 la font-semibold max-w-[640px]"
          style={{
            letterSpacing: 1,
          }}
        >
          Your 3D Character creation with AI
        </motion.h5>

        {/* <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
            duration: 0.25,
          }}
        >
          <div className="rounded-3xl flex flex-col w-full">
            <div className="flex relative">
              <div className=" w-full flex items-center h-full border-t-4 border-l-4 pt-[40px] px-6 rounded-tl-3xl relative">
                <div className="border-l-4 absolute top-[100%] -left-1 h-[20px]"></div>
                <Corner />
                <p className=" max-w-[320px] sm:px-4 sm-text">
                  Generate ready to use avatars within minutes for your games,
                  XR and marketing needs
                </p>
              </div>
              <div className="max-w-[25%] w-fit relative">
                <div className=" border-l-4 border-b-4 h-full pl-4 pb-4 grid place-content-center rounded-bl-[35px]">
                  <div className=" border-4  rounded-full lg:h-[75px] h-[50px] aspect-square" />
                </div>
              </div>
            </div>
            <div className=" border-4 text-center border-t-0 rounded-b-3xl relative flex flex-col justify-center sm:pl-6 md:py-[40px] py-4 pl-4 pr-[50px] gap-4">
              <Corner />
              <Link href={"https://ultronai.me/"} target="_blank">
                <p className=" py-4 cursor-pointer bg-zinc-800 rounded-xl uppercase text">
                  TRY ULTRON AI FOR FREE
                </p>
              </Link>
              <Link href={"https://discord.gg/zmE8XH6A"} target="_blank">
                <p className=" border-4 py-4 cursor-pointer rounded-xl text">
                  Join Discord Community
                </p>
              </Link>
            </div>
          </div>
        </motion.div> */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
            duration: 0.25,
          }}
          className="relative max-w-[520px] max-h-[319px]"
        >
          <motion.img src="/assets/images/back.svg" className="" />
          <div className="absolute inset-0 h-full w-full flex flex-col justify-center md:gap-4 gap-1 *:h-fit">
            <div className="max-w-[80%] flex items-center px-[5%] py-2">
              <p
                className="p-2 lg:leading-6 sm:leading-5 leading-4"
                style={{
                  fontSize: "clamp(0.8125rem, 0.6875rem + 0.4167vw, 1.0625rem)",
                }}
              >
                Generate ready to use avatars within minutes for your games, XR
                and marketing needs
              </p>
            </div>
            <div className="text-center flex flex-col items-center justify-start *:max-h-[50%] *:h-fit gap-2 py-2 *:max-w-[90%] *:w-full">
              <Link href={"https://ultronai.me/"} target="_blank">
                <p
                  className=" lg:py-5 py-3 cursor-pointer bg-[#8e8e8e63] font-bold rounded-xl uppercase text inner-shadow-mbrix"
                  style={{
                    fontSize: "clamp(0.875rem, 0.8125rem + 0.2083vw, 1rem)",
                  }}
                >
                  TRY ULTRON AI FOR FREE
                </p>
              </Link>
              <Link href={"https://discord.gg/zmE8XH6A"} target="_blank">
                <p
                  className=" border-4 py-4 cursor-pointer rounded-xl text"
                  style={{
                    fontSize: "clamp(0.875rem, 0.8125rem + 0.2083vw, 1rem)",
                  }}
                >
                  Join Discord Community
                </p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative p-4 flex items-center justify-center lg:w-fit w-full sm:mx-0 mx-auto">
        <motion.img
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          src="/assets/images/header.png"
          className=" lg:max-w-[600px] max-w-[400px] w-full "
        />
  
      </div>
    </div>
  );
}
