import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cash-on-delivery',
  templateUrl: './cash-on-delivery.component.html',
  styleUrls: ['./cash-on-delivery.component.css']
})
export class CashOnDeliveryComponent {

  payNowForm?: FormGroup<any>;


  constructor(public cartService: CartService, private activeRoute: ActivatedRoute, private router: Router,private fb: FormBuilder,) { }

  orderDetails: string = '';

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this.orderDetails = params['orderDetails'];
    });

    console.log(this.orderDetails);
    console.log(this.cartService.cartTotalPrice);

    this.payNowForm=this.fb.group({
      order_details: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tp: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]),
      location: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  Paynow() {
    throw new Error('Method not implemented.');
  }
}
