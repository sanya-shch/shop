import {
    ADD_TO_TOTAL_PRICE,
    REMOVE_FROM_TOTAL_PRICE,
    CLEAN_TOTAL_PRICE
} from './types';

export const addToTotalPrice = price => {
    return {
        type: ADD_TO_TOTAL_PRICE,
        payload: price
    };
};

export const removeFromTotalPrice = price => {
    return {
        type: REMOVE_FROM_TOTAL_PRICE,
        payload: price
    };
};

export const cleanTotalPrice = () => {
    return {
        type: CLEAN_TOTAL_PRICE
    };
};
