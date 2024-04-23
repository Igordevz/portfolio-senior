"use client";
import React, { useEffect, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, MenuIcon, X } from "lucide-react";
import Contact from "./contact";

export default function Menu() {
  const [menu, setMenu] = useState(false);

  const scaleAnimation = {
    initial: { y: "100%" },
    enter: {
      y: 0,
      transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] },
    },
    closed: {
      y: "100%",
      transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] },
    },
  };

  useEffect(() => {
    new SplitType("#t0", { charClass: "osmenu" });
    new SplitType("#t1", { charClass: "osmenu" });
    new SplitType("#t2", { charClass: "osmenu" });
    new SplitType("#t3", { charClass: "osmenu" });
    new SplitType("#t4", { charClass: "osmenu" });
    new SplitType("#t5", { charClass: "osmenu" });

    new SplitType("#u1", { charClass: "osmenu" });
    new SplitType("#u2", { charClass: "osmenu" });
    new SplitType("#u3", { charClass: "osmenu" });
    new SplitType("#u4", { charClass: "osmenu" });
    new SplitType("#u5", { charClass: "osmenu" });
    new SplitType("#u6", { charClass: "osmenu" });
    new SplitType("#u7", { charClass: "osmenu" });
    new SplitType("#u8", { charClass: "osmenu" });

    if (!menu) {
      gsap.to(".osmenu", {
        y: 115,

        stagger: 0.01,
        duration: 0.5,
      });
    } else {
      gsap.to(".osmenu", {
        opacity: 1,
        y: 0,
        stagger: 0.008,
        delay: 0.3,
        duration: 0.6,
      });
    }
  }, [menu]);

  return (
    <>
      <header className="fixed left-0 top-0  w-full h-screen  z-50">
        <motion.div
          variants={scaleAnimation}
          initial="initial"
          animate={menu ? "enter" : "closed"}
          className="fixed bg-blue-800 w-full  h-screen right-0 flex flex-col"
        >
          <div className="w-full relative h-20 overflow-hidden">
            <h2
              className="md:text-4xl text-xl text-white absolute right-5 top-5"
              id="t0"
            >
              Menu
            </h2>
          </div>
          <div className={`ml-10 flex flex-col gap-6 overflow-hidden`}>
            <a
              onClick={() => setMenu(false)}
              href="#projects"
              id="t1"
              className=" md:text-4xl text-xl overflow-hidden hover:translate-x-2 transition-all text-zinc-300"
            >
              Projetos
            </a>
            <a
              onClick={() => setMenu(false)}
              href="#about"
              
              id="t2"
              className=" md:text-4xl text-xl overflow-hidden hover:translate-x-2 transition-all text-zinc-300"
            >
              Sobre Mim
            </a>
            <a
              onClick={() => setMenu(false)}
              href="#"
              id="t3"
              className=" md:text-4xl text-xl overflow-hidden hover:translate-x-2 transition-all text-zinc-300"
            >
              Habilidades
            </a>
            <a
              onClick={() => setMenu(false)}
              href="#education"
              id="t4"
              className=" md:text-4xl text-xl overflow-hidden hover:translate-x-2 transition-all text-zinc-300"
            >
              Educação
            </a>
            <a
              onClick={() => setMenu(false)}
              href="#contact"
              id="t5"
              className=" md:text-4xl text-xl overflow-hidden hover:translate-x-2 transition-all text-zinc-300"
            >
              Contato
            </a>
          </div>
          <hr className="my-2" />
          <div className="w-full flex md:flex-row flex-col justify-evenly  items-stretch pt-20 h-auto ml-10 md:ml-0 gap-10">
            <div className="text-zinc-200 flex flex-col gap-4 ">
              <a
                target="_blank"
                href=""
                id="u1"
                className="transition-all overflow-hidden hover:text-zinc-300"
              >
                Para Empresas
              </a>
              <a
                target="_blank"
                href=""
                id="u2"
                className="transition-all overflow-hidden hover:text-zinc-300"
              >
                Frameworks Utilizados
              </a>
              <a
                target="_blank"
                href=""
                id="u3"
                className="transition-all overflow-hidden hover:text-zinc-300"
              >
                Clientes
              </a>
              <a
                target="_blank"
                href=""
                id="u4"
                className="transition-all overflow-hidden hover:text-zinc-300"
              >
                Parcerias
              </a>
            </div>

            <div className="text-zinc-200 flex flex-col gap-4  ">
              <h2 className="text-zinc-300 md:text-xl" id="u5">
                Redes Sociais
              </h2>
              <div className="flex flex-row justify-ce text-right">
                <a
                  id="u6"
                  className="transition-all overflow-hidden mr-2 hover:text-zinc-400"
                  target="_blank"
                  href="https://github.com/Igordevz"
                >
                  {" "}
                  <Github />
                </a>
                <a
                  id="u7"
                  className="transition-all overflow-hidden mx-2 hover:text-zinc-400"
                  target="_blank"
                  href="https://www.instagram.com/euigor_santoss/"
                >
                  {" "}
                  <Instagram />
                </a>
                <a
                  id="u8"
                  className="transition-all overflow-hidden mx-2 hover:text-zinc-400"
                  target="_blank"
                  href="https://www.linkedin.com/in/igor-silva-386b09255/"
                >
                  {" "}
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="fixed right-10 bottom-5">
          <button
            onClick={() => setMenu(!menu)}
            className="border-none bg-none p-4 text-black bg-white rounded-full"
          >
       {menu ?      <X className="text-xl" />: <MenuIcon className="text-xl"/>}
          </button>
        </div>
      </header>
    </>
  );
}
