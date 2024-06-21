import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { ServicesComponent } from './components/services/services.component';
import { OrderManageComponent } from './components/order-manage/order-manage.component';
import { OrderComponent } from './components/order/order.component';
import { ProductManageComponent } from './components/product-manage/product-manage.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'product', component: ProductpageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'ordermanage', component: OrderManageComponent},
  {path: 'order', component: OrderComponent},
  {path: 'productmanage', component: ProductManageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
