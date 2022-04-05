import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const ChartTwo = () => {
    const data = [
        {
          "name": "Supplier A",
          "Price": 4000,
          "margin": 20
        },
        {
          "name": "Supplier B",
          "Price": 3000,
          "margin": 30
        },
        {
          "name": "Supplier C",
          "Price": 2000,
          "margin": 29
        },
        {
          "name": "Supplier D",
          "Price": 2780,
          "margin": 45
        },
        {
          "name": "Supplier E",
          "Price": 1890,
          "margin": 60
        },
        {
          "name": "Supplier F",
          "Price": 2390,
          "margin": 10
        },
        {
          "name": "Supplier G",
          "Price": 3490,
          "margin": 70
        }
      ]
    return (
        <div>
          <h3 className='text-xl'>Investment vs revenue</h3>
          <BarChart width={400} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="margin" fill='#8884d8'/>
            <Bar dataKey="price" fill='#82ca9d'/>
        </BarChart>
        </div>
    );
};

export default ChartTwo;