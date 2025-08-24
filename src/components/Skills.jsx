import frontendLogo from "../utils/frontend-logo.js";
import ExtendLine from "./ExtendLine.jsx";

const Skills = () => {

  return (
    <div className=''>
        <div className='w-full flex flex-col bg-white'>
            <div className="flex flex-col justify-center items-start sm:px-8 px-4">
                <div className=" relative flex items-center gap-2 bg-tertiary md:px-3 md:py-1.5 px-2 py-1 rounded-full border border-line ">
                    <ExtendLine />
                    <div className=" w-2 h-2 bg-primary rounded-full"></div>
                    <p className=" text-primary font-medium lg:text-sm text-xs">
                        MY SKILLS
                    </p>
                </div>
                <div className="relative md:py-5 py-3">
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-medium text-primary">
                    Technology Used
                    </h2>
                </div>
            </div>
            <div className="w-full relative sm:text-xl text-sm grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] max-md:grid-cols-2 gap-1 font-light bg-tertiary p-1">
            <ExtendLine />

            {frontendLogo.map((logo, index) => (

                <div key={index} className='flex max-sm:flex-col-reverse sm:min-w-[200px] min-w-[100px] max-sm:h-24 sm:p-8 sm:justify-between justify-center items-center gap-2 bg-white outline outline-line rounded-sm'>
                    <div className='sm:h-full'>
                        <h1 className="sm:text-2xl">{logo.name}</h1>
                        <p className='text-sm mt-2 max-md:hidden'>{logo.exp}</p>
                    </div>
                    <img src={logo.image} alt={`img-${index}`} 
                    className='md:w-15 sm:w-12  w-7'/>
                </div>          
            ))}
            </div>
        </div>
    </div>
  )
}

export default Skills;