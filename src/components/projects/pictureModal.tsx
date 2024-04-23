import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects }: any) {
  const modalContainer = useRef(null);
  const { active, index } = modal;
  const cursor = useRef(null);

  const cursorLabel = useRef(null);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="h-[300px] w-[300px] absolute hidden md:flex overflow-hidden pointer-events-none  items-center justify-center"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="h-[100%] w-[100%] transition-top duration-500 ease-in-out absolute"
        >
          {projects.map((project: any, index: any) => {
            const { src, color } = project;
            return (
              <motion.div
                className="h-[100%] w-[100%]  rounded-lg z-20 flex items-center justify-center"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                  <Image
                    className="h-auto"
                    src={`/${src}`}
                    width={400}
                    height={0}
                    alt="image"
                  />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className="h-20 w-20 rounded-full bg-zinc-950 cursor-pointer text-white absolute z-0 flex items-center justify-center text-sm font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <h1>Click</h1>
      </motion.div>
    </>
  );
}
