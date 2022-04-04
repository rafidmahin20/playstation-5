import React from 'react';
import UseReview from '../Hooks/UseReview';
import Reviews from './Reviews';


const ReviewPage = ({review}) => {
    const [reviews] = UseReview()
    return (
        <div>
             <h1 className='text-center text-4xl font-sans fony-bold text-cyan-700 pb-20 pt-10'>Welcome to our customer review section</h1>
             <div className='grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-10'>
                 {
                     reviews.map(review => <Reviews review={review}/>)
                 }
             </div>
        </div>
    );
};

export default ReviewPage;