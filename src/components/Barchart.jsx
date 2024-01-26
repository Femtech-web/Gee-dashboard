/* eslint-disable no-unused-vars */

import React from 'react'
import { 
BarChart, 
ResponsiveContainer, 
Legend,  
XAxis, 
YAxis, 
CartesianGrid, 
Tooltip, 
Bar } from 'recharts';
import { useCustomState } from '../hooks/responsive';
import { BarExpenseChart } from './dummy';
import styles from './styles';

const BarChartComponent = () => {
  const [ mobile ] = useCustomState();

  return (
    <div className="min-w-[700px] h-[320px] ">
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={BarExpenseChart}
          margin={{top:0, right: 0, left: 6, bottom: 0}}
          >
            <defs>
              <linearGradient id="colorMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#34CAA5" stopOpacity={0.8}/>
                <stop offset="70%" stopColor="rgba(52, 202, 165, 0.10)" stopOpacity={0.8}/>
                {/* rgba(52, 202, 165, 0.10) */}
              </linearGradient>
            </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis type="number" domain={[0, 'dataMax - 10000']}  />
          <Tooltip />
          <Bar 
            dataKey="sales" 
            // fill="#82ca9d" 
            // stackId="a"
            type='string' 
            radius={20} 
            fillOpacity={1} 
            fill="url(#colorMonth)"
            // fill="rgba(52, 202, 165, 0.10)" 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent