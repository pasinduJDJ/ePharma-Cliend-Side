import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductScreenComponent } from './components/product-screen/product-screen.component';
import { PopularProductScreenComponent } from './components/popular-product-screen/popular-product-screen.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomebaseComponentsComponent } from './components/homebase-components/homebase-components.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductCardComponent,
    ProductScreenComponent,
    PopularProductScreenComponent,
    FooterComponent,
    AboutUsComponent,
    HomebaseComponentsComponent,
    ProductpageComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
