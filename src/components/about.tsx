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
  return (
    <div
      id="about"
      className="flex flex-col w-full h-auto py-7 bg-black items-center justify-center md:gap-20 gap-7"
    >
      <div className="">
        <motion.h1 className="md:text-9xl text-5xl text-gray-300">
          SOBRE MIM
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.div className="pb-10 flex flex-col justify-around items-center md:flex-row gap-10 md:gap-0">
          <h2 className="md:text-xl text-[20px] text-gray-500 w-[80%] md:w-[40%]">
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

      <div className="flex flex-col items-center gap-7 md:gap-0 justify-evenly text-white w-full md:flex-row" id="habilidades">
        <div className="relative w-full md:w-auto flex items-center justify-center md:flex-none">
          <motion.img
            src="/bg.jpg"
            alt="img"
            className="w-[500px] h-[500px] absolute saturate-0 bottom-0 z-10"
          />
          <div className="md:w-[500px] w-[94%] h-[500px] "></div>
          <motion.img
            src="/bg.jpg"
            alt="img"
            className="md:w-[500px] w-[94%] scale-[0.5] z-10 absolute bottom-0 object-cover"
          />
        </div>
        <div className="md:w-[50%] py-10 w-[94%] flex flex-col gap-5">
          <div className="w-full">
            <h1 className="md:text-4xl text-2xl">FRONTEND</h1>
            <h2 className="text-blue-300"> - Tech Stacks</h2>
            <h2>
              Sou um desenvolvedor especializado em <b>Frontend</b> e minha
              jornada nessa área começou aos 15 anos de idade. Desde então,
              tenho dedicado meus esforços para aprimorar minhas habilidades e
              conhecimentos neste campo.
              <strong className="text-blue-300">
                Coleção de Aprendizado dessa Área:
              </strong>
            </h2>
            <div className="my-3 bg-zinc-950 rounded-lg p-4">
              <code className="text-yellow-400">const</code>{" "}
              <code>cronograma</code> ={" "}
              <code className="text-green-400">{"{"}</code>
              <br />
              <code className="text-blue-400">2020:</code>{" "}
              <code className="text-pink-400">
                &quot;Aprendendo HTML5 - CSS - JS - Responsive e
                conceitos&quot;,
              </code>
              <br />
              <code className="text-blue-400">2021:</code>{" "}
              <code className="text-pink-400">
                &quot;Apredendo Conceitos Avançados De Javascript&quot;,
              </code>
              <br />
              <code className="text-blue-400">2022:</code>{" "}
              <code className="text-pink-400">
                &quot;Aprendendo consumo de API e a sua criação, React -
                React-native - styled-components - gsap&quot;,
              </code>
              <br />
              <code className="text-blue-400">2023:</code>{" "}
              <code className="text-pink-400">
                &quot;Aprendendo Nextjs - Minha Primeira vaga de trabalho como
                Dev Fullstack - Estágio&quot;,
              </code>
              <br />
              <code className="text-blue-400">2024:</code>{" "}
              <code className="text-pink-400">
                &quot;Preparatório para avançar com minhas habilidades na
                carreira e mais estudo&quot;
              </code>
              <br />
              <code className="text-green-400">{"};"}</code>
            </div>
          </div>
          <div className="w-full">
            <h1 className="md:text-4xl text-2xl">BACKEND</h1>
            <h2 className="text-blue-300"> - Tech Stacks</h2>
            <h2>
              Como um desenvolvedor especializado também em <b>Backend</b>,
              estou comprometido em criar sistemas robustos e eficientes que
              impulsionem o funcionamento de aplicativos e sites. Minha jornada
              nesta área é marcada por uma busca contínua pela excelência
              técnica e pelo aprimoramento constante das minhas habilidades.
              <strong className="text-blue-300">
                Coleção de Aprendizado dessa Área:
              </strong>
            </h2>
            <div className="my-3 bg-zinc-950 rounded-lg p-4">
              <code className="text-yellow-400">const</code>{" "}
              <code>cronograma</code> ={" "}
              <code className="text-green-400">{"{"}</code>
              <br />
              <code className="text-blue-400">2022:</code>{" "}
              <code className="text-pink-400 max-w-full">
                &quot;Inciei Aprendendo a criar um servidor Básico&quot;
              </code>
              ,
              <br />
              <code className="text-blue-400">2022.2:</code>{" "}
              <code className="text-pink-400 max-w-full">
                &quot;Aprendendo a criar modelos no banco de dados&quot;
              </code>
              ,
              <br />
              <code className="text-blue-400">2023:</code>{" "}
              <code className="text-pink-400 max-w-[80%]">
                &quot;Criação de projetos:{" "}
                <a
                  href="https://github.com/Igordevz/authentication---backend"
                  target="_blank"
                  className="bg-zinc-800 underline p-1 rounded-full mx-2"
                >
                  Authentication
                </a>
                <a
                  href="https://github.com/Igordevz/system-assessment-company"
                  target="_blank"
                  className="bg-zinc-800 mx-2 underline p-1 rounded-full"
                >
                  Sistema avaliação de satisfação
                </a>
                entre outros que são privados... &quot;
              </code>
              <br />
              <code className="text-blue-400">2023.2:</code>{" "}
              <code className="text-pink-400 max-w-[80%]">
                &quot; Minha primeira vaga como fullstack - estágio &quot;
              </code>
              <br />
              <code className="text-green-400">{"};"}</code>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
