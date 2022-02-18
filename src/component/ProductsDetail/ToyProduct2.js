import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class ToyProduct2 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name= "PUBG COMBO"
                    price= "$99.99"
                    images= "/img/Toy/boy-2.jpg" description="Children's toys take the desert eagle simulation model pistol toy 1-1 cos prop gun boy can not start" infomation="
✪ Product catalog: Rocket launch"

infomation1="✪ Size: 52 * 68 * 48 cm"

infomation2="✪ Load of up to 2 kg"

infomation3="✪ Children's toys take the desert eagle simulation model pistol toy 1-1 cos prop gun boy can not start"

infomation4="✪ 12 months warranty from the date of manufacture."></Singleproduct>

            </div>
        );
    }
}

export default ToyProduct2;