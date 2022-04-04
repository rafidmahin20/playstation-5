import React from 'react';

const BlogsPage = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-sans font-bold text-cyan-700'>Questions & Answers</h1>
            <section className='px-4 pt-10 pb-10 mx-auto max-w-7xl md:px-2'>
                <div className='h-full grid grid-cols-1 gap-20 md:grid-cols-2 '>
                    <div>
                        <h1 className='text-2xl font-sans font-bold'>What is context API?</h1>
                        <p className='text-xl font-sans font-medium'>
                            - Context is a way of creating a global application state which allows you to avoid having to pass props to different levels of components tree. React context api is a way of providing global state for your application so that you don't have to do props drilling for things like authentication and themes and languages and locals. The context API can extremely powerful in larger application for things like for again authentication locale and if you want to change languages for people that is something that typically most components need to know about. Context gives us two component context provider and context consumer.Context api is like a storage where any provider can create and store data.
                        </p>
                    </div>
                    <div>
                    <h1 className='text-2xl font-sans font-bold'>What is semantic tags?</h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogsPage;