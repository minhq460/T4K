import React from 'react'
import NumberFormat from "react-number-format"; 
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';



function FinalSubTotal() {
  const [{ basket, dispacth }] = useStateValue();
  const one = Number(1);

    return (
        <div className="subTotal">
            <NumberFormat
            renderText={(value) => (
                <>
                <p>
         <strong>{value}</strong>
                </p>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            />
                
        </div>
    )
}

export default FinalSubTotal
