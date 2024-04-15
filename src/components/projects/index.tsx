export default function Projects({index, project,setModal}:any) {
  return (
    <div className='flex flex-row w-full border-t-[1px] py-10 justify-between px-10 items-end' onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} >
      <h1 className="text-6xl ">{project?.title}</h1>
      <p className="text-center" >{project?.more}</p>
    </div>
  )
}