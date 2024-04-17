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
import eu from "../../../public/eucomfudo.jpeg";
import Image from "next/image";
export default function Main() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [button, setButton] = useState(false);
  const [active, setActive] = useState(false);
  const buttonCurriculo:any = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    new SplitType("#initial");
    new SplitType("#initial2");

    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.7,
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
    gsap.to(".picture", {
      y: 0,
      stagger: 0.05,
      opacity: 1,
      delay: 2,
    });
    //fazer isso amanha
    // let MouseXElement = gsap.quickTo(buttonCurriculo.current, "left", { 
    //   duration: 0.5,
    //   ease: "power3"
    // })

    // let MouseYElement = gsap.quickTo(buttonCurriculo.current, "top", { 
    //   duration: 0.5,
    //   ease: "power3"
    // })

}, []);
  

  return (
    <>
      <main className="bg-black w-full h-screen relative overflow-hidden flex flex-col md:flex-col gap-10 items-center justify-center ">
        <Cursor active={active} />
        <div className=" bottom-0 right-0 absolute md:top-0 ">
          <Image
            alt="img"
            src={eu}
            className="picture w-auto top-0  h-[40vh] md:h-[80vh] rounded-sm translate-y-[-115px] opacity-0 mix-blend-difference"
          />
        </div>
        <div className="w-[100%] h-auto md:h-full flex flex-col items-center justify-center relative">
          <h1
            className="text-[white] z-10 md:text-9xl sm:text-8xl text-5xl  md:relative w-[100%] md:w-[70%] cursor-none text-center  mix-blend-difference"
            id="initial"
            onMouseEnter={() => {
              setActive(true);
            }}
            onMouseLeave={() => {
              setActive(false);
            }}
          >
            My Portfolio
          </h1>
          <p className="text-zinc-500 text-center  w-[100%] md:w-[70%] z-10 ">
            Resume: I´am programmer
          </p>
          <button
            className=" my-4   rounded-full text-orange-500  px-5 py-4 transition-all  border-orange-500 border-[1px] hover:bg-orange-500 hover:text-white"
            ref={buttonCurriculo}
        >
            {" "}
            Download Curriculo
          </button>
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
