import axios from 'axios';

import {
    GET_CATALOG,
    SET_LOADING,
    ERROR,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    MAKE_ORDER
} from './types';

export const getCatalog = () => dispatch => {
    setLoading();

    axios
        .get('/catalog')
        .then(res => {
            dispatch({
                type: GET_CATALOG,
                payload: res.data
            });
        })
        .catch(err => dispatch({
            type: ERROR,
            payload: err
        }));
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};

export const addToBasket = (id, price) => {
    return {
        type: ADD_TO_BASKET,
        payload: {
            id,
            price
        }
    };
};

export const removeFromBasket = (id, price) => {
    return {
        type: REMOVE_FROM_BASKET,
        payload: {
            id,
            price
        }
    };
};

export const makeOrder = (data) => dispatch => {
    setLoading();

    axios
        .post('/orders', data)
        .then(() => {
            dispatch({
                type: MAKE_ORDER
            });
        })
        .catch(err => dispatch({
            type: ERROR,
            payload: err
        }));
};
