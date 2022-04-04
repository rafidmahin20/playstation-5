import React from 'react';
import { useNavigate } from 'react-router-dom';
import ps5 from '../../ps5.jpeg';
import UseReview from '../Hooks/UseReview';
import Reviews from '../Review/Reviews';

const HomePage = () => {
    const navigate = useNavigate();
    const [reviews] = UseReview();
    return (
       <main>
            <section className='px-4 pt-10 pb-10 mx-auto max-w-7xl md:px-2'>
            <div className='h-full grid grid-cols-1 gap-20 md:grid-cols-2 '>
                <div className='order-2 md:order-1'>
                    <h1 className='text-7xl font-bold text-blue-500 md:text-3xl'>Future of gaming</h1>
                    <h1 className='text-6xl font-bold text-blue-500 md:text-3xl'>Is here</h1>
                    <p className='text-xl font-medium'>
                        Play has no limits. Your journey begins here. Experience lightning-fast laoding with an ultra-hugh speed ssd, deeper immersion with support for haptic feedback, adaptive triggers and 3D audio.
                    </p>
                </div>
                <div className='flex aspect-w-3 aspect-h-2 order-1 md:order-2'>
                    <img className='mx-auto object-cover h-90 w-90' src={ps5} alt='ps5image'></img>
                </div>
            </div>
        </section>
        <section>
            <h1 className='text-center text-4xl font-sans font-bold text-cyan-700 pt-10 pb-10'>Review Section</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 pt-10'>
                {
                    reviews.slice(0,3).map((review, index) =>
                    <Reviews key={index} review={review}/>
                    )
                }
               <div class=" justify-center">
                    <button onClick={() => navigate('/review')} type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See All Reviews</button>
                </div>
            </div>
        </section>
       </main>
    );
};

export default HomePage;