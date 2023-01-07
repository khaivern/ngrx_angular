import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    @Input() heading = '';
    @Input() products: Product[] = [];
    productsChunk: Product[][] = [];

    constructor() {}

    ngOnInit(): void {
        const copiedProducts = [...this.products]
        while(copiedProducts.length > 0) {
            this.productsChunk.push(copiedProducts.splice(0, 4));
        }
    }
}
