import React, { Component } from 'react';
import Header from '../Header';
import Footter from '../Footer';
import Singleproduct from '../Singleproduct';
class HatProduct4 extends Component {
    render() {
        return (
            <div>
                <Singleproduct key="1" 
                name="TEEMO'S HAT LOL" 

                price="$120.99" 

                images="/img/product/muteemo.jpg" 

                description="Ever since he was an apprentice, the training officers and other trainers felt Teemo's speciality when he was normally a friendly and sociable person, but once the training began, he was quick. quickly became extremely serious and deadly. Teemo's outstanding talent quickly led him to the Model Dies Reconnaissance Force, one of Bandle City's most representative Task Forces alongside the Megling Commandos." 

                infomation="✪ Product name: TEEMO'S HAT LOL "

                infomation1="✪ Material: Fabric"

                infomation2="✪ Diameter: 20cm"

                

                
                ></Singleproduct>

            </div>
        );
    }
}

export default HatProduct4;