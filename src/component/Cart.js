import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header'
import { useStateValue } from './StateProvider';
import CartProduct from './CartProduct';
import SubTotal from './SubTotal';
function Cart() {

  const [{ basket }] = useStateValue();

  return (
    <div>
            <Header/>
        {/* Breadcurb AREA */}
        <div className="breadcurb-area">
          <div className="container">
            <ul className="breadcrumb">
              <li><a href="#">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
        {/* Chart AREA */}
        <div className="chart-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="chart-item table-responsive fix">
                  

                {basket?.length === 0 ? (
            <div>
            <h2>Your basket is empty</h2>
            </div>
        ) : (
            <div >
                <table className="col-md-12">
                    <thead>
                      <tr>
                        <th className="th-product">Product</th>
                        <th className="th-details">Details</th>
                        <th className="th-edit">Edit</th>
                        {/* <th className="th-qty">Qty</th> */}
                        <th className="th-price">Price($)</th>
                        {/* <th className="th-total">Sub Total($)</th> */}
                        <th className="th-delate">Delete</th>
                      </tr>
                    </thead>
                    </table>
                {/* list out product */}
                {basket?.map((item) =>  (
                    <CartProduct
                        id={item.id}
                        name={item.name}
                        images={item.images}
                        price={item.price}
                        rating={item.rating}
                        links={item.links}
                    />
                    ))}
            </div>
        )}
              
                 
                  
                  
                </div>
                <div className="cart-button">
                  <Link to="/home"><button type="button" className="btn" onclick="window.location='index.html';">Continue Shopping</button></Link>
                  {/* <button type="button" className="btn floatright">Update Cart</button> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cart-shopping-area fix">
                <div className="col-md-4 col-sm-4">
                  <div className="calculate-shipping chart-all">
                    <h2>CALCULATE SHIPPING</h2>
                    <p>Enter your destination to get a shipping estimate.</p>
                    <select>
                      <option>Sellect Country</option>
                      <option>America</option>
                      <option>Afganisthan</option>
                      <option>Bangladesh</option>
                      <option>Chin</option>
                      <option>Japna</option>
                    </select>
                    <select>
                      <option>State/Provinence</option>
                      <option>Dhaka</option>
                      <option>Borishal</option>
                      <option>Gajipur</option>
                      <option>Kustiya</option>
                      <option>Vola</option>
                      <option>Gaibandha</option>
                    </select>
                    <input type="text" placeholder="Zip / Post Code" />
                    <button type="button" className="btn">Get A Quote</button>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="chart-all">
                    <h2>PROMOTIONAL CODE</h2>
                    <p>Enter your destination to get a shipping estimate.</p>
                    <input type="text" placeholder="Zip / Post Code" />
                    <button type="button" className="btn">Get A Quote</button>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="shopping-summary chart-all">
                    <div className="cart-total">
                      <strong>
                      {basket.length > 0 && (
                          <SubTotal/>
                      )}</strong>
                      <span className="cart-total-price" type="number">
                           
                        
                      </span>
                      <button type="button" className="btn"><Link className="btncheckout" to="/checkout">Proceed to Checkout</Link></button>
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

export default Cart
