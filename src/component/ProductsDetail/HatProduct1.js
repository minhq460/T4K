import React, { Component } from 'react';
import Header from '../Header';
import Footter from '../Footer';
import Singleproduct from '../Singleproduct';
class HatProduct1 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="1" name="STRAW HAT" price="$50.99" images="/img/product/murom.jpg" 
                description="Straw hats watering children, suitable for many ages" 
                infomation=" ✪ Product: Luffy hat"

                infomation1=" ✪ Colors: Light yellow, natural color"

                infomation1=" ✪ Material: Straw, mortar"

                infomation3="✪ Size: Inner diameter: 18cm (head round)"

                infomation4="✪ Hat height: 11cm Suitable: early children, young people, adults!">

                </Singleproduct>

            </div>
        );
    }
}

export default HatProduct1;