import React from 'react'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, name, images, price, rating, rating_o, links }) {
    const [{ basket }, dispatch] = useStateValue();

    return (
        
            <div className="single-review" style={{height:'125px'}}>
                    <div className="single-review-img">
                      <img style={{width:"100px", height:"120px"}}src={images} alt="review" />
                    </div>
                    <div className="single-review-content fix">
                      <h2>{name}</h2>
                      <div style={{display: "flex"}}>{
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
              } </div>
                      
                      <h3>{"$" + price}</h3>
                    </div>
            </div>
        
    )
}

export default CheckoutProduct
