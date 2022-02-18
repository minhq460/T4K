import React from 'react'
import NumberFormat from "react-currency-format"; 
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function SubTotal() {
  const [{ basket, dispacth }] = useStateValue();

    return (
        <div className="subTotal">
            <NumberFormat
            renderText={(value) => (
                
                <p>
            TOTAL:<strong>{value}</strong>
                </p>
                
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
                
            
        </div>
    )
}

export default SubTotal
