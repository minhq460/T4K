import React, { Component } from 'react';
import Header from '../Header';
import {Link} from 'react-router-dom';
import Footer from '../Footer';
import Product from '../Products/Product';

class Backpacks extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
          productbackpacks :  [
            {
              name : "OPM BAG",
              price : "$250.99",
              images : "/img/product/capopm.jpg",
              links : "BackpackProduct1"
            },
            {
              name : "FAIRYTAIL BAG",
              price : "$180.00",
              images : "/img/product/capfairytail.jpg",
              links : "BackpackProduct2"
            },
            {
              name : "NINJA BAG",
              price : "$130.59",
              images : "/img/product/capninja.jpg",
              links : "BackpackProduct3"
            },
            {
              name : "NARUTO BAG",
              price : "$200.99",
              images : "/img/product/capnaruto.jpg",
              links : "BackpackProduct4"
            },
            {
              name : "GOKU BAG",
              price : "$130.99",
              images : "/img/product/capsongoku.jpg",
              links : "BackpackProduct5"
            },
            {
              name : "TOKYO GHOUl BAG",
              price : "$177.00",
              images : "/img/product/captg.jpg",
              links : "BackpackProduct6"
            },
          ]
        };
      }
      show_backpacks = () => {
        const listProduct = this.state.productbackpacks.map((item, index2) => 
          <Product key={index2} name={item.name} price={item.price} images={item.images} links={item.links}></Product>
        );
        return listProduct;}

    
      
    render() {
        return (
            <div>
                <Header/>
                <div className="breadcurb-area"> 
                    <div className="container">
                        <ul className="breadcrumb">
                        <li><a href="Home">Home</a></li>
                        <li><a href="Accessories">Accessories</a></li>
                        <li>Backpacks</li>
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
                                    <h2>Backpacks</h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* {this.show_backpacks()} */}
                                <Product id={60}
                                name="OPM BAG"
                                price={250.99}
                                images= "/img/product/capopm.jpg"
                                links="BackpackProduct1"
                                rating={4}
                                rating_o={1}/>
                                <Product id={61}
                                name="FAIRYTAIL BAG"
                                price={180}
                                images= "/img/product/capfairytail.jpg"
                                links="BackpackProduct2"
                                rating={4}
                                rating_o={1}/>
                                <Product id={62}
                                name="NINJA BAG"
                                price={130.59}
                                images= "/img/product/capninja.jpg"
                                links="BackpackProduct3"
                                rating={4}
                                rating_o={1}/>
                                <Product id={63}
                                name="NARUTO BAG"
                                price={200.99}
                                images= "/img/product/capnaruto.jpg"
                                links="BackpackProduct4"
                                rating={4}
                                rating_o={1}/>
                                <Product id={64}
                                name="GOKU BAG"
                                price={130.99}
                                images= "/img/product/capsongoku.jpg"
                                links="BackpackProduct5"
                                rating={4}
                                rating_o={1}/>
                                <Product id={65}
                                name="TOKYO GHOUl BAG"
                                price={177.00}
                                images= "/img/product/captg.jpg"
                                links="BackpackProduct6"
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

export default Backpacks;