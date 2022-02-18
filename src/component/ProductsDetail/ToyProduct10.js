import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class ToyProduct10 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name= "COOKING BABY #2"
                    price= "$127.99"
                    images= "/img/Toy/girl-4.jpg" description="Kitchen Cooking Set 36 dishes for kids to explore - Kitchen Toy Set" infomation="
                    ✪ Safe plastic material ♻️"
                    
                    infomation1="✪ Full size pot, 14, 16cm and 18cm Close to the real pot more"
                    
                    infomation2="✪ 
                    Set of 36 items Size as the picture you upload below"
                    
                    infomation3="✪ Kitchen Cooking Set 36 dishes for kids to explore - Kitchen Toy Set"
                    
                    infomation4="✪ 1 months warranty from the date of manufacture."></Singleproduct>

            </div>
        );
    }
}

export default ToyProduct10;