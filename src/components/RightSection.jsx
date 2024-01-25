/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { cardsData, platformData } from './dummy';

const Card = ({ icon, chart, header, amount, status, increaseBy, arrow}) => {
  return (
    <div className='flex flex-col bg-white dark:bg-inner_dark dark:border-white/10 rounded-[0.875rem] p-[1rem] border-[1px] border-[#EDF2F7] gap-4'>
      <div className='flex justify-between items-center'>
        <span className='w-[2.5rem] h-[2.5rem] hover:opacity-80 flex justify-center items-center border-[1px] border-[#DADDDD] dark:border-white/10 rounded-full'><img src={icon} alt="box icon" /></span>
        <span><img src={chart} alt="chart" /></span>
      </div>
      <div>
        <h3 className='text-[#898989] dark:text-gray-300 text-big font-medium leading-[1.625rem]'>{header}</h3>
        <p className='text-gray_400 dark:text-darkText text-[1.5rem] font-semibold'>{amount}</p>
      </div>
      <div className='flex justify-between w-full inter_font items-center'>
        <div className={`flex justify-center items-center rounded-md p-1 gap-2 ${status === "increase" ? 'green-var' : 'red-var'}`}>
          <img src={status === "increase" ? "/arrow-chart.svg" : "/arrow-chart-down.svg"} alt="icon" />
          <span className={`${status === "increase" ? "text-[#34CAA5]" : "text-[#ED544E]"} text-[0.75rem] font-medium`}>{increaseBy}</span>
        </div>
        <span className='text-small dark:text-white'>vs. previous month</span>
      </div>
    </div>
  )
};

const Platform = ({header, amount, stat, color, percent }) => {
  return (
    <div className='flex flex-col gap-2 p-[1rem]'>
      <h3 className='text-big font-semibold text-gray_500 dark:text-darkText'>{header}</h3>
      <div className='w-full h-[0.75rem] bg-[#F5F5F5] rounded-[2.5rem]'>
        <div className={`h-[0.75rem] ${percent} ${color} rounded-[2.5rem]`}></div>
      </div>
      <div className='flex w-full justify-between text-gray_200 dark:text-gray-300 text-big'>
        <p>{amount}</p>
        <p>{stat}</p>
      </div>
    </div>
  )
}

const RightSection = () => {
  return (
    <section className='md:w-[38%] w-full flex flex-col gap-6'>
      <div className='grid h-[400px] md:grid-cols-2 grid-cols-1 gap-3'>
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className='min-h-[400px] w-full bg-white dark:bg-inner_dark rounded-[0.5rem] flex flex-col gap-3'>
        <div className='flex justify-between w-full px-2'>
          <h2 className='text-big font-semibold text-gray_600 dark:text-darkText'>Top Platform</h2>
          <p className='text-big text-[#34CAA5] font-medium cursor-pointer hover:underline'>See All</p>
        </div>
        <div className='flex flex-col gap-3'>
          {platformData.map((platform, index) => (
            <Platform key={index} {...platform} />
          ))}
        </div>
      </div>
    </section>
  ) 
}

export default RightSection