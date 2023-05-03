import React from 'react';
import FoodGellary from '../FoodGellary/FoodGellary';
import OurDelicious from '../OurDelicious/OurDelicious';
import Banner from '../banner/banner';
import Chefs from '../Chefs/chefs';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <FoodGellary></FoodGellary>
            <OurDelicious></OurDelicious>
          
           
            
        </div>
    );
};

export default Home;