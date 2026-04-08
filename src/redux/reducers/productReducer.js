import products from '../../data/products';

const initialState = {
    productList: products
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                productList: [
                    ...state.productList, action.payload
                ]
            }
        default:
            return state;
    }
}

export default productReducer;