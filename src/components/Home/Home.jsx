import React from 'react';
import FoodGellary from '../FoodGellary/FoodGellary';
import OurDelicious from '../OurDelicious/OurDelicious';
import Banner from '../banner/banner';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodGellary></FoodGellary>
            <OurDelicious></OurDelicious>
          
           
            
        </div>
    );
};

export default Home;