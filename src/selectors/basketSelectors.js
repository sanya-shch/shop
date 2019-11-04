import {createSelector} from "reselect";

export const getBasket = (state) => state.basket;

export const getBasketSuperSelectorIds = createSelector(getBasket, (basket) => Object.keys(basket.toJS()).map(key => key));

const getBasketItem = (state, id) => state.basket.get(id);
export const getBasketSuperSelector = createSelector(getBasketItem, (basket) => basket);
