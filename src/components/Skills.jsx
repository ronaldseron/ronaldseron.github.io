import frontendLogo from "../utils/frontend-logo.js";

const Skills = () => {

  return (
    <div className=' max-w-standard mx-auto lg:px-12 md:px-8 sm:px-4 px-3 bg-transparent'>
        <div className='w-full flex items-center bg-tertiary border border-line p-1'>
            <div className="w-full sm:text-xl text-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 font-light">
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