import React from "react";
import Image from "next/image";

export default function Benefits() {
  const data = [
    {
      title: "Integrate in your Platforms",
    },
    {
      title: "Save Time and Costs",
    },
    {
      title: "Improve User Experience",
    },
    {
      title: "Easy to use API",
    },
  ];
  return (
    <div className="xl:p-16 lg:p-12 md:p-8 p-4 flex flex-col items-center gap-12 relative overflow-hidden">
      <div
        className="absolute top-10 left-0 translate-y-[50%] aspect-square h-[150px] -z-50 bg-pur"
        style={{
          filter: "blur(120px)",
        }}
      />
      <div
        className=" border absolute bottom-20 right-0 translate-y-[50%] aspect-square h-[150px] -z-50 bg-pur"
        style={{
          filter: "blur(120px)",
        }}
      />
      <div className="text-center">
        <h2 className=" font-bold s-head la  relative">
          <span className="flex absolute top-0 -right-40">
            <Image
              src={"/assets/images/hamburger.svg"}
              alt="dec"
              width={50}
              height={50}
            />
          </span>
          Developer <span className="text-lb">Friendly</span>
        </h2>
        <p className="max-w-[640px] mt-6 mx-auto para text">
          We provide an easy API and SDK integration kit with lightning speed
          Avatar creation for your platform.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 relative">
        <span className="flex absolute bottom-0 -right-40">
          <Image
            src={"/assets/images/hamburger.svg"}
            alt="dec"
            width={50}
            height={50}
          />
        </span>
        <span className="flex absolute top-[50%] -translate-y-[50%] -left-40">
          <Image
            src={"/assets/images/hamburger.svg"}
            alt="dec"
            width={50}
            height={50}
          />
        </span>
        {data.map((e, i) => {
          return (
            <div
              key={i}
              className=" w-[300px]  h-[300px] rounded-xl bg-[#2B333D] flex flex-col gap-2 p-4 *:min-h-fit"
            >
              <div className="h-full rounded-2xl bg-[#181A1E] grid place-content-center">
                <Image
                  src={`/assets/images/feature${i + 1}.svg`}
                  alt="feature"
                  width={150}
                  height={150}
                />
              </div>
              <p className="p-2 text-center sm-text">
                {e.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
