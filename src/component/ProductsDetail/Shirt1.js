import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class Shirt1 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name="BABY SHIRT"
                    price="$20.99"
                    images="/img/shirts/Baby shirt.jpg" description="Children's jean jacket" infomation="
✪ 
Children's jean jackets Extremely dust-proof models for boys and girls to wear are beautiful,"

                    infomation1="✪ Children's jean jacket The jean quality is not too thick, just enough not to cause a baby's secret"

                    infomation2="✪ 
Size for children from 10-27kg, easily fit with the baby's Set map sir"

                    infomation3="✪ Children's jean jacket"

                    infomation4="✪ 
Exchange and return within 1 week"></Singleproduct>

            </div>
        );
    }
}

export default Shirt1;