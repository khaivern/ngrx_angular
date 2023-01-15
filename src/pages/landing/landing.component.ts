import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { selectAreProductsLoaded } from '../../app/home/store/home.selectors';
import HomeActions from '../../app/home/store/home.types';
import { AppState } from '../../app/reducers';
import { DeleteService } from '../../components/products/item/delete.service';

@Component({
    selector: 'landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
    constructor(
        private deleteService: DeleteService,
        private store: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.fetchProducts();
        // this.deleteService.listUpdated$.subscribe(() => {
        //     this.fetchProducts();
        // });

        // this.products$ = this.deleteService.listUpdated$.pipe(
        //     switchMap(() => {
        //         return this.fetchProducts();
        //     })
        // );
    }

    private fetchProducts() {
        // this.store.dispatch(HomeActions.loadProducts());

        this.store
            .select(selectAreProductsLoaded)
            .pipe(filter((loaded) => !loaded))
            .subscribe((_) => {
                this.store.dispatch(HomeActions.loadProducts());
            });
    }
}
