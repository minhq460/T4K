import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class ToyProduct3 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name="HELICOPTER SS"
                    price="$27.99"
                    images="/img/Toy/boy-3.jpg" description="Paw Patrol Helicopter Toys- Paw Patrol Helicopter Toys, smart design, accurate flight speed, control features help the aircraft always in a balanced mode for easy control by the baby. Playing Helicopter helps children develop the dexterity and flexibility of ..." infomation="
✪ Made in Chinese brand"

                    infomation1="✪ Size: 120 * 68 * 48 cm"

                    infomation2="✪ Load of up to 1 kg"

                    infomation3="✪ Paw Patrol Helicopter Toys- Paw Patrol Helicopter Toys, smart design, accurate flight speed, control features help the aircraft always in a balanced mode for easy control by the baby. Playing Helicopter helps children develop the dexterity and flexibility of ..."

                    infomation4="✪ 12 months warranty from the date of manufacture."></Singleproduct>

            </div>
        );
    }
}

export default ToyProduct3;