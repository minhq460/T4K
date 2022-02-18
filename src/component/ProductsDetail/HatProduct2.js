import React, { Component } from 'react';
import Header from '../Header';
import Footter from '../Footer';
import Singleproduct from '../Singleproduct';
class HatProduct2 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="1" name="HELMET ONE PIECE" price="$120.00" images="/img/product/mubaohiem.jpg" description="Considered to be the hottest half-helmet or one-piece helmet series, it is inspired by the pirate island film or comic book series with the same name with the crossbones on the pirates' flags." 
                infomation="✪ Product: HELMET ONE PIECE"

                infomation1="✪ The company's products are clear, quality guaranteed"

                infomation2="✪ Free caps size round 55cm-59cm"

                infomation3="✪ Hats with long straps, easy to adjust to fit, keep hats from flying off the head"

                infomation4="✪ The inside of the hat has a hard foam padding, maximum protection for users when a collision occurs.">
                </Singleproduct>

            </div>
        );
    }
}

export default HatProduct2;