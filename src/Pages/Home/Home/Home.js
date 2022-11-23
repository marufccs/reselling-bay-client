import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <Newsletter/>
        </div>
    );
};

export default Home;