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
    <div className=" h-full w-full">
      <motion.video
        ref={videoRef}
        src={src}
        className=" h-full w-full object-cover rounded-full"
        playsInline
        autoPlay
        muted
        style={{
          transformOrigin: "right",
        }}
      />
    </div>
  );
};

export default function LoaderVideo() {
  return <VideoPlayer src="/assets/video/Video_20240619_172104_376_1.mp4" />;
}
