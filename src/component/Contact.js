import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header'

class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                  {/* Breadcurb AREA */}
                  <div className="breadcurb-area">
                    <div className="container">
                      <ul className="breadcrumb">
                        <li><a href="Home">Home</a></li>
                        <li>Contact</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.271635605517!2d106.78896371411714!3d10.866932360489747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276120e747b7%3A0x4621264c786596c7!2zxJDhuqFpIGjhu41jIE7DtG5nIEzDom0!5e0!3m2!1svi!2s!4v1598038924652!5m2!1svi!2s" frameBorder={0} style={{border: 0, width: '100%', height: '290px', paddingLeft:"100px", paddingRight:"100px", marginBottom:"20px"}} allowFullScreen />

                  </div>
                  {/* Contact-us area */}
                  <div className="contact-us-area">
                    <div className="contact-information">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 col-sm-6">
                            <div className="contact-details">
                              <div className="contact-head">
                                <h2>CONTACT DETAILS</h2>
                                <p>If you have trouble with my shop, let's contact with us by: </p>
                              </div>
                              <div className="contact-bottom">
                                <p><span><i className="fa fa-phone" /></span> Phone: 0395956546</p>
                                <p><span><i className="fa fa-envelope" /></span> E-mail: 18130141@st.hcmuaf.edu.vn</p>
                                <p><span><i className="fa fa-link" /></span> Website: <a href="http://www.hci2020group03.tk">www.hci2020group03.tk</a></p>
                                <p><span><i className="fa fa-map-marker" /></span> Address: Nong Lam University, Linh Trung Ward, Thu Duc District, HCM City, Vietnam.</p>
                              </div>
                              <div className="contact-social-icon footer-social-icon">
                                <ul className="list-inline">
                                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                  <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                                  <li><a href="#"><i className="fa fa-vimeo" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="contact-leave-message">
                              <div className="contact-head">
                                <h2>Leave A MESSAGE</h2>
                              </div>
                              <form action="#" className="form-horizontal">
                                <div className="form-group col-md-6">
                                  <label className="control-label">
                                    Subject
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                  <label className="control-label">
                                    E-mail
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                  <label className="control-label">
                                    Order reference
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                  <label className="control-label">
                                    Attach File
                                  </label>
                                  <input type="file" className="form-control" />
                                </div>
                                <div className="form-group col-md-12">
                                  <label className="control-label">
                                    Message
                                  </label>
                                  <textarea rows={5} className="form-control" defaultValue={""} />
                                </div>
                                <button className="btn">Send Message</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Contact;