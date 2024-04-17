"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Cursor from "../app/cursor";
import eu from "../../public/eucomfudo.jpeg";
import Image from "next/image";

export default function ContentPrimary() {
  const [active, setActive] = useState(false);
  const buttonCurriculo: any = useRef();

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

    const Ymove = gsap.quickTo(buttonCurriculo.current, "y", {
      duration: 1,
      ease: "elastic.out",
    });
    const Xmove = gsap.quickTo(buttonCurriculo.current, "x", {
      duration: 1,
      ease: "elastic.out",
    });
    buttonCurriculo.current.addEventListener("mousemove", (e: any) => {
      const { pageX, pageY } = e;
      const { width, height, left, top } =
        buttonCurriculo.current.getBoundingClientRect();
      const x = pageX - (left + width / 2);
      const y = pageY - (top + height / 2);

      Ymove(y * 1.5);
      Xmove(x * 1.5);
    });
    buttonCurriculo.current.addEventListener("mouseleave", (e: any) => {
      Ymove(0);
      Xmove(0);
    });
  }, []);

  return (
    <>
      <main className="bg-black w-full  h-auto relative min-h-[80vh] overflow-hidden flex flex-col md:flex-col gap-10 items-center justify-center ">
        <Cursor active={active} />
        <div
          data-scroll
          data-scroll-speed={0.01}
          className="relative bottom-0 right-0 md:absolute md:top-0  "
        >
          <Image
            alt="img"
            src={eu}
            className="picture w-full top-0  h-[40vh] md:h-[80vh] rounded-lg  translate-y-[-115px] opacity-0 mix-blend-difference"
          />
        </div>
        <div
          data-scroll
          data-scroll-speed={0.1}
          className="w-[100%] h-auto md:h-full flex flex-col items-center justify-center relative"
        >
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
            className=" my-4   rounded-full text-blue-500  px-5 py-4 transition-all  border-blue-500 border-[1px] hover:bg-blue-500 hover:text-white"
            ref={buttonCurriculo}
          >
            {" "}
            Download Curriculo
          </button>
        </div>
      </main>
    </>
  );
}
