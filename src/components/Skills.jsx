import frontendLogo from "../utils/frontend-logo.js";
import ExtendLine from "./ExtendLine.jsx";

const Skills = () => {

  return (
    <div className=''>
        <div className='w-full flex flex-col bg-white'>
            <div className="flex flex-col justify-center items-start md:gap-5 sm:gap-3 gap-2 sm:mb-5 mb-3 sm:px-8 px-4">
                <div className="relative flex items-center justify-center">
                    {/* <Border /> */}
                    <ExtendLine />
                    <div className="flex-1 flex sm:gap-2 gap-1 items-center justify-center bg-gray-100 sm:px-2 sm:py-1 px-1.5 py-0.5 rounded-full border border-line">
                    <div className="lg:w-2.5 lg:h-2.5 w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-primary font-semibold lg:text-sm sm:text-xs text-[11px]">Skills</p>
                    </div>
                </div>
                <div className="relative md:py-5 py-3">
                    <ExtendLine />
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-medium text-primary">
                    Technology Used
                    </h2>
                </div>
            </div>
            <div className="w-full sm:text-xl text-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 font-light bg-tertiary p-1">
            {frontendLogo.map((logo, index) => (
                <div
                key={index}
                className="flex max-sm:flex-col sm:min-w-[200px] min-w-[100px] sm:h-32 h-24 justify-center items-center gap-2 bg-white outline outline-line rounded-sm"
                >
                <img src={logo.image} alt={`img-${index}`} className="sm:w-10 w-7" />
                <h1>{logo.name}</h1>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Skills;