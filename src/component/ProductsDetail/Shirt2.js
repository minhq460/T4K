import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class Shirt2 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name="PRINCESS DRESS"
                    price="$50.00"
                    images="/img/shirts/Princess dress for the baby.jpg" description="Princess kids dress" infomation="
✪ 
Princess white dress children luxurious, elaborately sewn many layers of lace soft - floating"

                    infomation1="✪ White dress 3-9 years old girls white luxury"

                    infomation2="✪ 

                    Meticulous beaded body, each cut line of floral motifs on the shirt are very luxurious, just like the adult bride's dress."

                    infomation3="✪  Princess kids dress"

                    infomation4="✪ 
Exchange and return within 1 week"></Singleproduct>

            </div>
        );
    }
}

export default Shirt2;