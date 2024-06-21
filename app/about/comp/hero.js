import React from "react";
import Corner from "@/components/other/corner";

export default function Hero() {
  return (
    <div className=" xl:p-16 lg:p-12 md:p-8 sm:p-4 p-2 my-20">
      <div className="rounded-3xl flex flex-col w-full max-w-[1440px] mx-auto">
        <div className="flex relative">
          <div className=" w-full flex items-center h-full border-t-4 border-l-4 pt-[40px] px-6 rounded-tl-3xl relative">
            <div className="border-l-4 absolute top-[100%] -left-1 h-[80px]"></div>
            <Corner />
            <p className=" max-w-[320px] sm:px-4 b-head font-bold la">
              WHO <span className="text-lb">WE</span> ARE
            </p>
          </div>
          <div className="max-w-[25%] w-fit relative">
            <div className=" border-l-4 border-b-4 h-full p-4 grid place-content-center rounded-bl-3xl">
              <div className=" border-4  rounded-full lg:h-[50px] h-[45px] aspect-square" />
            </div>
          </div>
        </div>
        <div className=" border-4 border-t-0 rounded-b-3xl relative flex flex-col justify-center sm:pl-6 md:py-[40px] py-4 pl-4 pr-[50px] gap-4">
          <Corner />
          <p className=" p-4 text">
            We are a passionate team of innovators, creators, and visionaries
            driven by a common purpose to revolutionize the 3D content industry
            through the transformative capabilities of Gen-AI technology.We have
            assembled a diverse team of experts who collectively hold 10+
            publications in the AI field and share a collective ambition to
            redefine how 3D content is conceived, designed, and delivered.
          </p>
        </div>
      </div>
    </div>
  );
}
