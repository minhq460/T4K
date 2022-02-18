import React, { Component, useState } from 'react';
import Header from'./Header';
import { useStateValue} from './StateProvider';
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Singleproduct({ id, name, links, images,rating, price, description, infomation,infomation1,infomation2,infomation3,infomation4}) {
  const [{ basket }, dispatch ] = useStateValue();
  const addToBasket = () =>{
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              id: id,
              name: name,
              images: images,
              price: price,
              description: description,
              links: links,
              rating: rating
          }
      })
  }
  return (
    <div>
                <Header/>
                <div>
                {/* SUPPORT AREA */}
                <div className="breadcurb-area">
                  <div className="container">
                    <ul className="breadcrumb">
                      <li><a href="#">Home</a></li>
                      <li>Single Product</li>
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
                        <div className="row">
                          <div className="col-md-5 col-sm-5">
                            <div className="product-item-tab">
                              {/* Tab panes */}
                              <div className="single-tab-content">
                                <div className="tab-content">
                                  <div role="tabpanel" className="tab-pane active" id="img-one"><img src={images} alt="tab-img" /></div>
                                  <div role="tabpanel" className="tab-pane" id="img-two"><img src={images} alt="tab-img" /></div>
                                  <div role="tabpanel" className="tab-pane" id="img-three"><img src={images} alt="tab-img" /></div>
                                </div>
                              </div>
                              {/* Nav tabs */}
                              <div className="single-tab-img">
                                <ul className="nav nav-tabs" role="tablist">
                                  <li role="presentation" className="active"><a href="#img-one" role="tab" data-toggle="tab"><img src={images} alt="tab-img" style={{height:'100px',width:'100px'}} /></a></li>
                                  <li role="presentation"><a href="#img-two" role="tab" data-toggle="tab"><img src={images} alt="tab-img" style={{height:'100px',width:'100px'}} /></a></li>
                                  <li role="presentation" className="tab-last-li"><a href="#img-three" role="tab" data-toggle="tab"><img src={images} alt="tab-img" style={{height:'100px',width:'100px'}}/></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-7 col-sm-7">
                            <div className="product-tab-content">
                              <div className="product-tab-header">
                                <h1>{name}</h1>
                                <div className="best-product-rating">
                                {/* {
                                    Array(rating)
                                    .fill()
                                    .map((_) => (
                                    <p><span className="fa fa-star"></span>&nbsp;</p>
                                  )) 
                                }  */}
                                  <a href="#"><i className="fa fa-star" /></a>
                                  <a href="#"><i className="fa fa-star" /></a>
                                  <a href="#"><i className="fa fa-star" /></a>
                                  <a href="#"><i className="fa fa-star" /></a>
                                  <a href="#"><i className="fa fa-star" /></a> 
                                  <p>(3 costomar review)</p>
                                </div>
                                <h3>{price}</h3>
                              </div>
                              <div className="product-item-code">
                                <p>Item Code  :   #897896</p>
                                <p>Availability :   In stock</p>
                              </div>
                              <div className="product-item-details">
                                <p>{description}</p>
                              </div>
                              <div className="size-chart">
                                <p>Size Chart: <i className="fa fa-plus" /></p>
                                {/*
                            <select name="" id="">
                              <option value="">Size Chart: <i class="fa fa-plus"></i></option>
                              <option value="">Lg</option>
                              <option value="">Xs</option>
                              <option value="">Xs</option>
                            </select>
                            */}
                              </div>
                              <div className="available-option">
                                <h2>Available Options:</h2>
                                <div className="color-option fix">
                                  <p>Color:</p>
                                  <a href="#" className="color-1" />
                                  <a href="#" className="color-2" />
                                  <a href="#" className="color-3" />
                                  <a href="#" className="color-4" />
                                  <a href="#" className="color-5" />
                                  <a href="#" className="color-6" />
                                </div>
                                <div className="size-option fix">
                                  <p>Size:</p>
                                  <select>
                                    <option value="Choose an option">Choose an option</option>
                                    <option value="Lg">Lg</option>
                                    <option value="Xs">M</option>
                                    <option value="Xs">Xs</option>
                                  </select>
                                </div>
                                <div className="item-action-button fix">
      <a onClick={addToBasket}><i className="fa fa-shopping-cart" />&nbsp;Add to Cart</a>
      
    </div>
                                {/* <div className="wishlist-icon">
                                  <div className="single-wishlist">
                                    <a href="#"><i className="fa fa-heart" /></a>
                                    <p>wishlist</p>
                                  </div>
                                  <div className="single-wishlist">
                                    <a href="#"><i className="fa fa-signal" /></a>
                                    <p>Compare</p>
                                  </div>
                                </div> */}
                              </div> 
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="description-tab">
                              {/* Nav tabs */}
                              <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active"><a href="#description" role="tab" data-toggle="tab">Description</a></li>
                                <li role="presentation"><a href="#information" role="tab" data-toggle="tab">Addisonal information</a></li>
                                <li role="presentation"><a href="#reviews" role="tab" data-toggle="tab">Reviews (3)</a></li>
                              </ul>
                              {/* Tab panes */}
                              <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="description">
                                  <p>{description}</p>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="information">
                                  <p>{infomation}</p>
                                  <p>{infomation1}</p>
                                  <p>{infomation2}</p>
                                  <p>{infomation3}</p>
                                  <p>{infomation4}</p>
                                  
                                </div>
                                <div role="tabpanel" className="tab-pane" id="reviews">
                                <div class="fb-comments" data-href="https://www.facebook.com/trung926" data-numposts="5" data-width=""/>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="single-product-slider similar-product">
                              <div className="product-items">
                                <h2 className="product-header">Similar PRODUCTS</h2>
                                <div className="row">
                                  <div id="singleproduct-slider" className="owl-carousel">
                                    <div className="col-md-4">
                                      <div className="single-product">
                                        <div className="single-product-img">
                                          <a href="#">
                                            <img className="primary-img" src="img/product/single-product-1.jpg" alt="product" />
                                            <img className="secondary-img" src="img/product/kids-1.jpg" alt="product" />
                                          </a>
                                          <div className="single-product-action">
                                            <a href="#"><i className="fa fa-external-link" /></a>
                                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                                          </div>
                                        </div>
                                        <div className="single-product-content">
                                          <div className="product-content-left">
                                            <h2><a href="#">EXCLUSIVE STYLE</a></h2>
                                            <p>Jacket’s</p>
                                          </div>
                                          <div className="product-content-right">
                                            <h3>$27.00</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="single-product">
                                        <div className="single-product-img">
                                          <a href="#">
                                            <img className="primary-img" src="img/product/kids-2.jpg" alt="product" />
                                            <img className="secondary-img" src="img/product/single-product-2.jpg" alt="product" />
                                          </a>
                                          <div className="single-product-action">
                                            <a href="#"><i className="fa fa-external-link" /></a>
                                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                                          </div>
                                        </div>
                                        <div className="single-product-content">
                                          <div className="product-content-left">
                                            <h2><a href="#">EXCLUSIVE STYLE</a></h2>
                                            <p>Jacket’s</p>
                                          </div>
                                          <div className="product-content-right">
                                            <h3>$27.00</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="single-product">
                                        <div className="single-product-img">
                                          <a href="#">
                                            <img className="primary-img" src="img/product/kids-4.jpg" alt="product" />
                                            <img className="secondary-img" src="img/product/men-2.jpg" alt="product" />
                                          </a>
                                          <div className="single-product-action">
                                            <a href="#"><i className="fa fa-external-link" /></a>
                                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                                          </div>
                                        </div>
                                        <div className="single-product-content">
                                          <div className="product-content-left">
                                            <h2><a href="#">EXCLUSIVE STYLE</a></h2>
                                            <p>Jacket’s</p>
                                          </div>
                                          <div className="product-content-right">
                                            <h3>$27.00</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="single-product">
                                        <div className="single-product-img">
                                          <a href="#">
                                            <img className="primary-img" src="img/product/single-product-1.jpg" alt="product" />
                                            <img className="secondary-img" src="img/product/kids-1.jpg" alt="product" />
                                          </a>
                                          <div className="single-product-action">
                                            <a href="#"><i className="fa fa-external-link" /></a>
                                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                                          </div>
                                        </div>
                                        <div className="single-product-content">
                                          <div className="product-content-left">
                                            <h2><a href="#">EXCLUSIVE STYLE</a></h2>
                                            <p>Jacket’s</p>
                                          </div>
                                          <div className="product-content-right">
                                            <h3>$27.00</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="single-product">
                                        <div className="single-product-img">
                                          <a href="#">
                                            <img className="primary-img" src="img/product/single-product-2.jpg" alt="product" />
                                            <img className="secondary-img" src="img/product/women-2.jpg" alt="product" />
                                          </a>
                                          <div className="single-product-action">
                                            <a href="#"><i className="fa fa-external-link" /></a>
                                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                                          </div>
                                        </div>
                                        <div className="single-product-content">
                                          <div className="product-content-left">
                                            <h2><a href="#">EXCLUSIVE STYLE</a></h2>
                                            <p>Jacket’s</p>
                                          </div>
                                          <div className="product-content-right">
                                            <h3>$27.00</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="single-product">
                                        <div className="single-product-img">
                                          <a href="#">
                                            <img className="primary-img" src="img/product/single-product-3.jpg" alt="product" />
                                            <img className="secondary-img" src="img/product/men-2.jpg" alt="product" />
                                          </a>
                                          <div className="single-product-action">
                                            <a href="#"><i className="fa fa-external-link" /></a>
                                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                                          </div>
                                        </div>
                                        <div className="single-product-content">
                                          <div className="product-content-left">
                                            <h2><a href="#">EXCLUSIVE STYLE</a></h2>
                                            <p>Jacket’s</p>
                                          </div>
                                          <div className="product-content-right">
                                            <h3>$27.00</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <Footer/>
            </div>
  )
}

export default Singleproduct
