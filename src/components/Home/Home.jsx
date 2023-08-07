import React from 'react';
import FoodGellary from '../FoodGellary/FoodGellary';
import OurDelicious from '../OurDelicious/OurDelicious';
import Banner from '../banner/banner';
import Chefs from '../Chefs/chefs';
import Special from '../Special/Special';
import Recent from '../Recent/Recent';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <FoodGellary></FoodGellary>
            <OurDelicious></OurDelicious>
            <Special></Special>
            <Recent></Recent>
          
           
            
        </div>
    );
};

export default Home;