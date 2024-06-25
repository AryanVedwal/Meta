"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Play the video on component mount
    video.play();

    // Loop the video
    video.loop = true;

    // Remove controls and track
    video.controls = false;
    video.removeAttribute("controls");

    // Clean up on component unmount
    return () => {
      video.pause();
    };
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
      }}
      transition={{
        delay: 5.25,
        duration: 0.25,
      }}
      className=""
      style={{
        height: "calc(100vh - 80px)",
      }}
    >
      <motion.div
        initial={{
          x: "-150%",
          y: "50%",
          scale: 10,
          // opacity: 1,
        }}
        animate={{
          x: "-50%",
          y: "50%",
          scale: 1,
          // opacity: 0,
        }}
        transition={{
          duration: 5,
          delay: 0.5,
          type: "tween",
        }}
        className=" fixed top-0 right-0 h-[500px] w-[500px] translate-y-[50%] rounded-full z-50 overflow-hidden"
      >
        <motion.video
          ref={videoRef}
          src={src}
          className=" h-full w-full object-cover"
          playsInline
          autoPlay
          muted
          style={
            {
              // transformOrigin: "right",
            }
          }
        />
      </motion.div>
    </motion.div>
  );
};

export default function LoaderVideo() {
  return <VideoPlayer src="/assets/video/Video_20240619_172104_376_1.mp4" />;
}
