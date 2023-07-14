import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { PriceComponent } from './components/price/price.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
const routes: Routes = [
  {
    path: '',
    component: ContentPageComponent,
    children: [
      { path: '', component: ProductComponent },
      { path: 'details', component: PriceComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
