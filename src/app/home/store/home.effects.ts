import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { Product } from '../../../models/product';
import HomeActions from './home.types';

@Injectable()
export class HomeEffects {
    loadProducts = createEffect(() => {
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

    constructor(private actions$: Actions, private http: HttpClient) {}
}
