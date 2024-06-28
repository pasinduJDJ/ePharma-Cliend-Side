import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/models/order';
import { Payment } from 'src/app/models/payment';
import { OrderService } from 'src/app/services/order.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.css']
})
export class OrderManageComponent implements OnInit {

  updateOrderForm?: FormGroup<any>;
  selectOrder?: Order;
  orders: Order[] = [];
  payments: Payment[] = [];

  constructor(private orderService: OrderService, private paymentService: PaymentService, private fb: FormBuilder) { }

  ngOnInit(): void {

    // Order Manage 
    this.orderService.getOrders().then(order => {
      order.subscribe(order => {
        this.orders = order;
      })
    })
    this.orderService.refreshTable.subscribe(refresh => {
      if (refresh) {
        this.loadOrders();
      }
    })
    this.updateOrderForm = this.fb.group({
      order_id: new FormControl(''),
      date: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      productname: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      user_id: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });
    this.orderService.selectOrder.subscribe(order => {
      this.selectOrder = order;
      this.updateOrderForm!.controls['order_id'].setValue(order.order_id);
      this.updateOrderForm!.controls['date'].setValue(order.date);
      this.updateOrderForm!.controls['location'].setValue(order.location);
      this.updateOrderForm!.controls['price'].setValue(order.price);
      this.updateOrderForm!.controls['productname'].setValue(order.productname);
      this.updateOrderForm!.controls['status'].setValue(order.status);
      this.updateOrderForm!.controls['user_id'].setValue(order.user_id);
      this.updateOrderForm!.controls['username'].setValue(order.username);
    })

    // Payment Manage
    this.paymentService.getPayment().then(payment => {
      payment.subscribe(payment => {
        this.payments = payment;
        console.log(payment)
      })
    })
  }


  // Order Manage 

  async loadOrders() {
    this.orderService.getOrders().then(order => {
      order.subscribe(order => {
        this.orders = order;
      })
    })
  }

  updateOrder(order: Order) {
    this.orderService.setSelectOrder(order);
  }

  async addOrder() {
    if (this.updateOrderForm?.invalid) {
      alert("Please Check Form Again")
    } else {
      if (this.selectOrder == null || this.selectOrder == undefined) {
        await this.orderService.addOrder(this.updateOrderForm?.getRawValue()).then(result => {
          this.updateOrderForm?.reset();
          alert("Product Added successfully");
        });
      } else {
        await this.orderService.updateOrder(this.updateOrderForm!.getRawValue()).then(result => {
          this.updateOrderForm?.reset();
          alert("Product Update successfully");
        });
      }
    }
  }

  async deleteOrder(order: Order) {
    await this.orderService.deleteOrder(order.order_id).then(data => {
      this.loadOrders();
    },)
  }

  deletePayment(payment: Payment) {
    this.paymentService.deletePayment(payment.payment_id).then(data => {
      this.loadPayments();
    },)
  }
  loadPayments() {
    this.paymentService.getPayment().then(payment => {
      payment.subscribe(payment => {
        this.payments = payment;
      })
    })
  }

  
}
