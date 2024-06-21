"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Discord } from "@/components/assets/svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function Header() {
  const [selected, setSelected] = useState(0);
  const data = [
    {
      name: "Doris Runte",
      role: "Turcotte LLC",
    },
    {
      name: "Mr. Darwin Runolfsdottir",
      role: "Gottlieb - Morar",
    },
    {
      name: "Weldon Daniel",
      role: "Murphy LLC",
    },
    {
      name: "Camila Volkman",
      role: "Mohr, Ortiz and Harvey",
    },
    {
      name: "Lilliana Daugherty",
      role: "VonRueden Inc",
    },
    {
      name: "Abigail Roberts",
      role: "Mosciski - Leffler",
    },
    {
      name: "Dr. Gerardo Mohr",
      role: "Hettinger - Krajcik",
    },
    {
      name: "Kayleigh Schulist",
      role: "Moen, Upton and Cartwright",
    },
  ];
  return (
    <div
      className="relative overflow-hidden flex md:flex-row flex-col-reverse items-center justify-center gap-8 p-8"
      style={{
        minHeight: "calc(100vh - 80px)",
      }}
    >
      <div
        className="aspect-square h-[80%] absolute bg-pur -z-50"
        style={{
          filter: "blur(800px)",
        }}
      />
      <div className="min-w-[35%] grid place-content-center">
        <motion.img
          src="/assets/images/member.svg"
          className=" w-full max-w-[140px] md:max-w-[400px]"
        />
      </div>

      <div className="max-w-[1440px] w-full flex md:flex-col flex-col-reverse gap-2">
        <div className="border-b flex items-center justify-between gap-8 max-w-[640px] w-full md:mx-0 mx-auto p-4">
          <div className=" flex flex-col gap-2">
            <h1 className=" t-head"> {data[selected].name} </h1>
            <h1 className=" sub-head"> {data[selected].role} </h1>
          </div>
          <div>
            <Discord size={64} fill={"#fff"} />
          </div>
        </div>

        <div className="">
          <div
            className=" px-4 t-head font-bold md:text-start text-center mt-12 mb-11 la"
            style={{ lineHeight: 0 }}
          >
            {" "}
            <span className="text-lb">Team</span> Members{" "}
          </div>
          <div className=" hidden md:grid place-content-center grid-cols-4 gap-2 p-2 max-w-[800px]">
            {data.map((info, i) => {
              return (
                <div
                  key={i}
                  className="h-[250px] rounded-xl cursor-pointer bg-[#ffffff20] grid place-content-center hover:bg-[#82ddf170] duration-200"
                  onClick={() => setSelected(i)}
                >
                  <motion.img src="/assets/images/team.svg" />
                </div>
              );
            })}
          </div>

          <div className="md:hidden h-[250px]">
            <Swiper
              spaceBetween={30}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              className="h-full"
            >
              {data.map((info, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div
                      onClick={() => setSelected(i)}
                      className="bg-[#ffffff20] h-full grid place-content-center rounded-xl hover:bg-[#82ddf170] duration-200"
                    >
                      <motion.img src="/assets/images/team.svg" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
