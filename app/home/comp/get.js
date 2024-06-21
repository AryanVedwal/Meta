import React from "react";

export default function Get() {
  return (
    <div className=" xl:p-16 lg:p-12 md:p-8 p-4 sm:flex justify-evenly sm:w-full w-fit sm:mx-0 mx-auto mt-20">
      <div className=" sm:text-start text-center">
        <h3 className=" font-bold s-head -ml-1 la">
          Get In <span className="text-lb">Touch</span>
        </h3>
        <p className="max-w-[320px] mt-4 sm-text">
          We are looking to partner with Gaming, Metaverse and Animations
          Studios.
        </p>
      </div>
      <div className=" sm:mt-0 mt-8 *:max-w-[320px] *:w-full">
        <input
          type="email"
          placeholder="Email Address"
          className=" bg-transparent border-2 outline-none rounded-lg p-4"
        />
        <br />
        <button className="mt-4 p-4 rounded-xl bg-zinc-900 sm-text"> Submit </button>
      </div>
    </div>
  );
}
