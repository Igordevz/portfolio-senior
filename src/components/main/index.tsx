"use client";
import React, { useEffect } from "react";
import { ScrollControls, Scroll, Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Video from "../models/video";
import SplitType from "split-type";
export default function Main({ setActive }: any): any {
  useEffect(() => {
    new SplitType("#initial");
    new SplitType("#initial2");

    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <main className="bg-black w-full h-screen">
        <Canvas
          camera={{ position: [0, 0, 0], fov: 15 }}
          style={{
            display: "flex ",
            alignItems: "center",
            position: "absolute",
            width: "100%",
            opacity: 0.2,
            justifyContent: "center",
          }}
        >
          <ambientLight intensity={1} />
          <group>
            <Video />
          </group>
        </Canvas>
        <div className="w-full h-[90vh] flex items-center justify-between  z-10">
          <h1
            className="text-[white] z-10 text-9xl w-[70%] text-center "
            id="initial"
            onMouseLeave={() => {
              setActive(true);
            }}
            onMouseOut={() => {
              setActive(false);
            }}
          >
            Welcome
          </h1>
          <br />
          <h1
            className="text-[white] z-10 text-9xl  w-[90%] absolute mt-[200px] text-end"
            id="initial2"
            onMouseLeave={() => {
              setActive(true);
            }}
            onMouseOut={() => {
              setActive(false);
            }}
          >
            {" "}
            Portifolio
          </h1>
        </div>
      </main>
      <div>
        <h1>leo</h1>
      </div>
    </>
  );
}
