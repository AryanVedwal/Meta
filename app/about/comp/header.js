"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "@/components/assets/svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export default function Header() {
  // use index from api to change the dress & body structure

  const [selected, setSelected] = useState(0);
  const data = [
    {
      name: "Doris Runte",
      role: "Turcotte LLC",
      link: "/link",
    },
    {
      name: "Mr. Darwin Runolfsdottir",
      role: "Gottlieb - Morar",
      link: "/link",
    },
    {
      name: "Weldon Daniel",
      role: "Murphy LLC",
      link: "/link",
    },
    {
      name: "Camila Volkman",
      role: "Mohr, Ortiz and Harvey",
      link: "/link",
    },
    {
      name: "Lilliana Daugherty",
      role: "VonRueden Inc",
      link: "/link",
    },
    {
      name: "Abigail Roberts",
      role: "Mosciski - Leffler",
      link: "/link",
    },
    {
      name: "Dr. Gerardo Mohr",
      role: "Hettinger - Krajcik",
      link: "/link",
    },
    {
      name: "Kayleigh Schulist",
      role: "Moen, Upton and Cartwright",
      link: "/link",
    },
    {
      name: "Name 9",
      role: "Moen, Upton and Cartwright",
      link: "/link",
    },
    {
      name: "name 10",
      role: "Moen, Upton and Cartwright",
      link: "/link",
    },
  ];
  return (
    <div
      className="relative overflow-hidden flex md:flex-row flex-col-reverse items-center justify-center gap-8 p-8"
      style={{
        minHeight: "calc(100vh - 80px)",
      }}
    >
      <motion.img
        src="/assets/images/side2.svg"
        className=" md:block hidden absolute top-3 right-0 translate-x-[15%] xl:h-[30%] lg:h-[20%] h-[15%]"
      />
      <div
        className="aspect-square h-[80%] absolute bg-pur -z-50"
        style={{
          filter: "blur(800px)",
        }}
      />
      <div className="min-w-[35%] grid place-content-center relative">
        {/* api Based data */}
        <div className=" border absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white p-2 text-black *:my-2">
          image {selected}
        </div>
        {/* api Based data */}
        <motion.img
          src="/assets/images/member.svg"
          className=" w-full max-w-[140px] md:max-w-[400px]"
        />
      </div>

      <div className="max-w-[1440px] w-full flex md:flex-col flex-col-reverse gap-2">
        <div className="border-b flex items-center justify-between gap-8 max-w-[640px] w-full md:mx-0 mx-auto p-4">
          <div className=" flex flex-col gap-2">
            <h1 className=" font-bold lg:text-4xl"> {data[selected].name} </h1>
            <h1 className="font-normal lg:text-lg"> {data[selected].role} </h1>
          </div>
          <Link href={data[selected].link} className="border rounded-md p-1">
            <Linkedin size={36} fill={"#fff"} />
          </Link>
        </div>

        <div className="">
          <div
            className=" px-4 t-head font-bold md:text-start text-center mt-12 mb-11 la"
            style={{ lineHeight: 0 }}
          >
            {" "}
            <span className="text-lb">Team</span> Members{" "}
          </div>
          <div className=" hidden md:grid place-content-center grid-cols-5 gap-2 px-2 max-w-[800px]">
            {data.map((info, i) => {
              return (
                <div
                  key={i}
                  className="h-auto rounded-xl border border-[#00FFFF] cursor-pointer bg-slate-800 grid place-content-center hover:bg-cyan-500 duration-200"
                  onClick={() => setSelected(i)}
                  style={{
                    boxShadow: "inset lightgray 0px 0px 30px -12px",
                  }}
                >
                  <motion.img
                    src="/assets/images/team.svg"
                    className="h-[210px]"
                  />
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
