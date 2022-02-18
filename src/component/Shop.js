import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import Product from './Products/Product';

class Shop extends Component {
  
 
    render() {
        return (
            <div>
                <Header/>
              <div>
                <div className="breadcurb-area">
                  <div className="container">
                    <ul className="breadcrumb">
                      <li><a><Link to="/home">Home</Link></a></li>
                      <li>Shop</li>
                    </ul>
                  </div>
                </div>
                {/* Product Item AREA */}
                <div className="product-item-area">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3 col-sm-4">
                        <div className="product-item-categori">
                          <div className="product-type">
                            <h2>Product Type</h2>
                            <ul>
                              <li><a><Link to="Toys"><i className="fa fa-angle-right" />Toys</Link></a></li>
                              <li><a><Link to="/Shirts"><i className="fa fa-angle-right" />Shirts</Link></a></li>
                              <li><a><Link to="/Trousers"><i className="fa fa-angle-right" />Trousers</Link></a></li>
                              <li><a><Link to="/Backpacks"><i className="fa fa-angle-right" />Backpacks</Link></a></li>
                              <li><a><Link to="/Hats"><i className="fa fa-angle-right" />Hats</Link></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="price-filter">
                          <h2>Filter by price</h2>
                          <div id="slider-range" />
                          <button className="btn btn-default">Filter</button>
                          <p>
                            <label htmlFor="amount">Price:</label>
                            <input type="text" id="amount" readOnly style={{border: 0, color: '#f6931f', fontWeight: 'bold'}} />
                          </p>
                        </div>
                        <div className="filter-size-area">
                          <h2>Filter by Size</h2>
                          <div className="filter-size">
                            <div className="filter-size-left">
                              <a href="#"><p>M (6)</p></a>
                              <a href="#"><p>X (7)</p></a>
                              <a href="#"><p>XS (10)</p></a>
                            </div>
                            <div className="filter-size-right">
                              <a href="#"><p>M (6)</p></a>
                              <a href="#"><p>X (7)</p></a>
                              <a href="#"><p>XS (10)</p></a>
                            </div>
                          </div>
                        </div>
                        <div className="add-shop">
                          <div className="add-kids single-add">
                            <a href="#"><img src="img/banner/kids-ad.jpg" alt="add" /></a>
                          </div>
                          <div className="add-dress single-add">
                            <a href="#"><img src="img/banner/kids-ad-2.jpg" alt="add" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9 col-sm-8">
                        <div className="product-item-list">
                          <div className="row">
                            <div className="col-md-12 col-sm-12">
                              <div className="product-item-heading">
                              </div>
                            </div>
                          </div>
          

                          <div className="row">
                            {/* {this.show_products()} */}
                          <Product id={1}
                               name="VENENO SUPER CAR"
                               price={66.99}
                               images="img/product/single-product-1.jpg"
                               links= "product1"
                               rating={5}
                               rating_o={0}/>
                          <Product id={10}
                              name="BATMAN CAR"
                              price={99.99}
                              images="/img/product/single-product-4.jpg"
                              links= "product2"
                              rating={3}
                               rating_o={2}/>
                          <Product id={11}
                            name= "NEFT GUN #10"
                            price={127.99}
                            images="img/product/single-product-3.jpg"
                            links= "product4"/>

                          <Product id={12}
                            name="NEFT GUN #26"
                            price={130.99}
                            images="img/product/single-product-6.jpg"
                            links= "product5"/>
                          <Product id={13}
                            name="LEGO NINJA"
                            price={77.00}
                            images="img/product/single-product-5.jpg"
                            links= "product6"/>
                          <Product id={14}
                            name="SUPER CAR"
                            price={66.99}
                            images="/img/Toy/boy-1.jpg"
                            links="ToyProduct1"/>
                          <Product id={15}
                            name="ROBOT SS"
                            price={127.99}
                            images="/img/Toy/boy-4.jpg"
                            links="ToyProduct4"/>
                            
                          <Product id={16}
                            name="OPM BAG"
                            price={250.99}
                            images="/img/product/capopm.jpg"
                            links="BackpackProduct1"/>
                          <Product id={17}
                            name="SMOOTH SKIRT LEGS"
                            price={19.99}
                            images= "/img/trousers/Smooth skirt legs.jpg"
                            links="ToyProduct1"/>
                            
                          </div>
                        </div>
                        <div className="shop-pagination floatright">
                          <ul className="pagination">
                            <li><a href="#"><i className="fa fa-angle-left" /></a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                          </ul>
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

export default Shop;