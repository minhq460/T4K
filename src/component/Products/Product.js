import React, { Component, useState } from 'react';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

function Product({ id, name, images, rating, rating_o, price, links, sort}) {
  

  const [{ basket }, dispatch ] = useStateValue();
  const addToBasket = () =>{
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              id: id,
              name: name,
              images: images,
              price: price,
              rating: rating,
              rating_o: rating_o,
              links: links,
              
          }
      })
  }
  
 

  return (
    <div className="col-md-4 col-sm-6">
                      
    <div className="single-item-area">

    <div className="single-item">
      <div className="product-item-img">
        <a href="">
          <img className="primary-img" src={images} alt="item" />
          <img className="secondary-img" src={images} alt="item" />
        </a>
        <div className="product-item-action">
        <Link className="fa fa-external-link" to={links}></Link>
          <a onClick={addToBasket}><i className="fa fa-shopping-cart" /></a>
        </div>
      </div>
      <div className="single-item-content">
        <h2><a><Link to={links}>{name}</Link></a></h2>
        <div className="best-product-rating">
        {
                  Array(rating)
                  .fill()
                  .map((_) => (
                  <p><span className="fa fa-star"></span></p>
                )) 
              } 
              {
                  Array(rating_o)
                  .fill()
                  .map((_) => (
                  <p><span className="fa fa-star-o"></span></p>
                )) 
              } 
          {/* <a href="#"><i className="fa fa-star" /></a>
          <a href="#"><i className="fa fa-star" /></a>
          <a href="#"><i className="fa fa-star" /></a>
          <a href="#"><i className="fa fa-star" /></a>
          <a href="#"><i className="fa fa-star" /></a> */}
          <div>
          
          </div>
        </div>
        <h3>{"$" + price}</h3>
      </div>
    </div>
    <div className="item-action-button fix">
      <a onClick={addToBasket}><i className="fa fa-shopping-cart" />&nbsp;Add to Cart</a>
      
    </div>
  </div>
  
</div>
  )
}

export default Product
