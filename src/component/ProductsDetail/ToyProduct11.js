import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Singleproduct from '../Singleproduct';
class ToyProduct11 extends Component {
    render() {
        return (
            <div>

                <Singleproduct key="1" name= "CREAM"
                    price= "$130.99"
                    images= "/img/Toy/girl-5.jpg" description="Ice cream 39 toy details play 999C music" 
                    infomation="✪ Applicable Age: Children ages 3 and older"
                    
                    infomation1="✪ Power Supply: 3X 1.5V AA battery (Not included)"
                    
                    infomation2="✪ Functions: developing communication skills and collaborative skills, good for parent and child interation, improving dexterity, visual development, hearing refinement, and more."
                    
                    infomation3="✪ Ice cream 39 toy details play 999C music"
                    
                    infomation4="✪ 5 months warranty from the date of manufacture."></Singleproduct>

            </div>
        );
    }
}

export default ToyProduct11;