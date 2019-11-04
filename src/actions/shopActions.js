import axios from 'axios';

import {
    GET_CATALOG,
    SET_LOADING_CATALOG,
    GET_CATALOG_ERROR
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
            type: GET_CATALOG_ERROR,
            payload: err
        }));
};

export const setLoading = () => {
    return {
        type: SET_LOADING_CATALOG
    };
};
