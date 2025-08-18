import frontendLogo from "../utils/frontend-logo.js";

const Skills = () => {

  return (
    <div className=' max-w-standard mx-auto lg:px-12 md:px-8 sm:px-4 px-3 bg-transparent'>
        <div className='w-full flex items-center bg-tertiary border border-line p-1'>
            <div className="w-full text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 font-light">
            {frontendLogo.map((logo, index) => (
                <div
                key={index}
                className="flex min-w-[200px] h-32 justify-center items-center gap-2 bg-white outline outline-line rounded-sm"
                >
                <img src={logo.image} alt={`img-${index}`} className="w-10" />
                <h1>{logo.name}</h1>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Skills;