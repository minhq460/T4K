import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Register extends Component {

    render() {
        return (
            <div>
                <Header />
                <div>		<div className="bg-img">
                    <div className="content">
                        <header>REGISTER</header>
                        <form action="#">
                            <div className="field">
                                <span className="fa fa-user" />
                                <input type="text" required placeholder="User Name" />
                            </div>

                            <div className="field space">
                                <span className="fa fa-user" />
                                <input type="text" required placeholder="Email or Phone" />
                            </div>
                            <div className="field space">
                                <span className="fa fa-lock" />
                                <input type="password" className="pass-key" required placeholder="Password" />

                            </div>
                            <div className="field space">
                                <span className="fa fa-lock" />
                                <input type="password" className="pass-key" required placeholder="Confirm password" />

                            </div>

                            <div className="field space">
                                <input type="submit" Value="Register" />
                            </div>
                        </form>
                        <div className="login">
                            Or login with</div>
                        <div className="links">
                            <div className="facebook">
                                <i className="fa fa-facebook-f"><span>Facebook</span></i>
                            </div>
                            <div className="instagram">
                                <i className="fa fa-instagram"><span>Instagram</span></i>
                            </div>
                        </div>
                        <div className="signup" style={{ color: 'black' }}>

                            <a href="Login">Have account?</a>
                        </div>
                    </div>
                </div>
                </div>
                <Footer />

            </div>
        );
    }
}

export default Register;