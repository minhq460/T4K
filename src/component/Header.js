import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { useStateValue} from './StateProvider';
import Product from './Products/Product';
import data from './data.json';

let a = 0;
let price1 = 0;
function Header() {
  const [{ basket}, dispath] = useStateValue();

  function Search() {
    let searchValue = document.getElementById("search-value").value;
    a = searchValue;
    price1 = searchValue;
    console.log(searchValue);
    console.log("search");
    let productList = data.map((data) =>{

      console.log(data._id);

      if (data.title == searchValue){
        console.log("true" + " " + data.price);


      }
      
    })

    
  }

  return (
    <div className="header-main">
                <div className="header-area" >
                <div className="header-top-bar">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="header-top-left">
                          <div className="header-top-menu">
                            {/* <ul className="list-inline">
                              <li><img src="img/flag.png" alt="flag" /></li>
                              <li className="dropdown"><a href="#" data-toggle="dropdown">English</a>
                                <ul className="dropdown-menu">
                                  <li><a href="#">Vietnamese</a></li>
                                </ul>
                              </li>
                              <li className="dropdown"><a href="#" data-toggle="dropdown">USD</a>
                                <ul className="dropdown-menu usd-dropdown">
                                  <li><a href="#">VND</a></li>
                                </ul>
                              </li>
                            </ul> */}
                          </div>
                          <p>Welcome visitor!</p>
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-12">
                        <div className="header-top-right">
                          <ul className="list-inline">
                            <li><a href="#"><i className="fa fa-user" />My Account</a></li>
                            {/* <li><a href="#"><i className="fa fa-heart" />Wishlist</a></li> */}
                            <li><a><Link to="Checkout"><i className="fa fa-check-square-o" />Checkout</Link></a></li>
                            <li><a><Link to="Login"><i className="fa fa-lock" />Login</Link></a></li>
                            <li><a><Link to="Register"><i className="fa fa-pencil-square-o" />Register</Link></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-2 col-xs-12">
              <div className="header-logo">
                <a><Link to="/"><img src="img/logo.png" alt="logo" /></Link></a>
              </div>
            </div>
            <div className="col-md-10 col-sm-10 col-xs-12" style={{top: "10px"}}>
              <div className="search-chart-list">
                
                <div className="header-search">
                  <form action="#">
                    <input type="text" placeholder="My Search" id="search-value"/>
                    <Link to="Popup"><button type="button" onClick={Search} ><i className="fa fa-search" /></button></Link>
                  </form>
                </div>
                <div className="header-chart">
                  <ul className="list-inline">
                    <li><a><Link to="/cart"><i className="fa fa-cart-arrow-down" /></Link></a></li>
                    <li><a><Link to="/cart"><strong>MY CART</strong></Link></a></li>
                    <li><a><Link to="/cart">{basket.length +" " + "items"}</Link></a></li>
                  </ul>
                </div>

                      

              </div>
            </div>
          </div>
        </div>
      </div>
              </div>
              {/* MAIN MENU AREA */}
              <div className="main-menu-area">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="main-menu hidden-xs">
                        <nav>
                          <ul>
                            <li><Link className="hd" to="/"><a>Home</a></Link></li>
                            <li><Link className="hd" to="/"></Link></li>
                            <li><Link to="/Shop"><a >Shop</a></Link></li>
                            <li><Link to="/Toys"><a>Toys</a></Link>
                            </li>
                            <li><Link to="/Clothes"><a>Clothes</a></Link>
                              <ul className="sub-menu">
                                <li><Link to="/Trousers"><a>Trousers</a></Link></li>
                                <li><Link to="/Shirts"><a>Shirts</a></Link></li>
                              </ul>
                            </li>
                            <li><Link to="/Accessories"><a>Accessories</a></Link>
                              <ul className="sub-menu">
                                <li><Link to="/Backpacks"><a>Backpacks</a></Link></li>
                                
                                <li><Link to="/Hats"><a>Hats</a></Link></li>
                              </ul>
                            </li>
                            <li><Link to="/About"><a>About Us</a></Link></li>
                            <li><Link to="/Contact"><a>Contact</a></Link></li>
                          </ul>
                        </nav>
                      </div>
                      {/* Mobile MENU AREA */}
                      <div className="mobile-menu hidden-sm hidden-md hidden-lg">
                        <nav>
                          <ul>
                            <li><a href="Home">Home</a></li>
                            <li><a href="Shop">Shop</a>
                            </li>
                            <li><a href="Toys">Toys</a>
                            </li>
                            <li><a href="Clothes">Clothes</a>
                              <ul className="sub-menu">
                                <li><a href="Trousers">Trousers</a></li>
                                <li><a href="Shirts">Shirts</a></li>
                              </ul>
                            </li>
                            <li><a href="Accessories">Accessories</a>
                              <ul className="sub-menu">
                                <li><a href="Backpacks">Backpacks</a></li>
                                
                                <li><a href="Hats">Hats</a></li>
                              </ul>
                            </li>
                            <li><a href="contact.html">contact</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                {/* <Search /> */}
            </div>
  )
}

function search(){
  return a;
}

function searchPrice(){
  return price1;
}


export {search,searchPrice};
export default Header;