import React from 'react';
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';

function CartProduct( { id, name, images, price, rating, links }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };
    return (
        <div className="checkoutProduct">
            <table className="col-md-12">
                    <tbody className="cart-items">
                      <tr className="cart-row">
                        <td className="th-product">
                          <a href="#"><img src={images} alt="cart" /></a>
                        </td>
                        <td className="th-details">
                          <p>{name}</p>
                          <div className="best-product-rating">
                            <a href="#"><i className="fa fa-star" /></a>
                            <a href="#"><i className="fa fa-star" /></a>
                            <a href="#"><i className="fa fa-star" /></a>
                            <a href="#"><i className="fa fa-star" /></a>
                            <a href="#"><i className="fa fa-star" /></a>
                          </div>
                          {/* <p>Product Color : Red</p> */}
                          {/* <p>Product Code  : 2201 RS</p> */}
                        </td>
                        <td className="th-edit"><a><Link to={links}>Edit</Link></a></td>
                        {/* <td className="th-qty">
                          <input className="cart-quantity-input" type="number" defaultValue={1} />
                        </td> */}
                        <td className="th-price" type="number" id="price1">{price}</td>
                        {/* <td className="th-total" type="number" id="total1">{price}</td> */}
                        <td style={{width:"104px", paddingLeft:"6px"}}>
                          <button onClick={removeFromBasket} className="btn btn-danger" type="button">REMOVE</button>
                        </td>
                      
                      
                      </tr>
                    </tbody>
                  </table>



        </div>
    );
}

export default CartProduct
