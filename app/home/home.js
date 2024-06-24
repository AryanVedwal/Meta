import React from "react";
import Header from "./comp/header";
import Hero from "./comp/hero";
import Comm from "./comp/comm";
import Get from "./comp/get";
import Custom from "./comp/custom";
import Feedback from "./comp/feedback";
import Features from "./comp/features";
import Benefits from "./comp/benefits";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Custom />
      <Hero />
      <Features />
      <Benefits />
      <Comm />
      <Feedback />
      <Get />
    </div>
  );
}
