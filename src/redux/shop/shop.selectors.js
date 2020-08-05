import { createSelector } from 'reselect';

const selectDirectory = state => state.shop;

export const selectCollections = createSelector(
    [selectDirectory],
    shop => shop.collections
)