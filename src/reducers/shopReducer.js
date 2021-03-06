import {
    GET_CATALOG,
    SET_LOADING_CATALOG,
    GET_CATALOG_ERROR
} from '../actions/types';

const initialState = {
    catalog: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CATALOG:
            return {
                ...state,
                catalog: action.payload,
                loading: false
            };
        case SET_LOADING_CATALOG:
            return {
                ...state,
                loading: true
            };
        case GET_CATALOG_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};