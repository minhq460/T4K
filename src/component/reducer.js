export const initialState ={
    basket:[    
      
    ],
    user: null,
};

export const getBasketTotal= (basket) =>
basket?.reduce((amount, item) => item.price + amount,0)

const reducer=(state, action) => {
    console.log(action)
    
    switch(action.type) {
        
        case 'ADD_TO_BASKET':
        
            return {
                ...state,
                basket: [...state.basket, action.item],
                
                
            };
       

        case 'REMOVE_FROM_BASKET':

        // nhân bản giỏ hàng
            let newBasket = [...state.basket];
        // kiểm tra xem nó có tồn tại
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id 
            );
        // nếu có => xóa
            if (index >=0 ) {
                newBasket.splice(index,1);

            }else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as its`
                ); 
            }
            return {...state,
                        basket: newBasket,
                    };
        default:
            return state;
    }
};
export default reducer;