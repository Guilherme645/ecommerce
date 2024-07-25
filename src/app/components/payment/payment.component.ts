// src/app/payment/payment.component.ts
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  items: MenuItem[] = [];
  activeIndex: number = 0;

  ngOnInit() {
    this.items = [
      { label: 'Pessoal' },
      { label: 'Localização' },
      { label: 'Pagamento' },
      { label: 'Confirmação' }
    ];
  }

  next() {
    if (this.activeIndex < this.items.length - 1) {
      this.activeIndex++;
    }
  }

  prev() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
}
