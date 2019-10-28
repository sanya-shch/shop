import {createSelector} from "reselect";

export const getBasket = (state) => {
    return state.shop.basket;
};

export const getBasketSuperSelector = createSelector (getBasket, (basket) => {
    return basket;
});

export const getCatalogSelector = (state) => {
    return state.shop.catalog;
};

export const getCatalogSuperSelector = createSelector (getCatalogSelector, (catalog) => {
    return catalog;
});

export const getLoading = (state) => {
    return state.shop.loading;
};

export const getError = (state) => {
    return state.shop.error;
};

export const getTotalPrice = (state) => {
    return state.shop.totalPrice;
};


export const getLang = (state) => {
    return state.lang.lang;
};