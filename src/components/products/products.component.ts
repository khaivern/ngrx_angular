import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectProd } from '../../app/home/store/home.selectors';
import { AppState } from '../../app/reducers';
import { Product } from '../../models/product';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    @Input() heading = '';
    products$?: Observable<Product[][]> = of([]);

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.products$ = this.store.select(selectProd);
    }
}
