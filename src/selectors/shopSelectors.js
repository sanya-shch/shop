import {createSelector} from "reselect";

export const getCatalogSelector = (state) => state.shop.catalog;

const getCatalogItem = (state, id) => state.shop.catalog.find((catalogItem) => catalogItem.id === id);
export const getCatalogSuperSelector = createSelector(getCatalogItem, (catalogItem) => catalogItem);

export const getCatalogLoading = (state) => state.shop.loading;

export const getCatalogError = (state) => state.shop.error;
