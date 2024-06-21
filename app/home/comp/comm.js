"use client";
import { Discord } from "@/components/assets/svg";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Comm() {
  const Tools = [
    {
      name: "DISCORD",
      link: "https://discord.gg/zmE8XH6A",
    },
    {
      name: "ZIMENSIONS 3D",
      link: "https://app.zimension3d.com/",
    },
    {
      name: "UNITY",
      link: "https://docs.ultronai.me/unity",
    },
    {
      name: "UNREAL ENGINE",
      link: "https://www.unrealengine.com/en-US/download",
    },
    {
      name: "BLENDER",
      link: "https://www.blender.org/download/",
    },
  ];

  return (
    <div className="xl:p-16 lg:p-12 md:p-8 p-4 md:mt-0 mt-12 ">
      <div className=" flex items-center justify-evenly">
        <div className=" flex sm:flex-row flex-col items-center justify-center sm:text-start text-center gap-1">
          <Discord size={64} fill={"#fff"} />
          <h5
            className="text-sm sub-head"
            style={{
              lineHeight: 1.1,
            }}
          >
            600+ <br />
            Discord Members
          </h5>
        </div>

        <div className=" flex sm:flex-row flex-col items-center justify-center sm:text-start text-center gap-1">
          <Discord size={64} fill={"#fff"} />
          <h5
            className="text-sm sub-head"
            style={{
              lineHeight: 1.1,
            }}
          >
            600+ <br />
            Discord Members
          </h5>
        </div>
      </div>

      <h5 className=" mt-20 text-3xl text-center text-lb sub-head">
        Try UltronAI on these platforms
      </h5>

      <div className="mt-20 flex flex-wrap justify-center gap-4 content-center">
        {Tools.map((tool, i) => {
          return (
            <Link target="_blank" noopener="true" noreferrer="true" href={tool.link} key={i}>
              <div
                className="w-[200px] min-h-[110px] rounded-xl bg-[#2B333D] flex flex-col gap-3 items-center justify-center"
                style={{
                  boxShadow: "0.5rem 0.5rem 0.1rem #000",
                }}
              >
                <motion.img
                  src={`/assets/logos/${tool.name}.svg`}
                  className="h-[50px]"
                />
                <sub className="text-center">{tool.name}</sub>
              </div>
            </Link>
          );
        })}
      </div>

      <h4 className=" text-center mt-20 b-head la">
        Our <span className="text-lb">Partners</span> and{" "}
        <span className="text-lb">Affiliations</span>
      </h4>

      <div className=" flex flex-wrap gap-4 justify-center content-center mt-20">
        {[...Array(3)].map((_, i) => {
          return (
            <div
              key={i}
              className="max-w-[350px] w-full min-h-[125px] rounded-xl bg-[#2B333D] flex items-center justify-center"
              style={{
                boxShadow: "0.5rem 0.5rem 0.1rem #000",
              }}
            >
              <motion.img
                src={`/assets/brands/brand-${i + 1}.svg`}
                className=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
