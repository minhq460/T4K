import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class Shirt3 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name = "T-SHIRT"
              price = "$15.99"
              images = "/img/shirts/1.jpg" description="Children's short-sleeved T-shirt " infomation="
✪ 
White dress ears old girls white "

                    infomation1="✪ Shoulder open 90cm (height recommended 81-90cm) "

                    infomation2="✪ 
                    Shoulder open 100cm (recommended height 91-100cm)"

                    infomation3="✪ Children's short-sleeved T-shirt "

                    infomation4="✪ 
Exchange and return within 1 week"></Singleproduct>

            </div>
        );
    }
}

export default Shirt3;