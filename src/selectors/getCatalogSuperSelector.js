import {createSelector} from "reselect";

const getCatalogSuperSelector = createSelector((state, id) => state.shop.catalog.find((catalogItem) => catalogItem.id === id), (catalogItem) => catalogItem);

export default getCatalogSuperSelector;