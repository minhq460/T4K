import React, { Component } from 'react';
import Header from '../Header';
import Footter from '../Footer';
import Singleproduct from '../Singleproduct';
class HatProduct6 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="1" 
                name="CHINA KING HAT" 

                price="$77.00" 

                images="/img/product/mult.jpg" 
                
                description="Designing a classic but stylish cap, youthful and stylish hats, helping you always stand out when you're out on the street, going out, going to school, coffee with friends or when traveling. The layers on the cone are held together by strong, evenly threaded threads. Thanks to this sturdy structure, the hat can protect users in bad weather conditions such as hot weather, light rain, or whirlwind. The hat is connected to a simple design, adding some eye-catching details that bring out the highlights and personality for the team." 

                infomation="✪ Product: CHINA KING HAT"

                infomation1="✪ Size: Free size"

                infomation2="✪ Sturdy and meticulous seams."

                infomation3="✪ Suitable for both men and women
                The hat is made of 100% cotton feels cool and comfortable for users because of its high hygroscopic ability, good absorbency. And yet, it also helps high-strength hats, do not fade. When washing dry quickly, can use detergents"

                

                
                ></Singleproduct>

            </div>
        );
    }
}

export default HatProduct6;