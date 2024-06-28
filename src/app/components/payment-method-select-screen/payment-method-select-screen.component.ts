import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment-method-select-screen',
  standalone: true,
  imports: [],
  templateUrl: './payment-method-select-screen.component.html',
  styleUrls: ['./payment-method-select-screen.component.css']
})
export class PaymentMethodSelectScreenComponent {
  selectedPaymentMethod: string = 'card';
  constructor(public cartService: CartService) { }
}
