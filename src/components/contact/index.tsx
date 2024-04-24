import React from "react";
import { Github, Instagram, Linkedin, Send } from "lucide-react";
export default function Contact() {
  return (
    <div id="contact" className="w-full h-[auto] flex xl:flex-row flex-col items-center xl:gap-0 gap-6 xl:items-baseline justify-center xl:justify-around bg-black py-20">
      <div className="flex xl:ml-20 w-[90%] xl:w-auto flex-col text-white justify-center gap-6  ">
        <h1 className="xl:text-7xl text-5xl text-gray-300">Contato</h1>

        <div className="flex flex-row relative items-center">
          <input
            type="text"
            placeholder="Informe apenas seu primeiro nome"
            className="outline-none border-[1px] relative border-gray-700 rounded-lg bg-zinc-950 py-4 pl-4 w-[100%]"
          />
          <button className=" absolute right-4">
            <Send className="text-zinc-300" />
          </button>
        </div>
        <p className="text-zinc-800 max-w-[90%]">
          Esta mensagem será enviada diretamente para o meu número de telefone,
          whatsApp.
        </p>
      </div>

      <div className="text-zinc-800 flex flex-col gap-4 w-[90%] xl:w-auto">
        <a target="_blank" href="" className="transition-all hover:text-zinc-300">
          Para Empresas
        </a>
        <a target="_blank" href="" className="transition-all hover:text-zinc-300">
          Frameworks Utilizados
        </a>
        <a target="_blank" href="" className="transition-all hover:text-zinc-300">
          Clientes
        </a>
        <a target="_blank" href="" className="transition-all hover:text-zinc-300">
          Parcerias
        </a>
      </div>

      <div className="text-zinc-800 flex flex-col gap-4 ">
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
        <a className="transition-all hover:text-zinc-400" target="_blank" href="https://www.linkedin.com/in/igor-silva-386b09255/">
          {" "}
          <Linkedin />
        </a>
      </div>
      </div>
    </div>
  );
}
