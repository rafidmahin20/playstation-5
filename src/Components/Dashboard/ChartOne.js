import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const ChartOne = () => {
    const data01 = [
        { name: 'Supplier A', value: 400 },
        { name: 'Supplier B', value: 300 },
        { name: 'Supplier C', value: 300 },
        { name: 'Supplier D', value: 200 },
      ];
      const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
      ];
    return (
        <PieChart width={300} height={300}>
            <Pie data={data01} dataKey='value' cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label/>
            <Pie data={data02} dataKey='value' cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
            <Tooltip/>
        </PieChart>
    );
};

export default ChartOne;