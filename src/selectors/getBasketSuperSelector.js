import {createSelector} from "reselect";

const getBasketSuperSelector = createSelector((state, id) => state.basket.get(id), (basket) => basket);

export default getBasketSuperSelector;
