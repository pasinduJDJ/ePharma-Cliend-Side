import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-screen',
  templateUrl: './product-screen.component.html',
  styleUrls: ['./product-screen.component.css']
})
export class ProductScreenComponent implements OnInit {

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
