import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

const About = () => {
  return (
    <div className='bg-[#EAE1D2]'>
        <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
        {/* <motion.h4 className='text-center mb-2 text-lg font-Ovo'
        initial={{y: -20, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5, delay:0.3}}
        >Introduction</motion.h4> */}
        
        
        <motion.h2 className='text-center mb-2 text-5xl font-Ovo'
        initial={{y: -20, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5, delay:0.5}}
        >About me</motion.h2>

        <motion.div className='flex h-[400px] w-full flex-col lg:flex-row items-center gap-20 my-20'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}  
        >
           
            
            
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:0.8}}
            
            
            className='flex-1'>
                <p className='mb-10 max-w-4xl font-Ovo'
                >I build full-stack solutions that feel simple to use and strong at their core. Along the way, I’m continuing to discover new areas of tech that inspire me and shape the kind of developer I’m becoming. I’m driven by curiosity, creativity, and the belief that great work happens when ideas are shared and built together!</p>
            
                <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6'
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.8, delay:1}}
                >
                    {infoList.map(({icon,iconDark,title,description},index)=>(
                        <motion.li  key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#CC8358] hover:-translate-y-1 duration-500 hover:shadow-black'
                        whileHover={{scale: 1.05}}
                        >
                            <Image className='w-7 mt-3' src={icon} alt={title}/>
                            <h3 className='my-4 font-semibold '>{title}</h3>
                            <p className=' text-sm'>{description}</p>
                        </motion.li>
                        
                    ))}
                </motion.ul>
 
                <motion.h4 
                initial={{y: 20, opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.8, delay:0.5}}
                
                className='my-6 text-gray-700 font-Ovo'>Tools I use</motion.h4>

                <motion.ul
                initial={{pacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.6, delay:1.0}}
                
                className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool,index)=>(
                        <motion.li 
                        whileHover={{scale:1.1}}
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                            <Image src={tool} alt="tool" className='w-5 sm:w-7'/>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>

            <motion.div className='w-80 sm:w-120 rounded-3xl max-w-none  -mt-10 -mr-22'
            initial={{opacity:0, scale:0.9}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.6}}
            >
                <Image src={assets.swetha} alt='user' className="w-full rounded-3xl h-[500px] w-[700px]" />
            </motion.div>

        </motion.div>
    
    
    
    
    </motion.div>
    </div>

    



  )
}

export default About