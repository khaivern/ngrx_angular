import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHome from '../reducers';

export const selectHomeState = createFeatureSelector<fromHome.HomeState>('home');

export const selectAllProducts = createSelector(selectHomeState, fromHome.selectAll);

export const selectProductChunks = createSelector(selectAllProducts, (products) => {
    const copiedProducts = [...products];
    let productsChunk = [];
    while (copiedProducts.length > 0) {
        productsChunk.push(copiedProducts.splice(0, 4));
    }
    return productsChunk;
});

export const selectProductByID = createSelector(selectHomeState, state => state.selectedProduct);

export const selectAreProductsLoaded = createSelector(selectHomeState, home => home.areProductsLoaded);
