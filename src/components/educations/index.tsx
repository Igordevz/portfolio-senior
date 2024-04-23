import { Courses } from "./courses";

export default function Education(){
  
  return (
    <main className="w-full h-auto bg-black flex flex-col  items-center justify-center gap-20"> 
        <div className="">
            <h1 className="md:text-9xl text-5xl text-gray-300">Educação</h1>
        </div>
        <div className="flex flex-col h-auto w-full gap-4 pb-10 items-center">
            {Courses.map((info) => (
              <div className="text-center flex flex-col  items-center justify-center opacity-25 duration-500 hover:opacity-100 hover:bg-blue-600  pb-5">
                <h2 className="text-zinc-300 md:text-2xl   py-2">{info?.title}</h2>
                <p className="text-gray-400  py-2 ">{info?.details}</p>
              </div>
            ))}          
        </div>
    </main>
  )
}