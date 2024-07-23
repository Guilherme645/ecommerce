import { LikeService } from './../../services/like.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Produto } from './../../produto';
import { ProdutoService } from 'src/app/services/Produto.service';
import { CartService } from 'src/app/services/cart.service';  // Importe o serviço de carrinho

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private router: Router,
              private confirmationService: ConfirmationService, private messageService: MessageService,
              private cartService: CartService,
            private LikeService:LikeService) {}  // Injeção de dependência do serviço de carrinho

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((data: Produto[]) => {
      this.produtos = data;
      console.log('Products fetched:', this.produtos); // Adicione este log para depuração
    }, error => {
      console.error('Erro ao buscar produtos', error);
    });
  }

  viewProductDetails(id: number): void {
    this.router.navigate(['/visuprod', id]);
  }

  addToCart(product: Produto): void {
    this.cartService.addToCart(product);
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added to Cart', life: 3000 });
  }

  addTolike(product: Produto): void {
    this.LikeService.addToLike(product);
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added to Cart', life: 3000 });
  }
}
