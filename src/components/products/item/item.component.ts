import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/product';
import { DeleteService } from './delete.service';

@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
    @Input() product!: Product;

    constructor(private router: Router, private http: HttpClient, private deleteService: DeleteService) {}

    ngOnInit(): void {}

    goToDetail() {
        this.router.navigate([this.product.id]);
    }

    onDelete(event: Event): void {
        event.stopPropagation();
        this.http
            .delete('http://localhost:8000/api/products/' + this.product.id)
            .subscribe((resp) => {
                console.log(resp);
                //? alert landing page to call get products API again to get the latest list
                this.deleteService.fetchLatestList();
            });
    }
}
