//cài đặt data layer
// theo dõi giỏ hàng
import React, {createContext, useContext, useReducer} from "react";

// đây là data layer

export const StateContext = createContext();

// xây dựng provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);  
export const useStateValue = () => useContext(StateContext);