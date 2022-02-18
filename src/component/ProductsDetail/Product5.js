import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class Product5 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="5" 
                    name="NEFT GUN #26" 
                    price="$130.99" 
                    images="/img/product/single-product-6.jpg" 
                    description="" 
                    infomation="">
                </Singleproduct>

            </div>
        );
    }
}

export default Product5;