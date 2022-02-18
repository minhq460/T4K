import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class Product3 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="3" 
                    name="BARBIE AND KEN"
                    price="$27.99" 
                    images="/img/product/single-product-2.jpg" 
                    description="" 
                    infomation="">
                </Singleproduct>

            </div>
        );
    }
}

export default Product3;