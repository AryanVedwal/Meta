"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function News() {
  return (
    <div className="mb-20 py-4 md:px-8 px-4">
      <div className=" text-center s-head la font-bold mb-4 flex items-center justify-center gap-20">
        <h1>
          In the <span className=" text-lb">News</span>
        </h1>
        <span className="flex -translate-y-[4px]">
          <Image
            src={"/assets/images/hamburger.svg"}
            alt="dec"
            width={50}
            height={50}
          />
        </span>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-20 ">
        {[...Array(3)].map((_, i) => {
          return (
            <div
              key={i}
              className="rounded-xl p-4 grid place-content-center"
            >
              <div className=" h-fit p-4 overflow-hidden rounded-3xl grid gap-4 place-content-center border-2 w-fit max-w-[400px]">
                <motion.img
                  src="/assets/images/news.svg"
                  className=" object-contain object-center h-full"
                />

                <div className="p-1">
                  <span className=" font-bold"> MetaBrix </span> ranked among
                  top 10 award winning Startups in ISF
                </div>

                <div className=" pt-4">
                  <div className=" font-bold border-2 p-4 text-center rounded-xl"> Read More </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
