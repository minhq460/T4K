import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class Product2 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="1" name="BATMAN CAR" price="$99.99" images="/img/product/single-product-4.jpg" description="The car has 1 12V / 7AH battery, 2 motors, super durable wheel. Built-in MP3 player, speed 3-6km / h, 2 modes of self-driving or remote control" infomation="
✪Manufacturer: BBT GLOBAL. New template 2019

✪ Size: 120 * 68 * 48 cm

✪ Load of up to 40 kg

✪ The car has 1 12V / 7AH battery, 2 motors, super durable wheel. Built-in MP3 player, speed 3-6km / h, 2 modes of self-driving or remote control

✪ 12 months full car warranty, permanent maintenance BB BBT Global children's electric cars are manufactured according to European standards from the highest quality safety plastic, non-toxic materials and electronic components."></Singleproduct>

            </div>
        );
    }
}

export default Product2;