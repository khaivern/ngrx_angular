import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectProductChunks } from '../../app/home/store/home.selectors';
import HomeActions from '../../app/home/store/home.types';
import { AppState } from '../../app/reducers';
import { Product } from '../../models/product';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
    @Input() heading = '';
    products$?: Observable<Product[][]> = of([]);

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.products$ = this.store.select(selectProductChunks);
    }

    ngOnDestroy(): void {
        // this.store.dispatch(HomeActions.clearProducts());
    }

    deleteProduct(id: string) {
        this.store.dispatch(HomeActions.deleteProduct({ id }));
    }

    prefetch(productID: string) {
        this.store.dispatch(HomeActions.getProductByID({ id: productID }));
    }
}
