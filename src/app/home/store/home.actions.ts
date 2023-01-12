import { createAction, props } from '@ngrx/store';
import { Product } from '../../../models/product';

export const loadProducts = createAction('[Landing Page] Load Products');

export const allProductsLoaded = createAction(
    '[Load Products Effects] All Products Loaded',
    props<{ products: Product[] }>()
);
