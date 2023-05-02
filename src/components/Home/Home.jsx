import React from 'react';
import Banner from '../banner/banner';
import FoodGellary from '../FoodGellary/FoodGellary';
import OurDelicious from '../OurDelicious/OurDelicious';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodGellary></FoodGellary>
            <OurDelicious></OurDelicious>
            <Footer></Footer>
           
            
        </div>
    );
};

export default Home;