import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/shared/logo.svg"
import ImgOpen from "../assets/shared/icon-open.svg"
import ImgClose from "../assets/shared/icon-close.svg"

const Header = () =>{
    const [open, setOpen] = useState(false)

  return (
    <header className="absolute w-full lg:flex lg:justify-around md:flex md:justify-between md:items-center z-10">
            <div className="md:mt-10 md:mr-52 ml-10 mt-8 inline-block">
                <NavLink to="/home"><img src={Logo} alt=""/></NavLink> 
            </div>
            <div 
                onClick={()=>setOpen(!open)} 
                className={`absolute right-8 top-11 cursor-pointer md:hidden z-10 `}>
                <img src={open ? ImgClose : ImgOpen } alt="" className=""/>       
            </div>
            <nav>
                <ul className={`lg:w-[800px] lg:h-[96px] lg:gap-12 md:w-[470px] md:h-24 md:mt-10 md:flex md:justify-center md:items-center md:gap-8 md:pt-0 md:static md:backdrop-blur-lg md:rounded  w-3/4 h-screen -mt-24 absolute right-0  pt-[118px] bg-menu backdrop-blur-xl transition-all duration-500 ease-in rounded-md text-white ${open ? '':'hidden'}`}>
                    <li className="md:mb-0 mb-8 text-xl">
                        <NavLink 
                            to="/" 
                            end   
                            className={({isActive}) => isActive ? 'md:border-b-[3px] md:pb-8 md:border-l-0 md:pl-0 border-l-[3px] pl-7  border-white ' : 'md:pl-0 pl-8 md:hover:border-b-[3px] border-white border-opacity-50 pb-8 md:hover:text-white md:duration-[0ms] hover:text-gray-400 duration-300'}>
                            <span className="md:hidden lg:inline mr-2 font-bold">00</span>
                            HOME
                        </NavLink>
                    </li>
                    <li className="md:mb-0 mb-8 text-xl">
                        <NavLink 
                            to="/destination" 
                            className={({isActive}) => isActive ? 'md:border-b-[3px] md:pb-8 md:border-l-0 md:pl-0 border-l-[3px] pl-7  border-white ' : 'md:pl-0 pl-8 md:hover:border-b-[3px] border-white border-opacity-50 pb-8 md:hover:text-white md:duration-[0ms] hover:text-gray-400 duration-300'}>
                            <span className="md:hidden lg:inline  mr-2 font-bold">01</span>
                            DESTINATION
                        </NavLink>
                    </li>
                    <li className="md:mb-0 mb-8 text-xl">
                        <NavLink 
                            to="/crew/douglasHurley" 
                            className={({isActive}) => isActive ? 'md:border-b-[3px] md:pb-8 md:border-l-0 md:pl-0 border-l-[3px] pl-7  border-white ' : 'md:pl-0 pl-8 md:hover:border-b-[3px] border-white border-opacity-50 pb-8 md:hover:text-white md:duration-[0ms] hover:text-gray-400 duration-300'}>
                            <span className="md:hidden lg:inline  mr-2 font-bold">02</span>
                            CREW
                        </NavLink>
                    </li>
                    <li className="md:mb-0 mb-8 text-xl">
                        <NavLink 
                            to="/technology/launchVehicle" 
                            className={({isActive}) => isActive ? 'md:border-b-[3px] md:pb-8 md:border-l-0 md:pl-0 border-l-[3px] pl-7  border-white ' : 'md:pl-0 pl-8 md:hover:border-b-[3px] border-white border-opacity-50 pb-8 md:hover:text-white md:duration-[0ms] hover:text-gray-400 duration-300'}>
                            <span className="md:hidden lg:inline  mr-2 font-bold">03</span> 
                            TECHNOLOGY
                        </NavLink>
                    </li>
                </ul>
            </nav>
    </header>
    
  )
}

export default Header;