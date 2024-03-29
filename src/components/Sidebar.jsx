/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import styles from './styles';
import { useCustomState } from '../hooks/responsive';
import Settings from '../assets/Settings';
import Line from '../assets/Line';
import Sun from '../assets/Sun';
import Moon from '../assets/Moon';
import { bottomLinks, topLinks } from './dummy';

const Sidebar = ({ 
  setIsNavOpen, 
  currentMode, 
  setMode, 
  setCurrentBar, 
  currentBar,
  settingBar,
  setSettingBar 
}) => {
  const isDark = currentMode === "dark";

  const handleClick = (name) => {
    setSettingBar("");
    setCurrentBar(name);
  }

  const handleSetting = () => {
    setCurrentBar(null);
    setSettingBar("setting");
  }

  return (
    <section className={styles.container}>
      <div className="flex flex-col justify-between items-center h-full w-full">
        <div className='flex flex-col gap-6 items-center mt-3 w-full'>
          {topLinks.map((link, index) => (
            <div onClick={() => handleClick(link.name)} key={link.id} className='relative w-full flex justify-center cursor-pointer'>
              {currentBar === link.name 
              ? isDark 
              ? React.cloneElement(link.src, { stroke: "white", fill:"#fff", outer_fill:"#fff" }) 
              : React.cloneElement(link.src, { stroke: "black", fill:"black", outer_fill:"black" }) 
              : React.cloneElement(link.src, { stroke: "#B2ABAB", fill:"#B2ABAB", outer_fill:"#B2ABAB" })
              }
             {currentBar === link.name && index !== 0
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
          <div className='relative w-full flex justify-center cursor-pointer'>
            {<span onClick={handleSetting}>
             {settingBar === "setting"  
              ? isDark 
              ? <Settings stroke="#fff"/>
              : <Settings stroke="#000"/> 
              : <Settings stroke="#B2ABAB"/>}
              </span>
            }
            {settingBar === "setting" 
              && <span className='absolute right-0 top-0'>
                {isDark
                ? <Line fill="#fff" />
              : <Line fill="#0D062D" />}
              </span>
            }
          </div>
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
  )
}

export default Sidebar