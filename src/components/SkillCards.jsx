import { motion } from 'framer-motion';

const SkillCards = ({ logos, scrollAnimations }) => {
    return (
        <>
            {logos.map((logo, index) => (
                <div 
                key={index} 
                className=' sm:min-w-[200px] min-w-[100px] max-sm:h-24 hover:z-40 z-30 cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:shadow-2xl duration-300 transition-transform'
                >
                    <motion.div 
                    {...scrollAnimations.card(index)}
                    className='h-full bg-white flex max-md:flex-col-reverse sm:p-8 sm:justify-between justify-center items-center gap-2  outline outline-line rounded-sm'>
                        <div
                        className='sm:h-full'>
                            <h1 className="font-medium">{logo.name}</h1>
                            <p className='text-sm mt-2 max-md:hidden'>{logo.data}</p>
                        </div>
                        <motion.img
                        src={logo.image} alt={`img-${index}`} 
                        className='md:w-15 sm:w-12  w-7'
                        />
                    </motion.div>
                </div>
            ))}
        </>
    );
}

export default SkillCards;
