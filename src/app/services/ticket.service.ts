// src/app/services/ticket.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private paymentCompleteSubject = new Subject<any>();
  paymentComplete$ = this.paymentCompleteSubject.asObservable();

  completePayment(personalInformation: any) {
    this.paymentCompleteSubject.next(personalInformation);
  }
}
