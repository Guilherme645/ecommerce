import { LikeService } from './../../services/like.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProdutoService } from 'src/app/services/Produto.service';
import { Produto } from './../../produto';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-visuprod',
  templateUrl: './visuprod.component.html',
  styleUrls: ['./visuprod.component.css']
})
export class VisuprodComponent implements OnInit {
  produto: Produto | undefined;
  formGroup: FormGroup;
 

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private LikeService: LikeService,
    private cartService: CartService,
  ) {
    this.formGroup = this.fb.group({
      value: [0] // Initialize with default value
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      console.error('ID inválido');
      return;
    }

    this.produtoService.getProdutoById(id).subscribe(
      (data: Produto) => {
        console.log('Produto recebido:', data);
        this.produto = data;
      },
      error => {
        console.error('Erro ao buscar o produto', error);
      }
    );
  }
  addToCart(produto: Produto): void {
    this.cartService.addToCart(produto);
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added to Cart', life: 3000 });
  }

  addTolike(produto: Produto): void {
    this.LikeService.addToLike(produto);
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added to Cart', life: 3000 });
  }
}
