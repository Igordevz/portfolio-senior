"use client";

import { delay, useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
export default function About() {
  const container = useRef(null);
  const view = useInView(container);
  const animate = {
    initial: {
      opacity: 0,
      color: "black",
      rotateX: 20,
    },
    enter: {
      rotateX: 0,
      color: "gray",
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
    closed: {
      color: "black",
    },
  };
  return (
    <div
      ref={container}
      className="flex flex-col  w-full h-auto bg-black  items-center justify-center gap-20"
    >
      <div className="">
        <motion.h1
          variants={animate}
          animate={view ? "enter" : "closed"}
          initial={"initial"}
          className="md:text-9xl text-5xl text-gray-300"
        >
          ABOUT US
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.div
          variants={animate}
          animate={view ? "enter" : "closed"}
          initial={"initial"}
          className=" pb-10 flex flex-col justify-around items-center md:flex-row gap-10 md:gap-0"
        >
          <h2 className=" md:text-2xl text-xl text-gray-500 w-[80%] md:w-[40%]">
            Hey there! I'm Igor, a dedicated programmer with a passion for all
            things tech. Based in Bahia, Brasil. I thrive in the dynamic world
            of software development and emerging technologies.
          </h2>
          <h2 className="md:text-2xl text-xl text-gray-500 w-[80%] md:w-[40%]">
            Hey there! I'm Igor, a dedicated programmer with a passion for all
            things tech. Based in Bahia, Brasil. I thrive in the dynamic world
            of software development and emerging technologies.
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
