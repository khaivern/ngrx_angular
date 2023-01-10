import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule, CarouselModule, FormModule } from '@coreui/angular';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { DeleteService } from '../components/products/item/delete.service';
import { ItemComponent } from '../components/products/item/item.component';
import { ProductsComponent } from '../components/products/products.component';
import { LandingComponent } from '../pages/landing/landing.component';
import { ProductDetailComponent } from '../pages/product-detail/product-detail.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeroComponent,
        ProductsComponent,
        ItemComponent,
        LandingComponent,
        FooterComponent,
        HeaderComponent,
        ProductDetailComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent,
                children: [
                    { path: '', pathMatch: 'full', redirectTo: 'landing' },
                    { path: 'landing', component: LandingComponent },
                    { path: ':id', component: ProductDetailComponent },
                ],
            },
        ]),
        CarouselModule,
        ButtonModule,
        FormModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    exports: [RouterModule],
    providers: [DeleteService]
})
export class HomeModule {}
