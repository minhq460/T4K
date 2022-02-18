import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class ToyProduct4 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name="ROBOT SS"
                    price="$127.99"
                    images="/img/Toy/boy-4.jpg" description="
                    RC Nerf Battle Fighting Creatures TerraDrone Remote Control Spider Robot with 12 Darts 2.4G Boys Model Toys Gift" infomation="
✪ Made in America brand"

infomation1="✪ Size: 120 * 68 * 48 cm"

infomation2="✪ Load of up to 4 kg"

infomation3="✪ RC Nerf Battle Fighting Creatures TerraDrone Remote Control Spider Robot with 12 Darts 2.4G Boys Model Toys Gift"

infomation4="✪ 12 months warranty from the date of manufacture."></Singleproduct>

            </div>
        );
    }
}

export default ToyProduct4;