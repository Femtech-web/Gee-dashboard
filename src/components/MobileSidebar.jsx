/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { AiOutlinePoweroff, AiOutlineClose } from 'react-icons/ai';
import styles from './styles';
import { useCustomState } from '../hooks/responsive';
import Logo from '../assets/Logo';
import Dashboard from '../assets/Dashboard';
import TrendUp from '../assets/TrendUp';
import User from '../assets/User';
import Box from '../assets/Box';
import Discount from '../assets/Discount';
import InfoBox from '../assets/Info';
import Line from '../assets/Line';
import Sun from '../assets/Sun';
import Moon from '../assets/Moon';
import { bottomLinks } from './dummy';
import Sidebar from './Sidebar';

// const MobileSidebar = ({ setIsNavOpen }) => {
//   return (
//     <div className='fixed w-full bg-black/50 min-h-screen z-40'>
//       <Sidebar mobile />
//       
//     </div>
//   )
// }

// export default MobileSidebar

const MobileSidebar = ({ currentMode, setMode, setIsNavOpen }) => {
  const isDark = currentMode === "dark";
  const topLinks = [
    {
      id: 0,
      src: <Logo />,
    },
    {
      id: 1,
      src: currentMode === "dark" ? <Dashboard fill="#fff" outer_fill="#fff" /> : <Dashboard fill="#0D062D" outer_fill="#0D062D"/>,
    },
    {
      id: 2,
      src: <TrendUp />
    },
    {
      id: 3,
      src:<User />
    },
    {
      id: 4,
      src: <Box />
    },
    {
      id: 5,
      src: <Discount />
    },
    {
      id: 6,
      src: <InfoBox />
    }
  ];
  return (
    <div className='fixed w-full bg-black/50 min-h-screen z-40'>
      <section className={styles.mobile_container}>
      <div className="flex flex-col justify-between items-center h-full w-full">
        <div className='flex flex-col gap-6 items-center mt-3 w-full'>
          {topLinks.map((link, index) => (
            <div key={link.id} className='relative w-full flex justify-center cursor-pointer'>
              {link.src}
             {index === 1 
              && <span className='absolute right-0 top-0'>
                {currentMode === "dark" 
                ? <Line fill="#fff" />
              : <Line fill="#0D062D" />}
              </span>
              }
           </div>
          ))}
          <div className='bg-white rounded-[6.25rem] flex flex-col gap-3 p-[0.5rem] -translate-y-3 z-40'>
            {<span onClick={() => setMode('light')} 
            className={`flex justify-center items-center cursor-pointer ${currentMode === "light" && "bg-[#34CAA5]"} w-[1.7rem] h-[1.75rem] rounded-full`}>{isDark ? <Sun fill="#0D062D" /> : <Sun fill="white"/>}</span>}
            <span onClick={() => setMode('dark')} 
            className={`flex justify-center items-center cursor-pointer ${currentMode === "dark" && "bg-[#34CAA5]"} w-[1.7rem] h-[1.75rem] rounded-full`}>{isDark ? <Moon fill="white" /> : <Moon fill="#B2ABAB" />}</span>
          </div>
        </div>
        <div className='flex flex-col gap-6 items-center mb-8 min-w-full'>
          {bottomLinks.map((link, index) => (
             <div key={link.id} className='relative flex justify-center cursor-pointer w-full'>
                <img 
                  src={link.src}
                  alt='nav icon' 
                  className='cursor-pointer' 
                  key={link.id}
                  width={25}
                />
             </div>
          ))}
        </div>
      </div>
    </section>
    <span  
    onClick={() => setIsNavOpen(false)} 
    className='absolute top-4 right-4 text-[#34CAA5] cursor-pointer hover:opacity-80'><AiOutlineClose fontSize={25}/></span>
    </div>
  )
}

export default MobileSidebar;