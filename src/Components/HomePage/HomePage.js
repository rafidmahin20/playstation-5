import React from 'react';
import ps5 from '../../ps5.jpeg';

const HomePage = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='h-full grid grid-cols-1 gap-24 md:grid-cols-2 '>
                <div>
                    <h1 className='text-7xl font-bold text-blue-500 md:text-3xl'>Future of gaming</h1>
                    <h1 className='text-6xl font-bold text-blue-500 md:text-3xl'>Is here</h1>
                    <p className='text-xl font-medium'>
                        Play has no limits. Your journey begins here. Experience lightning-fast laoding with an ultra-hugh speed ssd, deeper immersion with support for haptic feedback, adaptive triggers and 3D audio.
                    </p>
                </div>
                <div className='flex aspect-w-3 aspect-h-2'>
                    <img className='mx-auto object-cover rounded-full h-90 w-90' src={ps5} alt='ps5image'></img>
                </div>
            </div>
        </section>
    );
};

export default HomePage;