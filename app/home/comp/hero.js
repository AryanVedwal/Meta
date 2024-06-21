"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="">
      {/* Hero 1 */}
      <div className=" lg:flex items-center lg:gap-20 justify-center lg:min-h-screen lg:mt-0 mt-10 relative overflow-hidden">
      <div
          className=" border absolute top-[50%] left-0 translate-y-[50%] aspect-square h-[150px] -z-50 bg-pur"
          style={{
            filter: "blur(120px)",
          }}
        />
        <motion.img
          src="/assets/images/side.svg"
          className=" md:block hidden absolute bottom-3 left-0 -translate-x-[15%] xl:h-[15%] lg:h-[10%] h-[8.5%]"
        />

        <div className=" flex flex-col justify-center gap-4 p-4 w-fit lg:mx-0 mx-auto text-center relative">
          <motion.img
            src="/assets/images/hamburger.svg"
            className=" absolute -top-20 left-0"
          />
          <h1 className="p-head font-bold la">
            <span className=" text-lb">Motion</span> Ready
          </h1>
          <p className="max-w-[480px] text mx-auto pl-1">
            Fully rigged character compatible with mixamo and unreal.
          </p>
        </div>
        <div className=" p-4 flex items-center justify-center lg:w-fit w-full sm:mx-0 mx-auto relative">
          <motion.img
            src="/assets/images/hamburger.svg"
            className=" absolute bottom-20 right-20"
          />
          <motion.img
            src="/assets/images/hero1.png"
            className=" lg:max-w-[600px] max-w-[400px] w-full "
          />
        </div>
      </div>
      {/* Hero 1 */}

      {/* Hero 2 */}
      <div className=" lg:flex lg:flex-row-reverse items-center lg:gap-20 justify-center lg:min-h-screen lg:mt-0 mt-10 relative overflow-hidden">
        <motion.img
          src="/assets/images/side2.svg"
          className=" md:block hidden absolute bottom-3 right-0 translate-x-[15%] xl:h-[30%] lg:h-[20%] h-[15%]"
        />
        <div
          className=" border absolute top-[50%] right-0 translate-y-[50%] aspect-square h-[150px] -z-50 bg-pur"
          style={{
            filter: "blur(120px)",
          }}
        />
        <div className=" flex flex-col justify-center gap-4 p-4 w-fit lg:mx-0 mx-auto text-center relative">
          <h1 className="s-head font-bold la">
            <span className=" text-lb">Expression</span> Ready
          </h1>
          <p className="max-w-[480px] text mx-auto pl-1">
            Facial animation capability through 52 blend shapes.
          </p>
        </div>
        <div className=" p-4 flex items-center justify-center lg:w-fit w-full sm:mx-0 mx-auto relative">
          <motion.img
            src="/assets/images/hamburger.svg"
            className=" absolute top-10 left-10"
          />
          <motion.img
            src="/assets/images/hero1.png"
            className=" lg:max-w-[600px] max-w-[400px] w-full "
          />
        </div>
      </div>
      {/* Hero 2 */}
    </div>
  );
}
