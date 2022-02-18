import React, { Component } from 'react';
import Header from '../Header';
import Footter from '../Footer';
import Singleproduct from '../Singleproduct';
class HatProduct3 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="1" name="ACE'S HAT" price="$30.59" images="/img/product/muace.jpg" description="Products are sewn with high-quality leatherette, always keep the hat shape and beautiful as in the film. The logo part is made of rubber
Thoroughly sewn each sewing thread, creating the motto to put the material on top" 
                infomation="✪ Product: ACE'S HAT"

                infomation1="✪ Material: Suede"

                infomation2="✪ Color: Orange"

                infomation3="✪ Length: 38 cm"

                infomation4="✪ Height: 13 cm.">
</Singleproduct>

            </div>
        );
    }
}

export default HatProduct3;