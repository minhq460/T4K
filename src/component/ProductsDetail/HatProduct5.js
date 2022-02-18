import React, { Component } from 'react';
import Header from '../Header';
import Footter from '../Footer';
import Singleproduct from '../Singleproduct';
class HatProduct5 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="1" 
                name="ATT HAT" 

                price="$130.99" 

                images="/img/product/muatt.jpg" 
                
                description="Conventional hat size, fits most people, serrated metal buckle is very solid" 

                infomation="✪ Product: ATT HAT"

                infomation1="✪ Material: 100% Cotton blend, high quality"

                infomation2="✪ Colors: many different colors for you to choose "

                infomation3="✪ Hats can be bent at will"

               

               

                
                ></Singleproduct>

            </div>
        );
    }
}

export default HatProduct5;