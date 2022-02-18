import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class ToyProduct9 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name= "DOLL GIRL"
                    price= "$27.99"
                    images= "/img/Toy/girl-3.jpg" description="
                    Baby toys barbie doll princess toys girls dress wedding dress with -AL gift box" infomation="
                    ✪ Origin: China"
                    
                    infomation1="✪ Size: 6x32x47cm"
                    
                    infomation2="✪ Load of up to 0,5kg"
                    
                    infomation3="✪ Baby toys barbie doll princess toys girls dress wedding dress with -AL gift box"
                    
                    infomation4="✪ 2 months warranty from the date of manufacture."></Singleproduct>

            </div>
        );
    }
}

export default ToyProduct9;