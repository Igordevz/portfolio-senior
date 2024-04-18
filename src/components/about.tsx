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
  const scale = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

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

      <motion.div
        ref={container2}
        variants={animate}
        animate={view2 ? "enter" : "closed"}
        initial={"initial"}
        className="flex flex-col items-center  gap-7 md:gap-0 justify-evenly text-white w-full md:flex-row"
      >
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
            style={{ opacity: scale }}
            className=" w-[500px] scale-[0.5] z-10 absolute bottom-0 object-cover   "
          />
        </div>
        <div className="w-[50%]">
          <div className="w-full">
            <h1 className="md:text-4xl text-2xl">FRONTEND</h1>
            <h2 className="text-purple-300"> - Tech Stacks</h2>
            <h2>
              Sou Desenvolvedor <b>FRONTEND</b> e desde os 14 anos de idade
              tenho me esforçado para aprender mais sobre essa área.{" "}
              <strong className="text-purple-300">
                Coleção de Aprendizado dessa Área:
              </strong>{" "}
            </h2>
            <div className="my-3">
                <pre className="bg-zinc-800 p-4 rounded-lg">
                  <code className="text-yellow-400">const</code> aprendizado ={" "}
                  <code className="text-green-400">{"{"}</code>
                  <br />
                  <code className="text-blue-400">2019:</code>{" "}
                  <code className="text-purple-400">
                    "Estava aprendendo HTML5 - CSS - JS"
                  </code>
                  ,
                  <br />
                  <code className="text-blue-400">2020:</code>{" "}
                  <code className="text-purple-400">
                    "Estava aprendendo consumo de API, Responsive e conceitos
                    FlexBox"
                  </code>
                  <code className="text-green-400">{"};"}</code>
                </pre>
            </div>
          </div>
          {/* <div className="w-full">
            <h1 className="md:text-4xl text-2xl">BACKEND</h1>
            <h2 className="text-purple-700"> - Tech Stacks</h2>
            <h2>
              Sou Desenvolvedor <b>BACKEND</b> e desde os 14 anos de idade
              tenho me esforçado para aprender mais sobre essa área{" "}
            </h2>
           <div className="my-10">
               <span className="md:text-2xl text-xl text-zinc-700 ">-  2020 </span>
           </div>
          </div> */}
        </div>
      </motion.div>
      <div></div>
    </div>
  );
}
