"use client"
import React, { useState } from "react";
import { Github, Instagram, Linkedin, Send } from "lucide-react";
export default function Contact() {

  const [name, setName] = useState("");



  return (
    <div id="contact" className="w-full h-[auto] flex xl:flex-row flex-col items-center xl:gap-0 gap-6 xl:items-baseline justify-center xl:justify-around bg-black py-20">
      <div className="flex xl:ml-20 w-[90%] xl:w-auto flex-col text-white justify-center gap-6  ">
        <h1 className="xl:text-7xl text-5xl text-gray-300">Contato</h1>

        <div className="flex flex-row relative items-center">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Informe apenas seu primeiro nome"
            className="outline-none border-[1px] relative border-gray-700 rounded-lg bg-zinc-950 py-4 pl-4 w-[100%]"
          />
          <a target="_blank" href={`https://api.whatsapp.com/send?phone=5575998045284&text=Me%20chamo%2C%20${name ? name : "*sem nome*"}.%20Podemos%20trocar%20uma%20ideia?`} className=" absolute right-4" >
            <Send className="text-zinc-300" />
          </a>
        </div>
        <p className="text-zinc-600 max-w-[90%]">
          Esta mensagem será enviada diretamente para o meu número de telefone,
          whatsApp.
        </p>
      </div>

      <div className="text-zinc-600 flex flex-col gap-4 w-[90%] xl:w-auto">
        <a target="_blank" href="/works" className="transition-all hover:text-zinc-300">
          Para Empresas
        </a>
        <a target="_blank" href="https://github.com/Igordevz/Igordevz" className="transition-all hover:text-zinc-300">
          Frameworks Utilizados
        </a>
        <p  className="transition-all hover:text-zinc-300">
          programadorigor.dev@gmail.com
        </p>
       
      </div>

      <div className="text-zinc-600 flex flex-col gap-4 ">
        <h2 className="text-zinc-300 xl:text-xl">Redes Sociais</h2>
      <div className="flex flex-row justify-between">
      <a className="transition-all hover:text-zinc-400" target="_blank" href="https://github.com/Igordevz">
          {" "}
          <Github />
        </a>
        <a className="transition-all hover:text-zinc-400" target="_blank" href="https://www.instagram.com/euigor_santoss/">
          {" "}
          <Instagram />
        </a>
        <a className="transition-all hover:text-zinc-400" target="_blank" href="https://br.linkedin.com/in/igor-mateus-santos-silva-41a361310?trk=people-guest_people_search-card">
          {" "}
          <Linkedin />
        </a>
      </div>
      </div>
    </div>
  );
}
