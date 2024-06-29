import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment-card-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment-card-payment.component.html',
  styleUrls: ['./payment-card-payment.component.css']
})
export class PaymentCardPaymentComponent implements OnInit {

  constructor(public cartService: CartService, private activeRoute: ActivatedRoute, private router: Router) { }

  orderDetails: string = '';
  
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this.orderDetails = params['orderDetails'];
    });
  }

}
