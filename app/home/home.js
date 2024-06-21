import React from "react";
import Header from "./comp/header";
import Hero from "./comp/hero";
import Video from "./comp/video";
import Features from "./comp/features";
import Comm from "./comp/comm";
import Get from "./comp/get";
import Custom from "./comp/custom";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Custom />
      <Hero />
      <Video />
      <Features />
      <Comm />
      <Get />
    </div>
  );
}
