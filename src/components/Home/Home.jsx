import React from 'react';
import FoodGellary from '../FoodGellary/FoodGellary';
import OurDelicious from '../OurDelicious/OurDelicious';
import Banner from '../banner/banner';
import Team from '../Team/Team';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Team></Team>
            <FoodGellary></FoodGellary>
            <OurDelicious></OurDelicious>
          
           
            
        </div>
    );
};

export default Home;