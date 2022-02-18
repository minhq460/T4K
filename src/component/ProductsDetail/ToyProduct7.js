import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class ToyProduct7 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name= "COOKING BABY #1"
                    price= "$66.99"
                    images= "/img/Toy/girl-1.jpg" description="
                    BBT Global Cooking Toys 008-55 Pink For Baby" infomation="
                    ✪ Origin: England"
                    
                    infomation1="✪ Size: 65 x 47 x 64 cm"
                    
                    infomation2="✪ Material: Primary plastic is non-toxic"
                    
                    infomation3="✪ BBT Global Cooking Toys 008-55 Pink For Baby"
                    
                    infomation4="✪ 6 months warranty from the date of manufacture."></Singleproduct>

            </div>
        );
    }
}

export default ToyProduct7;