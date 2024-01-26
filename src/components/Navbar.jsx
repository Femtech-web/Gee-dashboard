/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, {useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import UserProfile from './UserProfile';
import styles from './styles';
import Calendar from '../assets/Calendar';
import Bell from '../assets/Bell';
import dayjs from "dayjs";
import { useCustomState } from '../hooks/responsive';

const Navbar = ({ currentMode, setIsNavOpen }) => {
  const presentDate =  dayjs().format('MMMM D, YYYY');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [mobile] = useCustomState();
  const isDark = currentMode === "dark";

  return (
    <section className={styles.navCont}>
      <span className={styles.center}>
       {!mobile && <p className="text-gray_600 dark:text-white text-[1.25rem] font-semibold">Dashboard</p>}
       {mobile && <AiOutlineMenu fontSize={25} 
       onClick={() => setIsNavOpen(true)} 
       className={`${isDark ? 'text-white' : 'text-black'} ml-3 cursor-pointer`}
       />}
      </span>
      <div className="flex items-center gap-4">
        {!mobile ? <div className='relative'>
          <span>
            <img 
              src="/icon-bar.svg" 
              alt="search-icon" 
              className={styles.searchIcon} 
            />
          </span>
          <input 
            type="text" 
            className={styles.navInput} 
            placeholder='search...' 
          />
        </div> 
        : <div className={styles.circle}>
          <span>
            <img 
              src="/icon-bar.svg" 
              alt="search-icon" 
              className="hover:opacity-80" 
            />
          </span>
        </div>}
       {!mobile && <div className='flex gap-3 inter_font dark:text-white'>
          {isDark ? <Calendar fill="white" stroke="white"/> : <Calendar fill="black" stroke="black" /> }
          <p className="font-medium text-small">{presentDate}</p>
        </div>}
        <span className={styles.circle}>
        {isDark ? <Bell fill="white" /> : <Bell fill="#0D062D"/> }
        </span>
        
        {!mobile ? <div className={styles.profileCont}
          onClick={() => setIsProfileOpen(true)}>
          <div className={styles.imgCont}>
            <img 
              src="/profile.png" 
              alt="userProfile" 
              className='rounded-full w-[45px] h-[45px]'
            />
          </div>
          <div >
            <p className="text-gray_600 text-small text-center dark:text-white">Justin Bergson</p>
            <p className="text-small text-gray_300">Justin@gmail.com</p> 
          </div>
          <span>
            <img 
              src="/Arrow-Down.svg" 
              alt="arrow_down-icon" 
              className="cursor-pointer" 
            />
          </span>
        </div> 
        : <div className={styles.imgCont} onClick={() => setIsProfileOpen(true)}>
          <img 
            src="/profile.png" 
            alt="userProfile" 
            className='rounded-full w-[40px] h-[40px] cursor-pointer hover:opacity-80'
          />
        </div>}
      </div>
    {isProfileOpen && (<UserProfile setIsProfileOpen={setIsProfileOpen} />)}
    </section>
  )
}

export default Navbar