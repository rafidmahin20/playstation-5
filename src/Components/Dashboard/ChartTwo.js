import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import UseChartTwo from '../Hooks/UseChartTwo';


const ChartTwo = () => {
  const [data] = UseChartTwo()    
    return (
        <div>
          <h3 className='text-xl'>Investment vs revenue</h3>
          <BarChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis dataKey={'investment'}></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey="investment" stackId="a" fill='#8884d8'></Bar>
            <Bar dataKey="revenue" stackId="a" fill='#82ca9d'></Bar>
          </BarChart>
        </div>
    );
};

export default ChartTwo;