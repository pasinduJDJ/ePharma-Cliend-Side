import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-method-select-screen',
  standalone: true,
  imports: [],
  templateUrl: './payment-method-select-screen.component.html',
  styleUrls: ['./payment-method-select-screen.component.css']
})
export class PaymentMethodSelectScreenComponent {
  selectedPaymentMethod: string = 'card';
}
