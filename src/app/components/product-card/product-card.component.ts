import { Component, Input, OnInit } from '@angular/core';

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

  ngOnInit(): void { }


}
