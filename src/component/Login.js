import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class Login extends Component {

    render() {
        return (
            <div>
                <Header />
                <div>		<div className="bg-img">
                    <div className="content">
                        <header>LOGIN</header>
                        <form action="#">
                            <div className="field">
                                <span className="fa fa-user" />
                                <input type="text" required placeholder="Email or Phone" />
                            </div>
                            <div className="field space">
                                <span className="fa fa-lock" />
                                <input type="password" className="pass-key" required placeholder="Password" />
                                <span className="show">SHOW</span>
                            </div>
                            <div className="pass">
                                <a href="Forgot">Forgot Password?</a>
                            </div>
                            <div className="field">
                                <input type="submit" Value="Login" />
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
                        <div className="signup">

                            <a><Link to="Register">Don't have account?Sign Up</Link></a>
                        </div>
                    </div>
                </div>
                </div>
                <Footer />

            </div>
        );
    }
}

export default Login;