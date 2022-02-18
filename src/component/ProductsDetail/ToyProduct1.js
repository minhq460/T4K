import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class ToyProduct1 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="" name="SUPER CAR"
                    price="$66.99"
                    images="/img/Toy/boy-1.jpg" description="The car has 1 12V / 7AH battery, 2 motors, super durable wheel. Built-in MP3 player, speed 3-6km / h, 2 modes of self-driving or remote control"
                    infomation="✪ Manufacturer: BBT GLOBAL. New template 2019"

                    infomation1="✪ Size: 120 * 68 * 48 cm"

                    infomation2="✪ Load of up to 40 kg"

                    infomation3="✪ The car has 1 12V / 7AH battery, 2 motors, super durable wheel. Built-in MP3 player, speed 3-6km / h, 2 modes of self-driving or remote control"

                    infomation4="✪ 12 months full car warranty, permanent maintenance BB BBT Global children's electric cars are manufactured according to European standards from the highest quality safety plastic, non-toxic materials and electronic components."></Singleproduct>

            </div>
        );
    }
}

export default ToyProduct1;