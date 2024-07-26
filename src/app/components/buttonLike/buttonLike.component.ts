import { LikeService } from './../../services/like.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopup } from 'primeng/confirmpopup';
import { Produto } from 'src/app/produto';

@Component({
  selector: 'app-buttonLike',
  templateUrl: './buttonLike.component.html',
  styleUrls: ['./buttonLike.component.css']
})
export class ButtonLikeComponent  {
  @ViewChild(ConfirmPopup) confirmPopup!: ConfirmPopup;
    product: Produto | null = null;

    constructor(
        private confirmationService: ConfirmationService, 
        private messageService: MessageService,
        private likeService: LikeService
    ) {}

    showConfirmPopup(product: Produto) {
        this.product = product;
        this.confirmationService.confirm({
            target: event?.target as EventTarget,
            message: 'Deseja adicionar este produto aos favoritos?',
            accept: () => {
                if (this.product) { // Verifica se `product` não é `null`
                    this.likeService.addToLike(this.product);
                    this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Produto adicionado aos favoritos', life: 3000 });
                }
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejeitado', detail: 'Produto não adicionado aos favoritos', life: 3000 });
            }
        });
    }
}