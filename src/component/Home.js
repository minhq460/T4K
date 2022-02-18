import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Product from './Products/Product';
import Simpleslider from './Slider/Simpleslider';

class Home extends Component {
  
    
    render() {
      
        return (
            <div>
                <Header />
                
                {/* SUPPORT AREA */}
        <div className="support-area">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-4 col-xs-12">
                <div className="single-support">
                  <div className="sigle-support-icon">
                    <p><i className="fa fa-plane" /></p>
                  </div>
                  <div className="sigle-support-content">
                    <h2>FREE SHIPPING </h2>
                    <p>On Ordersover $200</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-12">
                <div className="single-support">
                  <div className="sigle-support-icon">
                    <p><i className="fa fa-dollar" /></p>
                  </div>
                  <div className="sigle-support-content">
                    <h2>FREE SHIPPING </h2>
                    <p>Moneyback guarantee</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-12">
                <div className="single-support">
                  <div className="sigle-support-icon">
                    <p><i className="fa fa-clock-o" /></p>
                  </div>
                  <div className="sigle-support-content">
                    <h2>24/7 SUPPORT</h2>
                    <p>Online consultations</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 hidden-sm col-xs-12">
                <div className="single-support">
                  <div className="sigle-support-icon">
                    <p><i className="fa fa-umbrella" /></p>
                  </div>
                  <div className="sigle-support-content">
                    <h2>SAFE SHOPPING</h2>
                    <p>Safe Shopping Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slider AREA */}
        <div className="slider-area">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-3">	
                <div className="slider-left">
                  <h2>Today’s Offer</h2>
                  <div id="owl-slider-left" className="owl-carousel owl-theme" style={{opacity: 1, display: 'block'}}>
                    <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: '1048px', left: '0px', display: 'block', transition: 'all 1000ms ease 0s', transform: 'translate3d(0px, 0px, 0px)'}}><div className="owl-item" style={{width: '262px'}}><div className="slider-left-carousel">
                            <div className="slider-left-product">
                              <a href="#"><img src="img/product/slider-product.jpg" alt="product" /></a>
                              <div className="slider-product-button">
                                <p className="add-chart"><a href="#">Add To Cart</a></p>
                              </div>
                            </div>
                            <p className="view-details"><a href="#">View details</a></p>
                          </div></div><div className="owl-item" style={{width: '262px'}}><div className="slider-left-carousel">
                            <div className="slider-left-product">
                              <a href="#"><img src="img/product/slider-product-2.jpg" alt="product" /></a>
                              <div className="slider-product-button">
                                <p className="add-chart"><a href="#">Add To Cart</a></p>
                              </div>
                            </div>
                            <p className="view-details"><a href="#">View details</a></p>
                          </div></div></div></div>
                    <div className="owl-controls clickable"><div className="owl-buttons"><div className="owl-prev"><i className="fa fa-chevron-left icon-white" /></div><div className="owl-next"><i className="fa fa-chevron-right icon-white" /></div></div></div></div>
                </div>
              </div>
              <div className="col-md-9 col-sm-9">
                <Simpleslider/>
              </div>
            </div>
          </div>
        </div>
        {/* Product AREA */}
        <div className="product-area">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="product-catagori-area">
                  {/* fix-catagori */}
                <div className="product-categeries">
                  <h2>Categories</h2>
                  <div className="panel-group" id="accrodian">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <i className="fa fa-male" /> Boys
                          <a className="collapsed" data-toggle="collapse" href="#colTwo" data-parent="#accrodian" />
                        </h4>
                      </div>
                      <div className="panel-collapse collapse" id="colTwo">
                        <div className="panel-body">
                          <a><Link to="/Toys"><i className="fa fa-angle-double-right" />&nbsp;Toys</Link></a>
                          <a><Link to="/Clothes"><i className="fa fa-angle-double-right" />&nbsp;Clothes</Link></a>
                          <a><Link to="/Accessories"><i className="fa fa-angle-double-right" />&nbsp;Accessories</Link></a>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <i className="fa fa-female" /> Girls
                          <a className="collapsed" data-toggle="collapse" href="#colThree" data-parent="#accrodian" />
                        </h4>
                      </div>
                      <div className="panel-collapse collapse" id="colThree">
                        <div className="panel-body">
                          <a><Link to="/Toys"><i className="fa fa-angle-double-right" />&nbsp;Toys</Link></a>
                          <a><Link to="/Clothes"><i className="fa fa-angle-double-right" />&nbsp;Clothes</Link></a>
                          <a><Link to="/Accessories"><i className="fa fa-angle-double-right" />&nbsp;Accessories</Link></a>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <i className="fa fa-gift" /> Gifts
                          <a className="collapsed" data-toggle="collapse" href="#colFive" data-parent="#accrodian" />
                        </h4>
                      </div>
                      <div className="panel-collapse collapse" id="colFive">
                        <div className="panel-body">
                          <a href="Toys"><Link to="/Toys"><i className="fa fa-angle-double-right" />&nbsp; For Boys</Link></a>
                          <a href="Toys"><Link to="/Toys"><i className="fa fa-angle-double-right" />&nbsp;For Girls</Link></a>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <i className="fa fa-bitbucket" /> Accessories
                          <a className="collapsed" data-toggle="collapse" href="#colSix" data-parent="#accrodian" />
                        </h4>
                      </div>
                      <div className="panel-collapse collapse" id="colSix">
                        <div className="panel-body">
                          <a><Link to="/Backpacks"><i className="fa fa-angle-double-right" />&nbsp;Backpacks</Link></a>
                          <a><Link to="/Hats"><i className="fa fa-angle-double-right" />&nbsp;Hats</Link></a>
                        
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <i className="fa fa-coffee" aria-hidden="true" />Clothes
                          <a className="collapsed" data-toggle="collapse" href="#colSeven" data-parent="#accrodian" />
                        </h4>
                      </div>
                      <div className="panel-collapse collapse" id="colSeven">
                        <div className="panel-body">
                          <a href="Shirts"><Link to="/Shirts"><i className="fa fa-angle-double-right" />&nbsp;Shirts</Link></a>
                          <a><Link to="/Trousers"><i className="fa fa-angle-double-right" />&nbsp;Trousers</Link></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* endfix-catagori */}
                <div className="best-seller-area">
                    <h2 className="header-title">Best seller</h2>
                    <div className="best-sell-product">
                      <div className="best-product-img">
                        <a href="#"><img src="img/product/best-product-1.png" alt="product" /></a>
                      </div>
                      <div className="best-product-content">
                        <h2><a href="#"></a>AVENGER LEGO</h2>
                        <h3>$45.00</h3>
                        <div className="best-product-rating">
                          <a href="#"><i className="fa fa-star" /></a>
                          <a href="#"><i className="fa fa-star" /></a>
                          <a href="#"><i className="fa fa-star" /></a>
                          <a href="#"><i className="fa fa-star" /></a>
                          <a href="#"><i className="fa fa-star-o" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="best-sell-product">
                      <div className="best-product-img">
                        <a href="#"><img src="img/product/best-product-2.png" alt="product" /></a>
                      </div>
                      <div className="best-product-content">
                        <h2><a href="#">CLASSIC LEGO</a></h2>
                        <h3>$55.00</h3>
                        <div className="best-product-rating">
                          <a href="#"><i className="fa fa-star" /></a>
                          <a href="#"><i className="fa fa-star" /></a>
                          <a href="#"><i className="fa fa-star" /></a>
                          <a href="#"><i className="fa fa-star" /></a>
                          <a href="#"><i className="fa fa-star-o" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="best-sell-product">
                      <div className="best-product-img">
                        <a href="#"><img src="img/product/best-product-3.png" alt="product" /></a>
                      </div>
                      <div className="best-product-content">
                        <h2><a href="#"></a>BARBIE DOLL</h2>
                        <h3>$65.00</h3>
                        <div className="best-product-rating">
                          <a href="#"><i className="fa fa-star" /></a>
                          <a href="#"><i className="fa fa-star" /></a>
                          <a href="#"><i className="fa fa-star" /></a>
                          <a href="#"><i className="fa fa-star" /></a>
                          <a href="#"><i className="fa fa-star-o" /></a>
                        </div>
                      </div>
                    </div>
                    
                    <p className="view-details">
                      <a href="#">View details</a>
                    </p>
                  </div>
                  <div className="add-kids single-add">
                    <a href="#"><img src="img/banner/kids-ad.jpg" alt="add" /></a>
                  </div>
                  <div className="testmonial-area fix">
                    <h2 className="header-title">Testimonial</h2>
                    <div id="owl-testmonial" className="owl-carousel owl-theme" style={{opacity: 1, display: 'block'}}>
                      <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: '1048px', left: '0px', display: 'block'}}><div className="owl-item" style={{width: '262px'}}><div className="testmonial fix">
                              <span><i className="fa fa-quote-left" /></span>
                              <p>Good toys, good quality, i love it.</p>
                              <h3>-MatthE Jensen</h3>
                              <img src="img/harry.jpg" alt="" />
                            </div></div></div></div>
                      <div className="owl-controls clickable"><div className="owl-buttons"><div className="owl-prev"><i className="fa fa-chevron-left icon-white" /></div><div className="owl-next"><i className="fa fa-chevron-right icon-white" /></div></div></div></div>
                  </div>
                  <div className="subscribe-area">
                    <h2>Subscribe Letter</h2>
                    <form action="#">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter your E-mail" />
                        <button type="button" className="btn"><i className="fa fa-envelope-o" /></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-md-9 col-sm-8">
                <div className="product-item-list">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                    <div className="product-item-heading">
        <div className="item-heading-title">
          <h2>Shirts</h2> 
        </div>
        <div className="result-short-view">
          <div className="result-short">
            <p>Showing 1-9 of 18 results </p>
            <div className="result-short-selection">
              <select>
                <option>Default sorting</option>
                <option>Sort by popularity</option>
                <option>Sort by average rating</option>
                <option>Sort by newness</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option> 
              </select>
              <i className="fa fa-sort-alpha-asc" />
            </div>
          </div>
          {/* <div className="view-mode">
            <a href="shop.html" className="active"><i className="fa fa-th-large" /></a>
            <a href="single-shop.html"><i className="fa fa-th-list" /></a>
          </div> */}
        </div>
      </div>
                    </div>
                  </div>

                  {/*Products*/}
                  <div className="row">
                    
                      <Product id={1}
                               name="VENENO SUPER CAR"
                               price={66.99}
                               images="img/product/single-product-1.jpg"
                               links= "product1"
                               rating={3}
                               rating_o={2}/>
                               
                      <Product id={2}
                              name="BATMAN CAR"
                              price={99.99}
                              images="/img/product/single-product-4.jpg"
                              links= "product2"
                              rating={4}
                               rating_o={1}/>
                      <Product id={3}
                              name="BARBIE AND KEN"
                              price={27.99}
                              images="/img/product/single-product-2.jpg"
                              links= "product3"
                              rating={3}
                               rating_o={2}/>
                      <Product id={4}
                              name="NEFT GUN #10"
                              price={127.99}
                              images="/img/product/single-product-3.jpg"
                              links= "product4"
                              rating={3}
                               rating_o={2}/>
                      <Product id={5}
                              name= "NEFT GUN #26"
                              price={130.99}
                              images="/img/product/single-product-6.jpg"
                              links= "product5"
                              rating={4}
                               rating_o={1}/>
                      <Product id={6}
                              name="LEGO NINJA"
                              price={77.00}
                              images="/img/product/single-product-5.jpg"
                              links= "product6"
                              rating={3}
                               rating_o={2}/>
                      <Product id={7}
                              name="TEEMO'S HAT LOL"
                              price={120.99}
                              images="/img/product/muteemo.jpg"
                              links= "product7"
                              rating={4}
                               rating_o={1}/>
                      <Product id={51}
                              name="SHORT JEANS"
                              price={19.99}
                              images= "/img/trousers/jean.jpg"
                              links="Trouser5"
                              rating={3}
                               rating_o={2}/>
                      <Product id={52}
                              name="WINTER TROUSER"
                              price={33.00}
                              images= "/img/trousers/Winter children's pants for boys.jpg"
                              links="Trouser6"
                              rating={5}
                               rating_o={0}/>
                  </div>
                  {/*End Products*/}
                  <div>
                  </div>
                  

                </div>
                <div className="arrivals-area single-add">
                  <a href="#"> <img src="img/banner/arrivals.jpg" alt="arrivals" /> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
               
                <Footer />
            </div>
        );
    }
}

export default Home;