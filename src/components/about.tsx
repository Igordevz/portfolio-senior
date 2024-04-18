"use client";

import {
  delay,
  useInView,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import bg from "../../public/bg.jpg";
import Image from "next/image";
export default function About() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  const container = useRef(null);
  const view = useInView(container);
  const container2 = useRef(null);
  const view2 = useInView(container2);

  const animate = {
    initial: {
      opacity: 0,
      rotateX: 20,
    },
    enter: {
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <div
      ref={container}
      className="flex flex-col  w-full h-auto py-7 bg-black  items-center justify-center md:gap-20 gap-7"
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
          <h2 className=" md:text-xl text-[20px] text-gray-500 w-[80%] md:w-[40%]">
            Estudante dedicado e entusiasta de tecnologia, atualmente cursando
            Sistema de Informação na Faculdade Santíssimo Sacramento. Estagiário
            de Desenvolvimento FullStack na Fatec-BA, contribuindo para
            aprimorar a experiência online por meio de análises detalhadas e
            implementação de melhorias
          </h2>
          <h2 className="md:text-xl text-xl text-gray-500 w-[80%] md:w-[40%]">
            Sou um entusiasta da tecnologia e um apaixonado por música, além de
            ser instrumentista. Sempre busco harmonizar meu amor pela inovação
            com minha paixão pela música.
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col  gap-7 md:gap-0 justify-evenly text-white w-full md:flex-row">
        <div className=" relative">
          <motion.img
            src="/bg.jpg"
            alt="img"
            className=" w-[500px] h-[500px] absolute saturate-0  bottom-0 z-10  "
          />
          <div className="w-[500px] h-[500px] "></div>
          <motion.img
            src="/bg.jpg"
            alt="img"
            style={{ opacity:scale}}
            className=" w-[500px] scale-[0.5] z-10 absolute bottom-0 object-cover   "
          />
        </div>
        <div className="">
          <h1 className="md:text-4xl text-2xl">FRONTEND</h1>
          <h2>Eu sou desenvolvedor frontend </h2>
        </div>
      </div>
      <div></div>
    </div>
  );
}
