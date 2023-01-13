import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product, sortProductByAscendingID } from '../../../models/product';
import HomeActions from '../store/home.types';

export const homeFeatureKey = 'home';

export interface HomeState extends EntityState<Product> {
    areProductsLoaded: boolean;
    selectedProduct: Product | null;
}

const homeAdapter = createEntityAdapter<Product>({
    sortComparer: sortProductByAscendingID,
});

const initialHomeState: HomeState = homeAdapter.getInitialState({
    areProductsLoaded: false,
    selectedProduct: null,
});

export const homeReducers = createReducer(
    initialHomeState,
    on(HomeActions.allProductsLoaded, (state, { products }) => {
        return homeAdapter.setAll(products, {
            ...state,
            areProductsLoaded: true,
        });
    }),
    on(HomeActions.clearProducts, (state, action) => {
        return homeAdapter.removeAll({ ...state, areProductsLoaded: false });
    }),
    on(HomeActions.productLoaded, (state, { product }) => {
        return { ...state, selectedProduct: product };
    }),
    on(HomeActions.updateProduct, (state, { update }) => {
        return homeAdapter.updateOne(
            {
                ...update,
                changes: {
                    ...update.changes,
                    src: `https://via.placeholder.com/264x177?text=${update.changes.title}`,
                },
            },
            state
        );
    }),
    on(HomeActions.productCreated, (state, { product }) => {
        return homeAdapter.addOne(product, state);
    }),
    on(HomeActions.deleteProduct, (state, { id }) => {
        return homeAdapter.removeOne(id, state);
    })
);

export const { selectAll } = homeAdapter.getSelectors();
