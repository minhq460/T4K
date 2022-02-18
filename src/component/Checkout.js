import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
// import BE from './BE'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import StripeCheckout from 'react-stripe-checkout';
import SubTotal from './SubTotal';
import { getBasketTotal } from './reducer';
import FinalSubTotal from './FinalSubTotal';
import axios from "axios";
import { toast } from "react-toastify";

function Checkout() {
  const [{ basket }] = useStateValue();
  //payment
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
       
      { token, basket } 
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
return (
    <div>
                <Header/>
                <div className="breadcurb-area">
          <div className="container">
            <ul className="breadcrumb">
              <li><a href="#">Home</a></li>
              <li><a href="#">Page</a></li>
              <li>Checkout</li>
            </ul>
          </div>
        </div>
        {/* Checkout AREA */}
        <div className="checkout-area">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-7">
                <div className="billing-address">
                  <div className="checkout-head">
                    <h2>BILLING ADDRESS</h2>
                  </div>
                  <div className="checkout-form">
                    <form action="#" method="post" className="form-horizontal">
                      <div className="form-group">
                        <label className="control-label col-md-3">
                          country <sup>*</sup>
                        </label>
                        <div className="col-md-9">
                          <select>
                            <option>Sellect Country</option>
                            <option>America</option>
                            <option>Afganisthan</option>
                            <option>Bangladesh</option>
                            <option>Chin</option>
                            <option>Japna</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3">
                          First Name <sup>*</sup>
                        </label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3">
                          Last Name <sup>*</sup>
                        </label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3">
                          Company Name <sup>*</sup>
                        </label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3">
                          Address <sup>*</sup>
                        </label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      {/* <div className="form-group">
                        <label className="control-label col-md-3">
                        </label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div> */}
                      <div className="form-group">
                        <label className="control-label col-md-3">
                          Town / City <sup>*</sup>
                        </label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3">
                          Postcode <sup>*</sup>
                        </label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3">
                          E-mail Address <sup>*</sup>
                        </label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3">
                          Phone <sup>*</sup>
                        </label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-12">
                          <input type="checkbox" /> Create an account?
                        </label>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-12">
                          <input type="checkbox" /> Ship a billing address?
                        </label>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3">
                          Order Now
                        </label>
                        <div className="col-md-9">
                          <textarea rows={9} defaultValue={""} />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-5">
                <div className="review-order">
                  <div className="checkout-head">
                    <h2>Review your Order</h2>
                  </div>
                  
                  {basket?.length === 0 ? (
            <div>
            <h2>Your basket is empty</h2>
            </div>
        ) : (
            <div >
                
                {/* list out product */}
                {basket?.map((item) =>  (
                    <CheckoutProduct
                        id={item.id}
                        name={item.name}
                        images={item.images}
                        price={item.price}
                        rating={item.rating}
                        rating_o={item.rating_o}
                        links={item.links}
                    />
                    ))}
            </div>
        )}
              
                  <div className="subtotal-area">
                    <div className="subtotal-content fix">
                      <h2 className="floatleft">(&nbsp;{basket.length}&nbsp;item)</h2>
                      <h2 className="floatright">{basket.length > 0 && (
                          <SubTotal/>
                      )}</h2>
                    </div>
                    {/* <div className="subtotal-content fix">
                      <h2 className="floatleft">Shipping &amp; Handling </h2>
                      <h2 className="floatright">$1</h2>
                    </div>
                    <div className="subtotal-content fix">
                      <h2 className="floatleft">Grand Total</h2>
                      <h2 className="floatright">{basket.length > 0 && (
                          <FinalSubTotal/>
                      )}</h2>
                    </div> */}
                  </div>
                  <div className="payment-method">
                    <h2>PAYMENT METHOD</h2>
                    <div className="payment-checkbox">
                      <input type="checkbox" defaultChecked /> Direct Bank Transfer
                    </div>
                    <p style={{lineHeight:"20px"}}>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order wont be shipped until the funds have cleared in our account.</p>
                    <div className="payment-checkbox">
                      {/* <input type="checkbox" /> Chaque Payment <br /> */}
                      <p>Visa, MasterCard, American Express, Apple Pay, Bitcoin...</p>
                    </div>
                    {/* <button type="button" className="btn">Place Order</button> */}
                    <StripeCheckout
                    stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    amount={getBasketTotal}
                    name="CHECKOUT"
                    />
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

export default Checkout
