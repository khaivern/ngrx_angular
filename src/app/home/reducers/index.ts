import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product } from '../../../models/product';
import HomeActions from '../store/home.types';

export const homeFeatureKey = 'home';

export interface HomeState extends EntityState<Product> {
    areProductsLoaded: boolean;
}

const homeAdapter = createEntityAdapter<Product>();

const initialHomeState = homeAdapter.getInitialState({
    areProductsLoaded: false,
});

export const homeReducers = createReducer(
    initialHomeState,
    on(HomeActions.allProductsLoaded, (state, { products }) => {
        return homeAdapter.setAll(products, { ...state, areProductsLoaded: true });
    })
);

export const { selectAll } = homeAdapter.getSelectors();
