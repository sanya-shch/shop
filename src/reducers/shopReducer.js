import {
    GET_CATALOG,
    SET_LOADING,
    ERROR,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    MAKE_ORDER
} from '../actions/types';

const initialState = {
    catalog: null,
    loading: false,
    error: null,
    basket: [],
    totalPrice: 0
};

export default (state = initialState, action) => {
    let tmp, tp;
    switch (action.type) {
        case GET_CATALOG:
            return {
                ...state,
                catalog: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case ADD_TO_BASKET:
            tmp = [...state.basket];
            tp = state.totalPrice;
            if (tmp.length === 0) {
                tmp.push({id: action.payload.id, count: 1});
                tp = action.payload.price;
            } else {
                tp = `${tp.slice(0, -1)*1 + action.payload.price.slice(0, -1)*1}${action.payload.price.slice(-1)}`;
                for (let i = 0; i < tmp.length; i++){
                    if (tmp[i].id === action.payload.id) {
                        tmp[i].count += 1;
                        break;
                    } else if (i === tmp.length-1) {
                        tmp = [...tmp, {id: action.payload.id, count: 1}];
                        break;
                    }
                }
            }
            return {
                ...state,
                basket: [...tmp],
                totalPrice: tp
            };
        case REMOVE_FROM_BASKET:
            tmp = [...state.basket];
            tp = state.totalPrice;
            for (const el of tmp){
                if (el.id === action.payload.id) {
                    el.count -= 1;
                    tp = `${tp.slice(0, -1)*1 - action.payload.price.slice(0, -1)*1}${action.payload.price.slice(-1)}`;
                    if(el.count === 0){
                        tmp = tmp.filter((item) => item.id !== action.payload.id);
                    }
                    break;
                }
            }
            if(tp.slice(0, -1)*1 === 0){
                tp = 0;
            }
            return {
                ...state,
                basket: [...tmp],
                totalPrice: tp
            };
        case MAKE_ORDER:
            return {
                ...state,
                basket: [],
                totalPrice: 0,
                loading: false
            };
        default:
            return state;
    }
};