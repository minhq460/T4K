import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Product from '../Products/Product';

class Shirts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          productsshirts :  [
            {
              name : "BABY SHIRT",
              price : "$20.99",
              images : "/img/shirts/Baby shirt.jpg",
              links : "Shirt1"
            },
            {
              name : "PRINCESS DRESS",
              price : "$50.00",
              images : "/img/shirts/Princess dress for the baby.jpg",
              links : "Shirt2"

            },
            {
              name : "T-SHIRT",
              price : "$15.99",
              images : "/img/shirts/1.jpg",
              links : "Shirt3"
            },
            {
              name : "POKEMON T-SHIRT",
              price : "$18.99",
              images : "/img/shirts/Pokemon t-shirt.jpg",
              links : "Shirt4"
            },
            {
              name : "T-SHIRT BOYS",
              price : "$19.99",
              images : "/img/shirts/T-shirts for boys.jpg",
              links : "Shirt5"
            },
            {
              name : "UNIQUE CARO DRESS",
              price : "$25.00",
              images : "/img/shirts/Unique baby girl caro silk.jpg",
              links : "Shirt6"
            },
          ]
         
        };
      }
    
      show_products = () => {
        const listProduct = this.state.productsshirts.map((item, index4) => 
          <Product key={index4} name={item.name} price={item.price} images={item.images}links={item.links}></Product>
        );
        return listProduct;
      }   
    render() {
        return (
            <div>
                <Header/>
                <div className="breadcurb-area">
                    <div className="container">
                        <ul className="breadcrumb">
                        <li><a href="Home">Home</a></li>
                        <li><a href="Clothes">Clothes</a></li>
                        <li>Shirts</li>
                        </ul>
                    </div>
                    </div>
                    {/* Product Item AREA */}
                    <div className="product-item-area">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-3 col-sm-8">
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
                                    <div className="item-heading-title">
                                    <h2>Shirts</h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* {this.show_products()} */}
                                <Product id={40}
                            name="BABY SHIRT"
                            price={20.99}
                            images= "/img/shirts/Baby shirt.jpg"
                            links="Shirt1"
                            rating={4}
                            rating_o={1}/>
                                  <Product id={41}
                            name="BEAR SHIRT"
                            price={50.00}
                            images= "/img/shirts/aogau.jpg"
                            links="Shirt2"
                            rating={4}
                            rating_o={1}/>
                                  <Product id={42}
                            name="T-SHIRT"
                            price={15.99}
                            images= "/img/shirts/1.jpg"
                            links="Shirt3"
                            rating={4}
                            rating_o={1}/>
                                  <Product id={43}
                            name="POKEMON T-SHIRT"
                            price={18.99}
                            images= "/img/shirts/Pokemon t-shirt.jpg"
                            links="Shirt4"
                            rating={4}
                            rating_o={1}/>
                                  <Product id={44}
                            name="T-SHIRT BOYS"
                            price={19.99}
                            images= "/img/shirts/T-shirts for boys.jpg"
                            links="Shirt5"
                            rating={4}
                            rating_o={1}/>
                                  <Product id={45}
                            name="ORANGE SHIRT"
                            price={25.00}
                            images= "/img/shirts/aocam.jpg"
                            links="Shirt6"
                            rating={4}
                            rating_o={1}/>
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

                <Footer/>
            </div>
        );
    }
}

export default Shirts;