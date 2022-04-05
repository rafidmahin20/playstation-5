import React from 'react';
import ReactStars from 'react-stars';

const ReviewPage = ({review}) => {
    const {name, picture, rating, review_section} = review;
    return (
        <div>
            <div className='flex justify-center pb-20'>
                <div className='rounded-lg shadow-lg bg-white max-w-sm'>
                    <img className='rounded-t-lg' src={picture} alt=""></img>
                <div className='p-6'>
                    <h1 className='text-gray-900 text-xl font-medium mb-2'>Name:{name}</h1>
                    <p className='text-gray-700 text-base mb-4'>{review_section}
                    </p>
                    <h1 className='text-gray-900 text-xl font-medium mb-2'>
                        Rating: <ReactStars value={rating} size={30} color2={'#ffd700'} edit={false}></ReactStars>
                    </h1>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;