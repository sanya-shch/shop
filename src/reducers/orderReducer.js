import {
    MAKE_ORDER,
    MAKE_ORDER_ERROR,
    SET_LOADING_ORDER
} from '../actions/types';

const initialState = {
    isSuccess: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MAKE_ORDER:
            return {
                ...state,
                isSuccess: true
            };
        case SET_LOADING_ORDER:
            return {
                ...state,
                loading: true
            };
        case MAKE_ORDER_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
                loading: false,
                isSuccess: false
            };
        default:
            return state;
    }
};