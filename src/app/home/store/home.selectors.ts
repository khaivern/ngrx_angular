import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHome from '../reducers';

export const selectHomeState = createFeatureSelector<fromHome.HomeState>(fromHome.homeFeatureKey);

export const selectAllProducts = createSelector(selectHomeState, fromHome.selectAll);

export const selectProductChunks = createSelector(selectAllProducts, (products) => {
    const copiedProducts = [...products];
    let productsChunk = [];
    while (copiedProducts.length > 0) {
        productsChunk.push(copiedProducts.splice(0, 4));
    }
    return productsChunk;
});

export const selectProductDetails = createSelector(selectHomeState, state => state.productDetails);

export const selectProductDetailByID = (id: string) => {
    return createSelector(selectProductDetails, (productDetails) => {
        return productDetails.find(d => d.id === id) || null;
    })
 }

export const selectAreProductsLoaded = createSelector(selectHomeState, home => home.areProductsLoaded);
