import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import UseChartOne from '../Hooks/UseChartOne';


const ChartOne = () => {
    const [data] = UseChartOne()
    return (
       <>
       
       <h3 className='text-3xl'>Month wise sell</h3>
       <LineChart width={400} data={data} height={300}>
          <Line dataKey={'sell'}></Line>
          <Legend></Legend>
          <Line dataKey={'investment'}></Line>
          <Tooltip></Tooltip>
          <XAxis dataKey={'month'}></XAxis>
          <YAxis dataKey={'sell'}></YAxis>
       </LineChart>

       </> 
    );
};

export default ChartOne;