import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class Product6 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="6" 
                    name="LEGO NINJA" 
                    price="$77.00" 
                    images="/img/product/single-product-5.jpg" 
                    description="" 
                    infomation="">
                </Singleproduct>

            </div>
        );
    }
}

export default Product6;