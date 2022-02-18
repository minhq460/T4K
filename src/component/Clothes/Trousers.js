import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Product from '../Products/Product';

class Trousers extends Component {
    constructor(props) {
        super(props);
        this.state = {
          productstrousers :  [
            {
              name : "BOY JEANS",
              price : "$20.00",
              images : "/img/trousers/boys jeans.jpg",
              links : "Trouser1"
            },
            {
              name : "GIRL JEAN",
              price : "$22.99",
              images : "/img/trousers/Girls jeans.jpg",
              links : "Trouser2"
            },
            {
              name : "MALE BABY",
              price : "$27.99",
              images : "/img/trousers/Male baby overalls.jpg",
              links : "Trouser3"
            },
            {
              name : "SKIRT FLOOR SKIRT",
              price : "$39.99",
              images : "/img/trousers/Skirt floor skirt.jpg",
              links : "Trouser4"
            },
            {
              name : "SMOOTH SKIRT LEGS",
              price : "$19.99",
              images : "/img/trousers/Smooth skirt legs.jpg",
              links : "Trouser5"
            },
            {
              name : "WINTER TROUSER",
              price : "$33.00",
              images : "/img/trousers/Winter children's pants for boys.jpg",
              links : "Trouser6"
            },
          ]
        };
      }
    
      show_products = () => {
        const listProduct = this.state.productstrousers.map((item, index3) => 
          <Product key={index3} name={item.name} price={item.price} images={item.images} links={item.links}></Product>
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
                        <li>Trousers</li>
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
                                    <h2>Trousers</h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* {this.show_products()} */}
                                <Product id={47}
                            name="BOY JEANS"
                            price={20.00}
                            images= "/img/trousers/boys jeans.jpg"
                            links="Trouser1"
                            rating={4}
                            rating_o={1}/>
                             <Product id={48}
                            name="GIRL JEANs"
                            price={22.99}
                            images= "/img/trousers/Girls jeans.jpg"
                            links="Trouser2"
                            rating={4}
                            rating_o={1}/>
                             <Product id={49}
                            name="MALE BABY"
                            price={27.99}
                            images= "/img/trousers/Male baby overalls.jpg"
                            links="Trouser3"
                            rating={4}
                            rating_o={1}/>
                             <Product id={50}
                            name="SLEEP TROUSER"
                            price={39.99}
                            images= "/img/trousers/quanngu.jpg"
                            links="Trouser4"
                            rating={4}
                            rating_o={1}/>
                             <Product id={51}
                            name="SHORT JEANS"
                            price={19.99}
                            images= "/img/trousers/jean.jpg"
                            links="Trouser5"
                            rating={4}
                            rating_o={1}/>
                             <Product id={52}
                            name="WINTER TROUSER"
                            price={33.00}
                            images= "/img/trousers/Winter children's pants for boys.jpg"
                            links="Trouser6"
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

export default Trousers;