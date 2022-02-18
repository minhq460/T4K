import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class Product4 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="4" 
                    name="NEFT GUN #10" 
                    price="$127.99" 
                    images="/img/product/single-product-3.jpg" 
                    description="" 
                    infomation="">
                </Singleproduct>

            </div>
        );
    }
}

export default Product4;