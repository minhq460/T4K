import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class ToyProduct5 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name= " LEGO ROBOT"
                    price= "$130.99"
                    images= "/img/Toy/boy-5.jpg" description="
                    Model Lego Creator - Deep Sea Adventure Robot 31090" infomation="
✪ Made in japan brand"

infomation1="✪ Size: 120 * 68 * 12 cm "

infomation2="✪ Load of up to 0,5 kg"

infomation3="✪ Model Lego Creator - Deep Sea Adventure Robot 31090"

infomation4="✪ 
12 months warranty from the date of manufacture."></Singleproduct>

            </div>
        );
    }
}

export default ToyProduct5;