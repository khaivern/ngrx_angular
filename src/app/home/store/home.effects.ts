import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, mergeMap, switchMap } from 'rxjs';
import { Product } from '../../../models/product';
import HomeActions from './home.types';

@Injectable()
export class HomeEffects {
    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HomeActions.loadProducts),
            switchMap((action) => {
                return this.http
                    .get<{ result: Product[] }>(
                        'http://localhost:8000/api/products'
                    )
                    .pipe(map((resp) => resp.result));
            }),
            map((products) => {
                return HomeActions.allProductsLoaded({ products });
            })
        );
    });

    getProductByID$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HomeActions.getProductByID),
            switchMap(({ id }) => {
                return this.http
                    .get<{ result: Product }>(
                        `http://localhost:8000/api/products/${id}`
                    )
                    .pipe(map((resp) => resp.result));
            }),
            map((product) => {
                return HomeActions.productLoaded({ product });
            })
        );
    });

    updateProduct$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(HomeActions.updateProduct),
                concatMap(({ update }) => {
                    return this.http.put(
                        `http://localhost:8000/api/products/${update.id}`,
                        { product: update.changes }
                    );
                })
            );
        },
        { dispatch: false }
    );

    createProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HomeActions.createProduct),
            concatMap(({ product }) => {
                console.log(product);
                return this.http
                    .post<{ result: Product }>(
                        'http://localhost:8000/api/products',
                        { product }
                    )
                    .pipe(map((resp) => resp.result));
            }),
            map((product) => {
                return HomeActions.productCreated({ product });
            })
        );
    });

    deleteProduct$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(HomeActions.deleteProduct),
                mergeMap(({ id }) => {
                    return this.http.delete(
                        `http://localhost:8000/api/products/${id}`
                    );
                })
            );
        },
        { dispatch: false }
    );

    constructor(private actions$: Actions, private http: HttpClient) {}
}
