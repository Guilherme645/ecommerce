import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-buttonLike',
  templateUrl: './buttonLike.component.html',
  styleUrls: ['./buttonLike.component.css']
})
export class ButtonLikeComponent  {
  productId: number | null = null;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  setProductId(id: number) {
    this.productId = id;
  }

  confirm() {
    if (this.productId === null) {
      this.messageService.add({ severity: 'warn', summary: 'No Product Selected', detail: 'Please select a product first.', life: 3000 });
      return;
    }

    this.confirmationService.confirm({
      header: 'Confirmation',
      message: `Are you sure you want to proceed with the action for product ID ${this.productId}?`,
      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',
      rejectButtonStyleClass: 'p-button-sm',
      acceptButtonStyleClass: 'p-button-outlined p-button-sm',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: `Action confirmed for product ID ${this.productId}`, life: 3000 });
        // Perform the action related to the product here, if needed
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Action rejected', life: 3000 });
      }
    });
  }
}