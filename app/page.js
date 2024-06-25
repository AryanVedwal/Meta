"use client";
import React, { useEffect, useState } from "react";
import Home from "./home/home";
import LoaderVideo from "@/components/assets/loaderVideo";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className=" md:block hidden">
        {loading ? <LoaderVideo /> : <Home />}
      </div>
      <div className=" md:hidden block ">
        {" "}
        <Home />{" "}
      </div>
    </div>
  );
}
