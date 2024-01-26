/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from 'react';
import BarChartComponent from './Barchart';
import { OrdersData } from './dummy';
import Document from '../assets/Document';
import ArrowDown from '../assets/ArrowDown';

const Order = ({ imgSrc, name, date, amount, status, currentMode }) => {
  const isDark = currentMode === "dark";

  return (
    <div className='flex items-center border-t-[1px] border-[#EDF2F6] dark:border-white/10 py-4 gap-4 px-2'>
      <div className='flex items-center gap-2 w-[30%]'>
        <span>
          <img
            src={imgSrc}
            alt="customer image"
            className='w-[2rem] h-[2rem] rounded-full'
          />
        </span>
        <p className='text-[1rem] font-medium text-[#3A3F51] dark:text-darkText'>{name}</p>
      </div>
      <p className='text-[1rem] text-[#737373] dark:text-darkText w-[25%]'><span className="w-full flex justify-start">{date}</span></p>
      <p className='w-[20%] items-center text-[1rem] text-[#0D062D] dark:text-darkText'><span className="w-full flex justify-start">{amount}</span></p>
      <p className='w-[15%] items-center'><span className={`${status === "paid" ? 'text-[#34CAA5]' : 'text-[#ED544E]'} w-full flex justify-start`}>{status} </span></p>
      <p className='w-[10%] items-center'><span className="w-full flex justify-start gap-2 items-center">
       {isDark ? <Document fill="white" /> : <Document fill="#292D32" />}
        <p className='text-small text-[#3A3F51] dark:text-darkText'>view</p>
        </span></p>
    </div>
  )
}

const LeftSection = ({ currentMode }) => {
  const [panel, setPanel] = useState(false);
  const [sort, setSort] = useState("weekly");
  const sortData = ["Weekly", "Monthly", "Yearly"];
  const isDark = currentMode === "dark";

  const handleSort = (item) => {
    setSort(item);
    setPanel(false);
  }

  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setPanel(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <section className='lg:w-[58%] w-full flex flex-col gap-6'>
      <div className='flex flex-col w-full bg-white dark:bg-inner_dark dark:border-white/10 rounded-[0.875rem] p-[0.5rem] border-[1px] border-[#EDF2F7]'>
        <div className='flex md:flex-row flex-col md:justify-between justify-start w-full md:gap-0 gap-3'>
          <h2 className='text-big font-semibold text-gray_600 dark:text-darkText'>Sales Trends</h2>
          <div className='flex gap-4 items-center md:justify-end justify-start flex-1 relative w-full text-gray_400 dark:text-darkText' ref={dropdownRef}>
            <p className='text-small font-medium '>Sort by : </p>
            <div 
            className='flex gap-2 items-center text-[0.75rem] cursor-pointer dark:border-white/10 hover:opacity-80 rounded-full py-[0.375rem] px-[0.75rem] border-[1px] border-[#E1DFDF]'
            onClick={() => setPanel(!panel)}>
              {sort}
              {isDark ? <ArrowDown fill="white" /> : <ArrowDown fill="#0D062D" />}
            </div>
            {panel && <div 
            className='flex text-[0.75rem] absolute top-9 md:right-0 md:left-[70%] right-[70%] left-0 z-40 flex-col gap-2 bg-white dark:border-white/10 dark:bg-outer_dark border-[1px] border-[#EDF2F7] px-[2rem] py-[0.5rem] w-[10rem] min-h-5 rounded-lg'
            >
              {sortData.map((item) => (
                <p key={item} onClick={() => handleSort(item)} className='hover:bg-gray-100 dark:hover:bg-darkText dark:hover:text-gray_600 cursor-pointer py-2 px-6 rounded-lg'>{item}</p>
              ))}
            </div>}
          </div>
        </div>
        <div className='mt-8 overflow-x-auto'>
          <BarChartComponent />
        </div>
      </div>
      <div className='flex flex-col overflow-x-auto w-full bg-white dark:bg-inner_dark rounded-[0.875rem] px-[0.5rem] pt-[0.5rem] border-[1px] border-[#EDF2F7] dark:border-white/10'>
        <div className='flex justify-between w-full px-2'>
          <h2 className='text-big font-semibold text-gray_600 dark:text-darkText'>Last Orders</h2>
          <p className='text-big text-[#34CAA5] font-medium cursor-pointer hover:underline'>See All</p>
        </div>
        <div className="overflow-x-auto">
          <div className="flex flex-col my-8 min-w-[700px]">
            <div className="mb-4 font-semibold text-[#9CA4AB] dark:text-gray-300 flex items-center w-full">
              <p className="w-[30%]"><span className="w-full flex justify-start">Name</span></p>
              <p className="w-[25%]"><span className="w-full flex justify-start">Date</span></p>
              <p className="w-[20%]"><span className="w-full flex justify-start">Amount</span></p>
              <p className="w-[15%]"><span className="w-full flex justify-start">Status</span></p>
              <p className="w-[10%%]"><span className="w-full flex justify-start">Invoice</span></p>
            </div>
            {OrdersData.map((data, index) => (
              <Order currentMode={currentMode} key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeftSection