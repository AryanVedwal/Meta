"use client";
import React from "react";
import Corner from "@/components/other/corner";
import { motion } from "framer-motion";

export default function Header() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div
      style={{
        minHeight: "calc(100vh - 80px)",
      }}
      className="lg:flex justify-between items-center xl:px-20 lg:px-12 md:px-8 sm:p-4 p-2 max-w-[1660px] mx-auto"
    >
      <div className="flex flex-col justify-center gap-4 lg:p-4 sm:px-12 px-6 lg:w-fit w-full lg:mx-0 mx-auto sm:min-h-fit min-h-screen">
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
          className="main-head font-bold la bg-clip-text text-transparent bg-gradient-to-br from-lb to-yel font uppercase"
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
        >
          Your 3D Character creation with AI
        </motion.h5>

        <motion.div
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
              <div className=" w-full flex items-center h-full border-t-4 pt-[40px] px-6 border-l-4 rounded-tl-3xl relative">
                <Corner />
                <p className=" max-w-[320px] sm:px-4 sm-text">
                  Generate ready to use avatars within minutes for your games,
                  XR and marketing needs
                </p>
              </div>
              <div className="max-w-[25%] w-fit relative">
                <div className=" border-l-4 border-b-4 h-full p-4 grid place-content-center rounded-bl-3xl">
                  <div className=" border-4  rounded-full lg:h-[50px] h-[45px] aspect-square" />
                </div>
              </div>
            </div>
            <div className=" border-4 text-center border-t-0 rounded-b-3xl relative flex flex-col justify-center sm:pl-6 md:py-[40px] py-4 pl-4 pr-[50px] gap-4">
              <Corner />
              <p className=" py-4 cursor-pointer bg-zinc-800 rounded-xl uppercase text">
                TRY ULTRON AI FOR FREE
              </p>
              <p className=" border-4 py-4 cursor-pointer rounded-xl text">
                Join Discord Community
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className=" p-4 flex items-center justify-center lg:w-fit w-full sm:mx-0 mx-auto">
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
          src="/assets/images/header.svg"
          className=" lg:max-w-[600px] max-w-[400px] w-full "
        />
      </div>
    </div>
  );
}
