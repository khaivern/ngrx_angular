import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Product } from '../../../models/product';

export const loadProducts = createAction('[Landing Page] Load Products');

export const allProductsLoaded = createAction(
    '[Load Products Effects] All Products Loaded',
    props<{ products: Product[] }>()
);

export const getProductByID = createAction(
    '[Product Detail Page] Get Product by ID',
    props<{ id: string }>()
);

export const productLoaded = createAction(
    '[Get Product by ID Effects] Product Loaded',
    props<{ product: Product }>()
);

export const clearProducts = createAction(
    '[Landing Page On Destroy] Clear Products'
);

//* Optimistic UPDATE
export const updateProduct = createAction(
    '[Product Detail Edit Form] Update Product',
    props<{ update: Update<Product> }>()
);

//* Pessimistic CREATE
export const createProduct = createAction(
    '[Product Detail Create Form] Create Product',
    props<{ product: Product }>()
);

export const productCreated = createAction(
    '[Create Product Effects] Product Created',
    props<{ product: Product }>()
);

//* Optimistic DELETE
export const deleteProduct = createAction(
    '[Landing Page Product Item] Delete Product',
    props<{ id: string }>()
);
