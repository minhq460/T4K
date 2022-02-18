import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class Shirt4 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name = "POKEMON T-SHIRT"
              price = "$18.99"
              images = "/img/shirts/Pokemon t-shirt.jpg" description="Children's short-sleeved T-shirt" infomation="
✪ 
Children's jean jackets Extremely dust-proof models for boys and girls to wear are beautiful,"

                    infomation1="✪ 
                    Pikachu TEE Shirt 3-9 Years Old Baby Boy"

                    infomation2="✪ 
Size for children from 15-25kg, easily fit with the baby's Set map sir"

                    infomation3="✪ Children's short-sleeved T-shirt"

                    infomation4="✪ 
Exchange and return within 1 week"></Singleproduct>

            </div>
        );
    }
}

export default Shirt4;