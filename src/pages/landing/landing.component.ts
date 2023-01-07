import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
    selector: 'landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
    products: Product[] = [];

    constructor() {}

    ngOnInit(): void {
        this.products = [
            new Product('testing 1', 'https://via.placeholder.com/264x177?text=1', 17, 50),
            new Product('testing 2', 'https://via.placeholder.com/264x177?text=2', 14, 40),
            new Product('testing 3', 'https://via.placeholder.com/264x177?text=3', 18, 30),
            new Product('testing 4', 'https://via.placeholder.com/264x177?text=4', 15, 20),
            new Product('testing 5', 'https://via.placeholder.com/264x177?text=5', 11, 10),
            new Product('testing 6', 'https://via.placeholder.com/264x177?text=6', 19, 60),
            new Product('testing 7', 'https://via.placeholder.com/264x177?text=7', 21, 30),
            new Product('testing 8', 'https://via.placeholder.com/264x177?text=8', 15, 70),
        ];
    }
}
