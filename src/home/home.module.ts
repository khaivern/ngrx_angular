import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../components/hero/hero.component';
import { ProductsComponent } from '../components/products/products.component';
import { ItemComponent } from '../components/products/item/item.component';
import { HomeComponent } from './home.component';
import { CarouselModule } from '@coreui/angular';


@NgModule({
    declarations: [
        HomeComponent,
        HeroComponent,
        ProductsComponent,
        ItemComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent,
            },
        ]),
        CarouselModule
    ],
    exports: [RouterModule],
})
export class HomeModule {}
