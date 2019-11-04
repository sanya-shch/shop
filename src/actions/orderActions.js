import axios from 'axios';

import {
    MAKE_ORDER_ERROR,
    MAKE_ORDER,
    SET_LOADING_ORDER
} from './types';
import {cleanBasket} from './basketActions';
import {cleanTotalPrice} from './totalPriceActions';

export const makeOrder = (data) => dispatch => {
    setLoading();

    axios
        .post('/orders', data)
        .then(() => dispatch(cleanBasket()))
        .then(() => dispatch(cleanTotalPrice()))
        .then(() => dispatch({type: MAKE_ORDER}))
        .catch(err => dispatch({
            type: MAKE_ORDER_ERROR,
            payload: err
        }));
};

export const setLoading = () => {
    return {
        type: SET_LOADING_ORDER
    };
};