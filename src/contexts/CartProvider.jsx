import { createContext, useReducer } from "react";

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "Add_To_Cart":
            return [...state, action.playload];
        case "Increment":
            state[action.playload.index].quantity += 1;
            return [...state];
        case "Decrement":
            if (state[action.playload.index].quantity > 1) {
                state[action.playload.index].quantity -= 1;
            }
            return [...state];
        case "Change_Quantity":
            state[action.playload.index].quantity = action.playload.value;
            return [...state];
        case "Remove":
            state.splice(action.playload.index, 1);
            return [...state];

        default:
            return [...state];
    }
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};

export default CartProvider;
