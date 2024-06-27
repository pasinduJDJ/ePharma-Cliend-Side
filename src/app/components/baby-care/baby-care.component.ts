import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-baby-care',
  templateUrl: './baby-care.component.html',
  styleUrls: ['./baby-care.component.css']
})
export class BabyCareComponent implements OnInit {
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
