import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Product } from '../../models/product';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
    product$: Observable<Product> = of();
    id = this.route.snapshot.params['id'];
    editForm: FormGroup = new FormGroup({});
    createForm: FormGroup = new FormGroup({});

    constructor(private http: HttpClient, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.buildForms();
        this.product$ = this.http
            .get<{ result: Product }>(
                'http://localhost:8000/api/products/' + this.id
            )
            .pipe(map((response) => response.result));
    }

    buildForms(): void {
        this.createForm = new FormGroup({
            title: new FormControl(null),
            price: new FormControl(null),
            discount: new FormControl(null),
        });

        this.editForm = new FormGroup({
            title: new FormControl(null),
            price: new FormControl(null),
            discount: new FormControl(null),
        });
    }

    handleEdit(): void {
        this.http
            .put('http://localhost:8000/api/products/' + this.id, {
                product: this.editForm.value,
            })
            .subscribe((resp) => console.log(resp));
    }

    handleCreate(): void {
        this.http
            .post('http://localhost:8000/api/products', {
                product: this.createForm.value,
            })
            .subscribe((resp) => console.log(resp));
    }
}
