"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Cursor({active}:any) {
  const ref = useRef(null);
  
  useEffect(() => {
    let mouseClientX = gsap.quickTo(ref.current, "left", {
      duration: 0.05,
      ease: "elastic.out"
    });
    let mouseClientY = gsap.quickTo(ref.current, "top", {
      duration: 0.05,
      ease: "elastic.out"
    });
    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      mouseClientX(pageX);
      mouseClientY(pageY);
    });
  }, []);

  return (
    <div
    
      ref={ref}
      className={
        ` ${active ? "h-[200px] w-[200px]" : "h-[40px] w-[40px]"} transition-all z-10 bg-orange-500 absolute  rounded-full`}
    ></div>
  );
}