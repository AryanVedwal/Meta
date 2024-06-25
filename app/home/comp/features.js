"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const video = [
  {
    link: "https://cdn.pixabay.com/video/2024/05/25/213616_large.mp4",
  },
  {
    link: "https://cdn.pixabay.com/video/2023/03/09/153976-817104245_large.mp4",
  },
  {
    link: "https://cdn.pixabay.com/video/2024/02/24/201766-916357972_large.mp4",
  },
];

export default function Features() {
  const container = useRef(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0 0", "1 1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["15%", "-70%"]);
  const countY = useTransform(scrollYProgress, [0.1, 1], ["0.5%", "-66%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const index = Math.floor(latest * 3);
      setActiveVideoIndex(Math.min(index, 2));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div
      ref={container}
      id="features"
      className="h-[300vh] relative md:mt-0 mt-20 mb-10"
    >
      <div className="h-screen sticky top-0 xl:p-16 lg:p-12 md:p-8 sm:p-4 p-4 md:flex items-center justify-center lg:min-h-screen *:w-full">
        <div className="flex flex-col gap-4">
          <h1 className="sub-head text-center la font-bold">
            Generate ready to use <span className="text-lb">3D characters</span>
          </h1>

          <div className="md:hidden hidden items-center justify-between border"></div>

          <div className="md:h-[600px] h-screen overflow-hidden relative ">
            <div
              className="absolute flex right-0 top-[5%] -z-50 font-bold opacity-50"
              style={{
                fontSize: "clamp(4.5rem, 2.9rem + 8vw, 12.5rem)",
              }}
            >
              <h1 className="h-[1.65ch] overflow-hidden number">
                <motion.span
                  style={{
                    y: countY,
                  }}
                  className="flex flex-col"
                >
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="flex md:pb-0 pb-1">
                      {i + 1}
                    </span>
                  ))}
                </motion.span>
              </h1>
            </div>
            <motion.div
              style={{
                y,
              }}
              className="w-full flex flex-col items-center justify-center"
            >
              {video.map((_, i) => (
                <Slide
                  key={i}
                  i={i}
                  progress={scrollYProgress}
                  isActive={i === activeVideoIndex}
                />
              ))}
            </motion.div>
          </div>
        </div>
        <div className="p-4 hidden md:flex items-center justify-center relative">
          <motion.img
            src="/assets/images/hamburger.svg"
            className="absolute top-20 right-20"
          />
          <motion.img
            src="/assets/images/header.svg"
            className="lg:max-w-[600px] max-w-[400px] w-full"
          />
        </div>
      </div>
    </div>
  );
}

const Slide = ({ i, progress, isActive }) => {
  const start = (i - 1) / 3;
  const end = i / 3 + start / 2;
  const scale = useTransform(progress, [start, end], [0.7, 1]);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const textOpacity = useTransform(progress, [start, end], [0, 1]);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <motion.div
      style={{
        scale,
        opacity,
      }}
      className="w-full h-[400px] flex pl-0 p-4 items-center gap-2"
    >
      <motion.div
        className="py-4 text h-fit w-fit flex items-center justify-center rotate-180"
        style={{
          writingMode: "vertical-rl",
          opacity: textOpacity,
        }}
      >
        Text to 3D
      </motion.div>
      <div className="h-full max-w-[85%] w-full rounded-2xl bg-[#8e8e8e]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-2xl"
          src={video[i].link}
          loop
          muted
          playsInline
        />
      </div>
    </motion.div>
  );
};
