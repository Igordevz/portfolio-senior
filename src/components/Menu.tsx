"use client"
import React, { useState } from "react";

export default function Menu() {
    const [menu, setMenu] = useState(false);
  return (
    <>
     {menu ? (
      <header className="fixed left-0 top-0  w-full h-screen  z-50">
      <div className="fixed bg-blue-700 w-[40%] h-screen right-0 ">
 
 </div>  
       <div className="fixed right-0 ">
         <button className="border-none bg-none text-white">
           <h1 className="text-2xl m-4 z-30">MENU</h1>
         </button>
       </div>
     </header>
     ) : (
      <header className="fixed left-0 top-0  z-50 ">
      <div className="fixed right-0 ">
        <button className="border-none bg-none text-white">
          <h1 className="text-2xl m-4 z-30">MENU</h1>
        </button>
      </div>
    </header>
     )}
    </>
   
  );
}
