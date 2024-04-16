export default function Projects({ index, project, setModal }: any) {
  return (
    <a href={project?.link} className="w-full flex flex-row justify-between items-center">
    <div
      className="flex flex-row w-full text-zinc-500 hover:text-black border-t-[0.5px] border-zinc-900 py-10 justify-between px-5 md:px-40 items-end hover:scale-[0.98] hover:rounded-md  transition-all hover:bg-orange-600"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
    >
        <h3 className="md:text-5xl sm:text-4xl text-3xl font-normal">
          {project?.title}
        </h3>
        <p className="text-center">{project?.more}</p>
    </div>
      </a>
  );
}
