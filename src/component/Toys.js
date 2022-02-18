import React, { Component } from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Product from './Products/Product';

class Toys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productstoys: [
                {
                    name: "SUPER CAR",
                    price: "$66.99",
                    images: "/img/Toy/boy-1.jpg",
                    links:"ToyProduct1",
                },
                {
                    name: "PUBG COMBO",
                    price: "$99.99",
                    images: "/img/Toy/boy-2.jpg",
                    links:"ToyProduct2",
                },
                {
                    name: "HELICOPTER SS",
                    price: "$27.99",
                    images: "/img/Toy/boy-3.jpg",
                    links:"ToyProduct3"

                },
                {
                    name: "ROBOT SS",
                    price: "$127.99",
                    images: "/img/Toy/boy-4.jpg",
                    links:"ToyProduct4"
                },
                {
                    name: " LEGO ROBOT",
                    price: "$130.99",
                    images: "/img/Toy/boy-5.jpg",
                    links:"ToyProduct5"
                },
                {
                    name: "K98",
                    price: "$77.00",
                    images: "/img/Toy/boy-6.jpg",
                    links:"ToyProduct6"
                },
            ],
            productstoys1: [
                {
                    name: "COOKING BABY #1",
                    price: "$66.99",
                    images: "/img/Toy/girl-1.jpg",
                    links:"ToyProduct7"
                },
                {
                    name: "MAKE UP MINI",
                    price: "$99.99",
                    images: "/img/Toy/girl-2.jpg",
                    links:"ToyProduct8"
                },
                {
                    name: "DOLL GIRL",
                    price: "$27.99",
                    images: "/img/Toy/girl-3.jpg",
                    links:"ToyProduct9"
                },
                {
                    name: "COOKING BABY #2",
                    price: "$127.99",
                    images: "/img/Toy/girl-4.jpg",
                    links:"ToyProduct10"
                },
                {
                    name: "CREAM",
                    price: "$130.99",
                    images: "/img/Toy/girl-5.jpg",
                    links:"ToyProduct11"
                },
                {
                    name: "MOP TOY",
                    price: "$77.00",
                    images: "/img/Toy/girl-6.jpg",
                    links:"ToyProduct12"
                },
            ],
            productstoys2: [
                {
                    name: "SUPER CAR",
                    price: "$66.99",
                    images: "/img/Toy/boy-1.jpg",
                    links:"ToyProduct1",
                },
                {
                    name: " LEGO ROBOT",
                    price: "$130.99",
                    images: "/img/Toy/boy-5.jpg",
                    links:"ToyProduct5"
                },
                {
                    name: "HELICOPTER SS",
                    price: "$27.99",
                    images: "/img/Toy/boy-3.jpg",
                    links:"ToyProduct3"
                },
                {
                    name: "COOKING BABY #2",
                    price: "$127.99",
                    images: "/img/Toy/girl-4.jpg",
                    links:"ToyProduct10"
                },
                {
                    name: "COOKING BABY #1",
                    price: "$66.99",
                    images: "/img/Toy/girl-1.jpg",
                    links:"ToyProduct7"
                },
                {
                    name: "MOP TOY",
                    price: "$77.00",
                    images: "/img/Toy/girl-6.jpg",
                    links:"ToyProduct12"
                },
            ],

        };
    }

    show_products = () => {
        const listProduct = this.state.productstoys.map((item, index2) =>
            <Product key={index2} name={item.name} price={item.price} images={item.images} links={item.links}></Product>
        );
        return listProduct;
    }
    show_products1 = () => {
        const listProduct = this.state.productstoys1.map((item, index2) =>
            <Product key={index2} name={item.name} price={item.price} images={item.images} links={item.links}></Product>
        );
        return listProduct;
    }
    show_products2 = () => {
        const listProduct = this.state.productstoys2.map((item, index2) =>
            <Product key={index2} name={item.name} price={item.price} images={item.images} links={item.links}></Product>
        );
        return listProduct;
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                <div className="breadcurb-area">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><a href="Home">Home</a></li>
                            
                            <li>Toys</li>
                        </ul>
                    </div>
                </div>
                {/* Product Item AREA */}
                <div className="product-item-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-8" style={{ height: '2000px' }}>
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
                                        <input type="text" id="amount" readOnly style={{ border: 0, color: '#f6931f', fontWeight: 'bold' }} />
                                    </p>
                                </div>
                                {/* <div className="filter-size-area">
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
                                </div> */}
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
                                                    <h2>Boys</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* {this.show_products()} */}

                                        <Product id={20}
                                            name="SUPER CAR"
                                            price={66.99}
                                            images="/img/Toy/boy-1.jpg"
                                            links= "ToyProduct1"
                                            rating={3}
                                            rating_o={2}/>
                                            <Product id={21}
                                            name="PUBG COMBO"
                                            price={99.99}
                                            images="/img/Toy/boy-2.jpg"
                                            links= "ToyProduct2"
                                            rating={4}
                                            rating_o={1}/>
                                            <Product id={22}
                                            name="HELICOPTER SS"
                                            price={22.99}
                                            images="/img/Toy/boy-3.jpg"
                                            links= "ToyProduct3"
                                            rating={3}
                                            rating_o={2}/>
                                            <Product id={23}
                                            name="ROBOT SS"
                                            price={127.99}
                                            images="/img/Toy/boy-4.jpg"
                                            rating={3}
                                            rating_o={2}
                                            links= "ToyProduct4"/>
                                            <Product id={24}
                                            name=" LEGO ROBOT"
                                            price={130.99}
                                            images="/img/Toy/boy-5.jpg"
                                            links= "ToyProduct5"
                                            rating={2}
                                            rating_o={3}/>
                                            <Product id={25}
                                            name="K98"
                                            price={77.00}
                                            images="/img/Toy/boy-6.jpg"
                                            links= "ToyProduct6"
                                            rating={3}
                                            rating_o={2}/>
                                           
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
                            <div className="col-md-9 col-sm-8">
                                <div className="product-item-list">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="product-item-heading">
                                                <div className="item-heading-title">
                                                    <h2>Girls</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* {this.show_products1()} */}
                                        <Product id={26}
                                            name= "COOKING BABY #1"
                                            price= {66.99}
                                            images="/img/Toy/girl-1.jpg"
                                            links= "ToyProduct7"
                                            rating={3}
                                            rating_o={2}/>
                                        <Product id={27}
                                            name="MAKE UP MINI"
                                            price={99.99}
                                            images="/img/Toy/girl-2.jpg"
                                            links= "ToyProduct8"
                                            rating={3}
                                            rating_o={2}/>
                                            <Product id={28}
                                            name= "DOLL GIRL"
                                            price= {27.99}
                                            images="/img/Toy/girl-3.jpg"
                                            links= "ToyProduct9"
                                            rating={3}
                                            rating_o={2}/>
                                            <Product id={29}
                                            name= "COOKING BABY #2"
                                            price= {127.99}
                                            images="/img/Toy/girl-4.jpg"
                                            links= "ToyProduct10"
                                            rating={3}
                                            rating_o={2}/>
                                            <Product id={30}
                                            name= "CREAM"
                                            price= {130.99}
                                            images="/img/Toy/girl-5.jpg"
                                            links= "ToyProduct11"
                                            rating={3}
                                            rating_o={2}/>
                                            <Product id={31}
                                            name= "COOKING BABY #1"
                                            price= {77.00}
                                            images="/img/Toy/girl-6.jpg"
                                            links= "ToyProduct12"
                                            rating={3}
                                            rating_o={2}/>

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
                            <div className="col-md-9 col-sm-8">
                                <div className="product-item-list">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="product-item-heading">
                                                <div className="item-heading-title">
                                                    <h2>Unisex</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* {this.show_products2()} */}
                                        <Product id={30}
                                            name= "CREAM"
                                            price= {130.99}
                                            images="/img/Toy/girl-5.jpg"
                                            links= "ToyProduct11"
                                            rating={3}
                                            rating_o={2}/>
                                            <Product id={31}
                                            name= "COOKING BABY #1"
                                            price= {77.00}
                                            images="/img/Toy/girl-6.jpg"
                                            links= "ToyProduct12"
                                            rating={3}
                                            rating_o={2}/>
                                            <Product id={29}
                                            name= "COOKING BABY #2"
                                            price= {127.99}
                                            images="/img/Toy/girl-4.jpg"
                                            links= "ToyProduct10"
                                            rating={3}
                                            rating_o={2}/>
                                            <Product id={24}
                                            name=" LEGO ROBOT"
                                            price={130.99}
                                            images="/img/Toy/boy-5.jpg"
                                            links= "ToyProduct5"
                                            rating={3}
                                            rating_o={2}/>
                                             <Product id={22}
                                            name="HELICOPTER SS"
                                            price={22.99}
                                            images="/img/Toy/boy-3.jpg"
                                            links= "ToyProduct3"
                                            rating={3}
                                            rating_o={2}/>
                                            
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
                <Footer />
            </div>
        );
    }
}

export default Toys;