import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Menu from './Menu';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Menu/>
            <Categories/>
        </div>
    );
};

export default Home;