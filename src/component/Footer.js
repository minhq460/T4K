import React, { Component } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ReactDOM from 'react-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                   <div className="footer-area">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="footer-info-card">
                  <div className="footer-logo">
                    <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
                  </div>
                  <p>We hope you will have a good choice to buy toys in my shop, thank you so much.</p>
                  {/* <ul className="list-inline">
                    <li><a href="#"><img src="img/visa-card/visa-card-1.png" alt="card" className="img-responsive" /></a></li>
                    <li><a href="#"><img src="img/visa-card/visa-card-2.png" alt="card" className="img-responsive" /></a></li>
                    <li><a href="#"><img src="img/visa-card/visa-card-3.png" alt="card" className="img-responsive" /></a></li>
                    <li><a href="#"><img src="img/visa-card/visa-card-4.png" alt="card" className="img-responsive" /></a></li>
                  </ul> */}
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-menu-area">
                  <h2 className="footer-heading">MY ACCOUNT</h2>
                  <div className="footer-menu">
                    <ul>
                      <li><a href="#"><i className="fa fa-angle-right" />My Account</a></li>
                      <li><a href="#"><i className="fa fa-angle-right" />About Us</a></li>
                      <li><a href="#"><i className="fa fa-angle-right" />Contact</a></li>
                      <li><a href="#"><i className="fa fa-angle-right" />Affiliates</a></li>
                      <li><a href="#"><i className="fa fa-angle-right" />Meet The Maker</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 hidden-sm hidden-xs">
                <div className="footer-menu-area">
                  <h2 className="footer-heading">Opening time</h2>
                  <div className="footer-menu opening-time">
                    <ul>
                      <li><i className="fa fa-angle-right" />Saturday<span>7.00 AM - 10.00 PM</span></li>
                      <li><i className="fa fa-angle-right" />Sunday<span>7.00 AM - 10.00 PM</span></li>
                      <li><i className="fa fa-angle-right" />Monday<span>7.00 AM - 10.00 PM</span></li>
                      <li><i className="fa fa-angle-right" />Tuesday<span>7.00 AM - 10.00 PM</span></li>
                      <li><i className="fa fa-angle-right" />Thusday<span>7.00 AM - 10.00 PM</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="contact-info-area">
                  <h2 className="footer-heading">Contact Us</h2>
                  <div className="contact-info">
                    <div className="contanct-details">
                      <div className="info-icon">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="info-content">
                        <p>0395956546</p>
                        <p>0974838004</p>
                      </div>
                    </div>
                    <div className="contanct-details">
                      <div className="info-icon">
                        <i className="fa fa-envelope-o" />
                      </div>
                      <div className="info-content">
                        <p>18130141@st.hcmuaf.edu.vn</p>
                        <p>mr6996mr@gmail.com</p>
                      </div>
                    </div>
                    <div className="contanct-details">
                      <div className="info-icon">
                        <i className="fa fa-map-marker" />
                      </div>
                      <div className="info-content">
                        <p style={{lineHeight:"20px"}}>Nong Lam University, Linh Trung Ward, Thu Duc District, HCM city</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>	
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="copyright">
                  Copyrignt@2020 <a href="https://freethemescloud.com/" target="_blank">Free themes Cloud </a>/ ALL RIGHTS RESERVED
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="footer-social-icon">
                  <ul className="list-inline">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                    <li><a href="#"><i className="fa fa-vimeo" /></a></li>
                  </ul>
                  <MessengerCustomerChat pageId="103907911362910" appId="282599276408141"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

                
            </div>
        );
    }
}

export default Footer;