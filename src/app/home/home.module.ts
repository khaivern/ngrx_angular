import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule, CarouselModule, FormModule } from '@coreui/angular';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { DeleteService } from '../../components/products/item/delete.service';
import { ItemComponent } from '../../components/products/item/item.component';
import { ProductsComponent } from '../../components/products/products.component';
import { LandingComponent } from '../../pages/landing/landing.component';
import { ProductDetailComponent } from '../../pages/product-detail/product-detail.component';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import * as fromHome from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/home.effects';
import { PrefetchDirective } from 'src/directives/prefetch.directive';

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
        PrefetchDirective,
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
        EffectsModule.forFeature([HomeEffects]),
        StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.homeReducers),
    ],
    exports: [RouterModule],
    providers: [DeleteService, HomeEffects]
})
export class HomeModule {}
