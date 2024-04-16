"use client";
import React, { useEffect, useRef, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import SplitType from "split-type";
import { projects } from "../projects/projects";
import Projects from "../projects";
import Modal from "../projects/pictureModal";
import Cursor from "./cursor";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import eu from "../../../public/eucomfudo.jpeg"
import Image from "next/image";
export default function Main() {
  if ("DeviceMotionEvent" in window) {
    // Se for suportada, solicite permissão ao usuário
    if (typeof (DeviceMotionEvent as any).requestPermission === "function") {
      (DeviceMotionEvent as any)
        .requestPermission()
        .then((permissionState: string) => {
          if (permissionState === "granted") {
          } else {
            console.error(
              "Permissão para acesso aos dispositivos de movimento não foi concedida."
            );
          }
        })
        .catch((error: any) => {
          console.error(
            "Erro ao solicitar permissão para acesso aos dispositivos de movimento:",
            error
          );
        });
    } else {
      console.error(
        "API de dispositivos de movimento não é suportada pelo navegador."
      );
    }
  } else {
    console.error(
      "API de dispositivos de movimento não é suportada pelo navegador."
    );
  }
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [active, setActive] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    new SplitType("#initial");
    new SplitType("#initial2");

    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      opacity: 1,
    });
    gsap.to("#initial3", {
      scrollTrigger: {
        trigger: "#trigger-2",
      },
      y: 0,
      x: 0,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <main className="bg-black w-full h-screen relative overflow-hidden ">
        <Cursor active={active} />
      
        <div className="w-full h-[90%] flex items-center justify-between ">
          <h1
            className="text-[white] z-10 md:text-9xl sm:text-8xl text-3xl absolute md:relative w-[70%] cursor-none text-center  mix-blend-difference"
            id="initial"
            onMouseEnter={() => {
              setActive(true);
            }}
            onMouseLeave={() => {
              setActive(false);
            }}
          >
            My
          </h1>
          <Image alt="img" src={eu} className=" char w-auto h-[60vh] md:h-[80vh] mix-blend-difference"/>
          <br />
          <h1
            className="text-[white] z-10 md:text-9xl text-4xl  cursor-none w-[90%] absolute mt-[200px] text-end mix-blend-difference"
            id="initial2"
            onMouseEnter={() => {
              setActive(true);
            }}
            onMouseLeave={() => {
              setActive(false);
            }}
          >
            {" "}
            Portifolio
          </h1>
        </div>
      </main>
      <div className="w-full h-auto flex items bg-black z-20">
        <main
          className="flex flex-col w-full h-auto items-center justify-center"
          id="trigger-2"
        >
          <PageScroll />
          <div className="flex flex-col  w-full  items-center justify-around">
            {projects.map((project, index) => {
              return (
                <Projects
                  index={index}
                  project={project}
                  setModal={setModal}
                  key={index}
                />
              );
            })}
          </div>
          <Modal modal={modal} projects={projects} />
        </main>
      </div>
    </>
  );
}

function PageScroll() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,

        scrub: 0.5,

        start: 0,

        end: window.innerHeight,

        onUpdate: (e) => (direction = e.direction * -1),
      },

      x: "-10px",
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -300) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });

    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.1 * direction;
  };

  return (
    <div
      className="flex flex-row w-full overflow-hidden gap-32 py-5"
      ref={slider}
    >
      <h3
        className="text-orange-500 text-8xl relative flex-nowrap"
        ref={secondText}
      >
        DEPLOYMENTS
      </h3>
      <h3
        className="text-orange-500 text-8xl relative flex-nowrap"
        ref={firstText}
      >
        DEPLOYMENTS
      </h3>
    </div>
  );
}
