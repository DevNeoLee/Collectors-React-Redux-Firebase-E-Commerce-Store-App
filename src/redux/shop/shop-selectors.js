import { createSelector } from 'reselect';

const SECTIONS_MAP = {
    movie: 1,
    animation: 2,
    tvseries: 3,
    rarecollection: 4,
    sportsart: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCategory = urlParam => createSelector(
    [selectCollections],
    collections => collections.find(category => 
        category.id === SECTIONS_MAP[urlParam])
);