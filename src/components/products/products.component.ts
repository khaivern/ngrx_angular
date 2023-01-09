import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    @Input() heading = '';
    @Input() products$: Observable<Product[][]> = of([]);
}
