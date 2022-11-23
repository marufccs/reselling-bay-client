import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className=''>
<div className='lg:mx-20 rounded sm:mt-8 lg:mt-12 mb-0'>
<img className='rounded' src="https://assets.website-files.com/5e4ef646507f139934406108/5e52e6e3eba25921383ee9f4_better_book_sales_strategy_blog.jpeg" alt="" />
</div>
<div className='text-left text-white text-6xl font-bold banner-texts w-1/2 h-1/4'>
    <h1 className='lg:mb-6 first'>Reselling books </h1>
    <h1 className='lg:mb-6 second'>Has never been</h1>
    <h1>This easier before</h1> 
</div>
        </div>
    );
};

export default Banner;