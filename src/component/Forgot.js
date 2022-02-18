import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Forgot extends Component {

    render() {
        return (
            <div>
                <Header />
                <div>		<div className="bg-img">
                    <div className="content">
                        <header>FORGOT </header>
                        <form action="#">
                            <div className="field">
                                <span className="fa fa-user" />
                                <input type="text" required placeholder="Email or Phone" />
                            </div>

                            <div className="field space">
                                <input type="submit" Value="Send" />
                            </div>
                        </form>
                        <div className="fff space" style={{ float: 'right' }}>

                            <a href="Login" style={{ color: '#fff' }}>Cancel</a>
                        </div>
                    </div>
                </div>
                </div>
                <Footer />

            </div>
        );
    }
}

export default Forgot;