import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    CLEAN_BASKET
} from './types';

export const addToBasket = id => {
    return {
        type: ADD_TO_BASKET,
        payload: id
    };
};

export const removeFromBasket = id => {
    return {
        type: REMOVE_FROM_BASKET,
        payload: id
    };
};

export const cleanBasket = () => {
    return {
        type: CLEAN_BASKET
    };
};
