"use client";
import React, { useEffect, useState } from "react";
import { ScrollControls, Scroll, Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Video from "../models/video";
import SplitType from "split-type";
import { projects } from "../projects/projects";
import Projects from "../projects";
import Modal from "../projects/pictureModal";
import Cursor from "./cursor";
export default function Main(){
  const [modal, setModal] = useState({active: false, index: 0})
  const [active, setActive] = useState(false);

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
      <main className="bg-black w-full h-screen relative overflow-hidden ">
          <Cursor active={active}/>

        <Canvas
          camera={{ position: [0, 0, 0], fov: 15 }}
          style={{
            display: "flex ",
            alignItems: "center",
            position: "absolute",
            width: "100%",
            opacity: 1,
            justifyContent: "center",
          }}
        >
          <ambientLight intensity={1} />
          <group>
            {/* <Video /> */}
          </group>
        </Canvas>
        <div className="w-full h-[90%] flex items-center justify-between ">
          <h1
            className="text-[white] z-10 md:text-9xl sm:text-8xl text-6xl  w-[70%] cursor-none text-center  mix-blend-difference"
            id="initial"
            onMouseEnter={() => {
              setActive(true);
            }}
            onMouseLeave={() => {
              setActive(false);
            }}
          >
            Welcome
          </h1>
          <br />
          <h1
            className="text-[white] z-10 md:text-9xl text-6xl  cursor-none w-[90%] absolute mt-[200px] text-end mix-blend-difference"
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
      </main >
      <div className="w-full h-auto flex items bg-black z-20" id="trigger-2">
      <main className="flex flex-col w-full h-auto items-center justify-center">
          <div className="flex flex-col  w-full  items-center justify-around ">
            {projects.map((project, index)=> {
              return <Projects index={index} project={project} setModal={setModal} key={index}/>
            })}
          </div>
          <Modal modal={modal} projects={projects}/>
      </main>
      </div>
    </>
  );
}
