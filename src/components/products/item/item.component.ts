import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/product';

@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
    @Input() product!: Product;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    goToDetail() {
        this.router.navigate([this.product.id]);
    }
}
