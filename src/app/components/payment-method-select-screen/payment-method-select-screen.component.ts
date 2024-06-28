import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment-method-select-screen',
  templateUrl: './payment-method-select-screen.component.html',
  styleUrls: ['./payment-method-select-screen.component.css']
})
export class PaymentMethodSelectScreenComponent implements OnInit {
  selectedPaymentMethod: string = 'card';
  orderDetails: string = '';
  constructor(public cartService: CartService, private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {

    this.activeRoute.queryParams.subscribe(params => {
      this.orderDetails = params['orderDetails'];
    });
  
  }
}
