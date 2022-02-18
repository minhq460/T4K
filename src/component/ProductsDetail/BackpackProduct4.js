import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class BackpackProduct4 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="B4" name="NARUTO BAG" price="$200.99" images="/img/product/capnaruto.jpg" description="Backpack with thin umbrella material, Preventing from light rain Size 29cm x 12cm x 40cm Suitable for taking extra classes and personal belongings when traveling" infomation="
✪Backpack with thin umbrella fabric

✪ Resistant to small rain

✪ Size 29cm x 12cm x 40cm

✪ Suitable for taking extra classes and personal storage when traveling

"></Singleproduct>
            </div>
        );
    }
}

export default  BackpackProduct4;