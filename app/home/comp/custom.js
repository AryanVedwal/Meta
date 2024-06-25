"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Custom() {
  // use index from api to change the dress & body structure
  const [body, setBody] = useState(0);
  const [dress, setDress] = useState(0);

  return (
    <div className="sm:min-h-fit min-h-full py-8 flex flex-col gap-4">
      <div
        className=" flex items-center gap-1 t-head relative pt-10 pb-8 px-4 la"
        style={{ lineHeight: 0 }}
      >
        <span
          className=" absolute border-t top-0 left-0 max-w-[75%] w-[30ch]"
          style={{
            clipPath: "polygon(100% 0, 90% 50%, 80% 100%, 0 100%, 0 0)",
          }}
        />
        <span
          className=" absolute border-b bottom-0 left-0 max-w-[55%] w-[25ch]"
          style={{
            clipPath: "polygon(80% 0, 90% 50%, 100% 100%, 0 100%, 0 0)",
          }}
        />
        <span className="pr-[0.5ch]  h-full"> Easy</span>
        <span className=" text-lb h-full">Customization</span>
      </div>
      <div className=" relative">
        <div className=" sm:p-8 p-2 md:max-w-4xl flex md:justify-center justify-between relative">
          {/* api based Data */}
          {/* <div className=" border absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white p-2 text-black *:my-2">
            <div> body {body} </div>
            <div> dress {dress} </div>
          </div> */}
          {/* api based Data */}
          <motion.img
            src="/assets/images/hero1.png"
            className="w-auto h-auto max-h-[400px] md:max-h-[550px] "
          />
        </div>

        <div className="border-t border-b border-gray-500 absolute bottom-0 md:right-[10%] right-0 h-full w-full md:max-w-[320px] max-w-[180px] flex gap-2 p-2 *:w-full">
          <div className="overflow-y-scroll hidden-scroll">
            {[...Array(6)].map((_, i) => {
              return (
                <div
                  key={i}
                  className=" inner-shadow-mbrix-md mb-2 md:h-[200px] h-[120px] rounded-xl bg-[#ffffff10] hover:bg-cyan-600 duration-300 cursor-pointer grid place-content-center"
                  onClick={() => setBody(i)}
                >
                  <motion.img src={`/assets/outfit/BS1.png`} className=""/>
                </div>
              );
            })}
          </div>
          <div className="overflow-y-scroll hidden-scroll">
            {[...Array(6)].map((_, i) => {
              return (
                <div
                  key={i}
                  className="inner-shadow-mbrix-md mb-2 md:h-[200px] h-[120px] rounded-xl bg-[#ffffff10] hover:bg-cyan-600 duration-300 cursor-pointer grid place-content-center md:p-6 p-4"
                  onClick={() => setDress(i)}
                >
                  <motion.img src={`/assets/outfit/MO${i + 1}.png`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
