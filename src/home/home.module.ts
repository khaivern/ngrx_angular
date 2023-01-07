import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from '@coreui/angular';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { ItemComponent } from '../components/products/item/item.component';
import { ProductsComponent } from '../components/products/products.component';
import { LandingComponent } from '../pages/landing/landing.component';
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
                ],
            },
        ]),
        CarouselModule,
    ],
    exports: [RouterModule],
})
export class HomeModule {}
