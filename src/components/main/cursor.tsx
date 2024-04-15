"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Cursor({active}:any) {
  const ref: any = useRef();
  
  useEffect(() => {
    const mouseClientX = gsap.quickTo(ref.current, "left", {
      duration: 0.5,
      ease: "power3"
    });
    const mouseClientY = gsap.quickTo(ref.current, "top", {
      duration: 0.5,
      ease: "power3"
    });
    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      mouseClientX(pageX - (active ? 90 : 40));
      mouseClientY(pageY - (active ? 90 : 40));
    });
  }, []);

  return (
    <div
    
      ref={ref}
      className={
        ` ${active ? "h-[200px] w-[200px]" : "h-[40px] w-[40px]"} transition-all z-10 bg-white fixed  rounded-full`}
    ></div>
  );
}
