import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class Trouser1 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name = "BOY JEANS"
              price = "$20.00"
              images = "/img/trousers/boys jeans.jpg" description="Zara Baby Boy Jean Jogger Pants" infomation="
✪ 
Super cute and trendy! Brand new with tags"

                    infomation1="✪Jean look, but it’s in joggers form. Two front pockets in the front and one in the back"

                    infomation2="✪ 
Size for children from 10-20kg, easily fit with the baby's Set map sir"

                    infomation3="✪ Zara Baby Boy Jean Jogger Pants"

                    infomation4="✪ 
Exchange and return within 1 week"></Singleproduct>

            </div>
        );
    }
}

export default Trouser1;