import {createSelector} from "reselect";
import getBasket from "./getBasket";

const getBasketSuperSelectorIds = createSelector(getBasket, (basket) => basket.keySeq());

export default getBasketSuperSelectorIds;