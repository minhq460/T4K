import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class BackpackProduct3 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="B3" name="NINJA BAG" price="$130.59" images="/img/product/capninja.jpg" description="Backpack with thin umbrella material, Preventing from light rain Size 29cm x 12cm x 40cm Suitable for taking extra classes and personal belongings when traveling" infomation="
✪Backpack with thin umbrella fabric

✪ Resistant to small rain

✪ Size 29cm x 12cm x 40cm

✪ Suitable for taking extra classes and personal storage when traveling

"></Singleproduct>
            </div>
        );
    }
}

export default  BackpackProduct3;