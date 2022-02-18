import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class Trouser2 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name = "GIRL JEAN"
              price = "$22.99"
              images = "/img/trousers/Girls jeans.jpg" description="Girl jean baby" infomation="
✪ 
Children's jean jackets Extremely dust-proof models for boys and girls to wear are beautiful,"

                    infomation1="✪ Children's jean jacket The jean quality is not too thick, just enough not to cause a baby's secret"

                    infomation2="✪ 
Size for children from 10-20kg, easily fit with the baby's Set map sir"

                    infomation3="✪ Girl jean baby"

                    infomation4="✪ 
Exchange and return within 1 week"></Singleproduct>

            </div>
        );
    }
}

export default Trouser2;