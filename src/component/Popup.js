import React, { Component } from 'react';
import Header,{Search, search, searchPrice} from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import Product from './Products/Product';
import data from './data.json';
// import {ssss} from './Header'
class Popup extends Component {
    
    render() {
      let nameTemp = " ";
      let idTemp = " ";
      let priceTemp = " ";
      let imagesTemp = " ";
      let linkTemp = "";
      function searchRecord() {
        let name = search();
        let price1 = searchPrice();
        let productList = data.map((data) =>{

          console.log(data._id);
    
          if (data.title == name || data.price == price1){
            idTemp = data.id;
            nameTemp = data.title;
            priceTemp = data.price;
            imagesTemp = data.images;
            linkTemp = data.links;
            console.log(data._id);
              
            console.log("true" + " " + data.images); 
            console.log("true" + " " + data.price); 
            console.log("true" + " " + data.title);
          }
          
        })
        return <Product
        id= {idTemp}
        name= {nameTemp}
        price={priceTemp}
        images={imagesTemp}
        links= {linkTemp}
        rating={3}
        rating_o={2}
      />
      }
      
        return (
            <div>
                <Header name = "aaaaaa" />
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
                            {searchRecord()}


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

export default Popup;