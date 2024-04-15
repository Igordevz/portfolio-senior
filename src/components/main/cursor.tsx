"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Cursor({active}:any) {
  const ref: any = useRef();
  console.log(active);
  
  useEffect(() => {
    const mouseClientX = gsap.quickTo(ref.current, "left", {
      duration: 0.35,
      ease: "power3"
    });
    const mouseClientY = gsap.quickTo(ref.current, "top", {
      duration: 0.35,
      ease: "power3"
    });
    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      mouseClientX(pageX - 15);
      mouseClientY(pageY - 15);
    });
  }, []);

  return (
    <div
      ref={ref}
      className={
        ` ${active ? "h-[200px] w-[200px]" : "h-[40px] w-[40px]"} transition-all  bg-white fixed z-20 rounded-full`}
    ></div>
  );
}
