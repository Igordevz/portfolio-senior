"use client"
import React, { useEffect, useRef, useState } from 'react'
import Projects from './projects';
import { projects } from './projects/projects';
import Modal from './projects/pictureModal';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function ContentSecundary() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="w-full h-auto flex items bg-black z-20 ">
    <main
      className="flex flex-col w-full h-auto items-center justify-center"
      id="trigger-2"
    >
      <PageTextHorizontal />
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
  )
}


function PageTextHorizontal() {
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
      className=" anime_slide flex flex-row w-full overflow-hidden gap-32 py-5"
      ref={slider}
    >
      <h3
        className="text-orange-500 md:text-8xl text-5xl relative flex-nowrap"
        ref={secondText}
      >
        DEPLOYMENTS
      </h3>
      <h3
        className="text-orange-500 md:text-8xl text-5xl relative flex-nowrap"
        ref={firstText}
      >
        DEPLOYMENTS
      </h3>
    </div>
  );
}
