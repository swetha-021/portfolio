import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {

    const sideMenuRef = useRef();

    const openMenu =()=>{
        sideMenuRef.current.style.transform ="translateX(-16rem)"
    }
    const closeMenu =()=>{
        sideMenuRef.current.style.transform ="translateX(16rem)"
    }

    const [isScroll,setIsScroll]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
  
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll? " bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>
        <a href="#top">
            <Image src = {assets.logo} alt="" className=' w-28 cursor-pointer '/>                
        </a>

        
        <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-[#CC8358] text-black shadow-sm bg-opacity-50 "}` }>
            <li><a className="font-Ovo" href="#top">Home</a></li>
            <li><a className="font-Ovo" href="#about">About me</a></li>
            <li><a className="font-Ovo" href="#experience">Experience</a></li>   
            <li><a className="font-Ovo" href="#work">My Work</a></li>  
            <li><a className="font-Ovo" href="#contact">Contact me</a></li>   
        </ul>

        <div className='flex items-center gap-4'>

            <a href="https://www.linkedin.com/in/swethaprakash21/" target="_blank">
                <Image src={assets.arrow_icon} alt="contact me" className='w-25 h-14' />
            </a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={assets.menu_black} alt='' className='w-6' />
            </button>
        </div>

        {/* MOBILE MENU */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt="" className='w-5 cursor-pointer'/>
            </div>

            <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
            <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
            <li><a className="font-Ovo" onClick={closeMenu} href="#experience">Experience</a></li>   
            <li><a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a></li>  
            <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>   
        </ul>

    </nav>
    </>
  )
}

export default Navbar