import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { PriceComponent } from './components/price/price.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';


@NgModule({
  declarations: [
    ProductComponent,
    PriceComponent,
    MainPageComponent,
    ContentPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
