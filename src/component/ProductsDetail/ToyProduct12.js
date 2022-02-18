import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class ToyProduct12 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name= "MOP TOY"
                    price= "$77.00"
                    images= "/img/Toy/girl-6.jpg" description="
                    Cleaning kit for baby! Both boys and girls!" infomation="
                    ✪ 
                    House cleaning kit:"
                    
                    infomation1="✅ Including: tool cart, ki and small broom, glass sprayer, big broom and mop broom ... (according to the color as shown)"
                    
                    infomation2="✅ There are 3 colors: red, light pink, dark pink!"
                    
                    infomation3="✪ 
                    Cleaning kit for baby! Both boys and girls!"
                    
                    infomation4="✪ 12 months warranty from the date of manufacture."></Singleproduct>

            </div>
        );
    }
}

export default ToyProduct12;