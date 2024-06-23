import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { ServicesComponent } from './components/services/services.component';
import { OrderManageComponent } from './components/order-manage/order-manage.component';
import { OrderComponent } from './components/order/order.component';
import { ProductManageComponent } from './components/product-manage/product-manage.component';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { PaymentMethodSelectScreenComponent } from './components/payment-method-select-screen/payment-method-select-screen.component';
import { PaymentCardPaymentComponent } from './components/payment-card-payment/payment-card-payment.component';
import { PaymentSuccessfullScreenComponent } from './components/payment-successfull-screen/payment-successfull-screen.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'product', component: ProductpageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'ordermanage', component: OrderManageComponent},
  {path: 'order', component: OrderComponent},
  {path: 'productmanage', component: ProductManageComponent},
  {path: 'signin', component: SignInPageComponent},
  {path: 'signup', component: SignUpPageComponent},
  {path: 'paymentselect', component: PaymentMethodSelectScreenComponent},
  {path: 'cardpayment', component: PaymentCardPaymentComponent},
  {path: 'paymentSuccessfull', component: PaymentSuccessfullScreenComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
