import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class ToyProduct6 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name= "K98"
                    price= "$77.00"
                    images= "/img/Toy/boy-6.jpg" description="
                    K98 Bullet Gun - The Latest Super Product 2019 (Large Version)" infomation="
✪ Made in Korean brand"

infomation1="✪ Size: 50cm"

infomation2="✪ Load of up to 3,5 kg"

infomation3="✪ K98 Bullet Gun - The Latest Super Product 2019 (Large Version)"

infomation4="✪ 12 months warranty from the date of manufacture."></Singleproduct>

            </div>
        );
    }
}

export default ToyProduct6;