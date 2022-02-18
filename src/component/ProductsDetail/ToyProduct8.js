import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class ToyProduct8 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name= "MAKE UP MINI"
                    price= "$99.99"
                    images= "/img/Toy/girl-2.jpg" description="Bowa Makeup Suitcase 8228,  
                    BOWA 8228 is designed delicately and lovely with many colors." infomation="
                    ✪
                    Makeup set includes: mirror, comb, perfume, lipstick, hairpin, dryer, cosmetics, etc."
                    
                    infomation1="✪ Size: 50cm"
                    
                    infomation2="✪ Improve the ability to identify basic makeup tools."
                    
                    infomation3="✪ Bowa Makeup Suitcase 8228"
                    
                    infomation4="✪ 3 months warranty from the date of manufacture."></Singleproduct>

            </div>
        );
    }
}

export default ToyProduct8;