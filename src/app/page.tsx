"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Main from "@/components/main/application-main";
import Cursor from "@/components/main/cursor";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);
  return (
    <>
    <Cursor active={active}/>
      <Header />
      <main>
        <Main setActive={setActive} />
      </main>
    </>
  );
}
