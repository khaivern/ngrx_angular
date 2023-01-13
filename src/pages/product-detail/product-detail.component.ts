import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { selectProductByID } from '../../app/home/store/home.selectors';
import HomeActions from '../../app/home/store/home.types';
import { AppState } from '../../app/reducers';
import { Product } from '../../models/product';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
    product$: Observable<Product | null> = of();
    id = this.route.snapshot.params['id'];
    editForm: FormGroup = new FormGroup({});
    createForm: FormGroup = new FormGroup({});

    constructor(private http: HttpClient, private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {}

    ngOnInit(): void {
        this.buildForms();
        this.store.dispatch(HomeActions.getProductByID({ id: this.id }))
        this.product$ = this.store.select(selectProductByID);

        // this.product$ = this.http
        //     .get<{ result: Product }>(
        //         'http://localhost:8000/api/products/' + this.id
        //     )
        //     .pipe(map((response) => response.result));
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
        const update: Update<Product> = {
            id: this.id,
            changes: this.editForm.value,
        };

        this.store.dispatch(HomeActions.updateProduct({ update }));
        this.router.navigate(['/landing']);
        // this.http
        //     .put('http://localhost:8000/api/products/' + this.id, {
        //         product: this.editForm.value,
        //     })
        //     .subscribe((resp) => console.log(resp));
    }

    handleCreate(): void {
        this.store.dispatch(HomeActions.createProduct({ product: {...this.createForm.value,} }));
        this.router.navigate(['/landing']);

        // this.http
        //     .post('http://localhost:8000/api/products', {
        //         product: this.createForm.value,
        //     })
        //     .subscribe((resp) => console.log(resp));
    }
}
