import loadSingleInventory from "../utils/loadSingleInventory";

export const addToCart = async (dispatch, cartItem) => {
    let data = await loadSingleInventory(cartItem.id);
    data.name = cartItem.name;
    data.quantity = 1;
    return dispatch({
        type: "Add_To_Cart",
        playload: data,
    });
};

export const increment = (dispatch, index) => {
    return dispatch({
        type: "Increment",
        playload: {
            index,
        },
    });
};

export const decrement = (dispatch, index) => {
    return dispatch({
        type: "Decrement",
        playload: {
            index,
        },
    });
};

export const remove = (dispatch, index) => {
    return dispatch({
        type: "Remove",
        playload: {
            index,
        },
    });
};

export const changeQuantity = (dispatch, index, value) => {
    return dispatch({
        type: "Change_Quantity",
        playload: {
            index,
            value,
        },
    });
};
