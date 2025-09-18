import { assets, experienceData, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

const Services = () => {
  return (
    <div className='bg-[#EAE1D2]'>
 <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    
    
    id="experience" className='w-full px-[12%] py-10 scroll-mt-20'>
        {/* <motion.h4 
        initial={{y: -20, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.3, delay:0.5}}
        className='text-center mb-2 text-lg font-Ovo'>Where I worked</motion.h4> */}
        
        <motion.h2 
        initial={{y: -20, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5, delay:0.5}}
        className='text-center mb-2 text-5xl font-Ovo'>My Experience</motion.h2>
        
        <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ducimus cum odit veritatis distinctio voluptatem necessitatibus pariatur quaerat libero ipsam reprehenderit incidunt, ut dicta. Quas quod officia optio, quisquam quis, est repellat mollitia asperiores esse temporibus provident in fuga nulla?
        </motion.p>

        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.9}}
        
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
            {experienceData.map(({icon,title,position,location}, index)=>(
                <motion.div
                whileHover={{scale:1.05}}
                
                key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-[#CC8358] hover:-translate-y-1 duration-500'>
                    <Image  src={icon} alt='' className='w-10'/>
                    <h3 className='text-lf my-4 text-gray-700'>{title}</h3>
                    <h3 className='text-lf my-4 text-gray-700'>{position}</h3>
                    <p className='text-sm text-gray-600 leading-5'>{location}</p>
                    {/* <p className='text-sm text-gray-600 leading-5'>{description}</p> */}
                    
                </motion.div>
            ))}
        </motion.div>

    </motion.div>
    </div>
   
  )
}

export default Services