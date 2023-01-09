import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Product } from '../../models/product';

@Component({
    selector: 'landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
    products$: Observable<Product[][]> = of([]);

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.products$ = this.http
            .get<{ result: Product[] }>('http://localhost:8000/api/products')
            .pipe(
                map((response) => response.result),
                map((products) => {
                    const copiedProducts = [...products];
                    let productsChunk = [];
                    while (copiedProducts.length > 0) {
                        productsChunk.push(copiedProducts.splice(0, 4));
                    }
                    return productsChunk;
                })
            );
    }
}
