import { Produto } from './../../produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/Produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

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
}
