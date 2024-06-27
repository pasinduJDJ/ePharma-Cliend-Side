import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  onImageLoadError($event: ErrorEvent) {
    console.error("Image loading error:", event);
  }
  @Input('product') product: any;

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit(): void { }


}
