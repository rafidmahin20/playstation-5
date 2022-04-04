import React from 'react';
import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-sans font-bold text-cyan-700'>Welcome to Charts</h1>
            <section className='px-4 pt-10 pb-10 mx-auto max-w-7xl md:px-2'>
                <div className='h-full grid grid-cols-1 gap-20 md:grid-cols-2 '>
                    <div>
                        <ChartOne></ChartOne>
                    </div>
                    <div className='flex justify-center items-center'>
                        <ChartTwo></ChartTwo>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;