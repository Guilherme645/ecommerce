// src/app/payment/confirmation/confirmation.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  constructor(private router: Router) {}

  confirmOrder() {
    // Processar a confirmação do pedido
    alert('Order Confirmed!');
    this.router.navigate(['/concluido']);
  }
}
