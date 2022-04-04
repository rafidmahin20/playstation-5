import React from 'react';

const BlogsPage = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-sans font-bold text-cyan-700'>Questions & Answers</h1>
            <section className='px-4 pt-10 pb-10 mx-auto max-w-7xl md:px-2'>
                <div className='h-full grid grid-cols-1 gap-20 md:grid-cols-2 '>
                    <div>
                        <h1 className='text-2xl font-sans font-bold'>What is context API?</h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogsPage;