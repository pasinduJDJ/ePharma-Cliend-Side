import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-popular-product-screen',
  templateUrl: './popular-product-screen.component.html',
  styleUrls: ['./popular-product-screen.component.css']
})
export class PopularProductScreenComponent implements OnInit  {
  constructor(private productService:ProductService) {}
  
  products:Product[] = [];

  async ngOnInit(){
    await this.loadProducts();

  }

  async loadProducts() {
    this.productService.getProducts().then(products => {
      products.subscribe(products => {
        this.products = products;
      })
    })
  }
}
